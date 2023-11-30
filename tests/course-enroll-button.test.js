// course-enroll-button.test.js
import { CourseEnrollButton }  from '../app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-enroll-button';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// course-enroll-button.test.js

jest.mock('../app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-enroll-button', () => {

    return function DummyCourseEnrollButton({onClick}) {
     
      return (
        <button onClick={onClick}>
          Enroll
        </button>
      );
    
    }
  
  });
  
  
  describe('CourseEnrollButton', () => {
  
    it('calls onClick when clicked', () => {
  
      const onClick = jest.fn();
  
      render(
        <CourseEnrollButton onClick={onClick} />  
      );
  
      fireEvent.click(screen.getByText('enroll'));
    
      expect(onClick).toHaveBeenCalledTimes(1);
  
    });
  
  });