// course-id-page.test.js

import CourseIdPage from '..app/course/';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';

jest.mock('@/lib/db');
jest.mock('next/navigation');

describe('CourseIdPage', () => {

  it('redirects to homepage if course not found', async () => {
    
    useRouter().push = jest.fn();

    db.course.findUnique.mockResolvedValueOnce(null);

    render(<CourseIdPage params={{ courseId: '123'}} />);

    expect(useRouter().push).toHaveBeenCalledWith('/');

  });

  it('enrolls user if not already enrolled', async () => {

    useRouter().push = jest.fn(); 

    db.course.findUnique.mockResolvedValueOnce({
      id: '123',
      chapters: []
    });

    render(<CourseIdPage params={{ courseId: '123' }} />);

    expect(db.enroll.create).toHaveBeenCalledWith({
      data: {
        courseId: '123',
        userId: '1'  
      }
    });

  });

  it('redirects to first chapter if enrolled', async () => {

    useRouter().push = jest.fn();

    db.course.findUnique.mockResolvedValueOnce({
      id: '123',  
      chapters: [
        { id: '456' }
      ]
    });

    render(<CourseIdPage params={{ courseId: '123' }} />);

    expect(useRouter().push).toHaveBeenCalledWith('/courses/123/chapters/456');

  });

});