import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';
describe('NavBar', () => {
  test('NavBar rendered correctly',  () => {
    render(<NavBar />);

    const navbar =  screen.findAllByRole('heading');
    expect(navbar).toBeInTheDocument();
  });
});
