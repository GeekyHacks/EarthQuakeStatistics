import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';
describe('NavBar', () => {
  test('NavBar rendered correctly', async () => {
    render(<NavBar />);

    const navbar = await screen.findAllByRole('heading');
    expect(navbar).toBeInTheDocument();
  });
});
