import { render, screen } from '@testing-library/react';
import { auth } from "@clerk/nextjs";
import {CourseLayout} from  './CourseLayout';
import React from 'react';

jest.mock("@clerk/nextjs");

describe('CourseLayout', () => {
  beforeEach(() => {
    auth.mockReturnValue({ userId: 'testUserId' });
  });

  it('renders without crashing', () => {
    render(<CourseLayout params={{ courseId: 'testCourseId' }} />);
    expect(screen.getByText('CourseNavbar')).toBeInTheDocument();
    expect(screen.getByText('CourseSidebar')).toBeInTheDocument();
  });

  // Add more tests as needed
});
