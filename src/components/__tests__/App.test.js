import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App';

describe('Navbar', () => {
  test('Navbar rendered correctly', () => {
    const container = render(
      <Router>
        <App />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
