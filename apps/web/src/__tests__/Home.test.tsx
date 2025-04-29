import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to Coachable')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Home />);
    expect(screen.getByText('A platform for coaches to provide feedback on athlete videos')).toBeInTheDocument();
  });

  it('renders both feature cards', () => {
    render(<Home />);
    expect(screen.getByText('For Athletes')).toBeInTheDocument();
    expect(screen.getByText('For Coaches')).toBeInTheDocument();
  });
}); 