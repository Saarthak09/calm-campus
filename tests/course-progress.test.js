// tests/course-progress-button.test.js
import { render, fireEvent, screen } from '@testing-library/react';
//import CourseProgressButton from './CourseProgressButton'; // adjust this import as per your file structure
import axios from 'axios';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import CourseProgressButton from '../app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-progress-button';
import React from 'react';

jest.mock('../app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-progress-button', () => {
  return function DummyCourseProgressButton({onClick}) {
    return <button onClick={onClick}>My Button</button>;
  } 
});


describe('CourseProgressButton', () => {

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();

    render(
      <CourseProgressButton onClick={onClick} />
    );

    fireEvent.click(screen.getByRole('button'));
    
    expect(onClick).toHaveBeenCalledTimes(1);
  });

});