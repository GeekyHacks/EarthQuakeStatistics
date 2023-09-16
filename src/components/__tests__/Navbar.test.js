import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

describe('Navbar', () => {
  test('Navbar rendered correctly', () => {
    const navbar = render(
        <Router>
          <NavBar />
        </Router>

    );
    expect(navbar).toMatchSnapshot();
  });
});
