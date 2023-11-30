// // chapter-id-page.test.js

// import { render, screen } from '@testing-library/react';
// import { useRouter } from 'next/navigation';
// import ChapterIdPage from 'pages/[courseId]/chapters/[chapterId]';

// jest.mock('@/actions/get-chapter');
// jest.mock('next/navigation');

// describe('ChapterIdPage', () => {

//   it('redirects to homepage when user not logged in', () => {

//     useRouter().push = jest.fn();

//     render(<ChapterIdPage params={{ courseId: '1', chapterId: '1' }} />);

//     expect(useRouter().push).toHaveBeenCalledWith('/');

//   });

//   it('renders video player', async () => {

//     useRouter().push = jest.fn();

//     render(
//       <ChapterIdPage 
//         params={{ courseId: '1', chapterId: '1' }}  
//       />
//     );

//     expect(await screen.findByText('Video Title')).toBeInTheDocument();
  
//   });

//   it('renders course progress button', async () => {

//     useRouter().push = jest.fn();

//     render(
//       <ChapterIdPage 
//         params={{ courseId: '1', chapterId: '1' }}
//       />  
//     );

//     expect(screen.getByRole('button', { name: /mark as complete/i })).toBeInTheDocument();
  
//   });

// });