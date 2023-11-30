import { render, screen } from '@testing-library/react';
import MobileSidebar from './MobileSidebar';

describe('MobileSidebar', () => {
  it('renders without crashing', () => {
    render(<MobileSidebar />);
    expect(screen.getByRole('button')).toBeInTheDocument(); // Assuming Menu renders a button
    expect(screen.getByText('Sidebar')).toBeInTheDocument(); // Replace 'Sidebar' with actual text or elements that you're expecting in the Sidebar
  });

});
