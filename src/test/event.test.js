import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/calculator';

describe('Navbar: ', () => {
  test('should render NavBar', () => {
    render(
      <nav className="nav">
        <h1 className="logo">Math Magicians</h1>
        <ul className="nav-links">
          <li>
            <a to="/" className="link">
              Home
            </a>
          </li>
          <li>
            <a to="/calculator" className="link">
              Calculator
            </a>
          </li>
          <li>
            <a to="/quote" className="link">
              Quote
            </a>
          </li>
        </ul>
      </nav>,
    );

    userEvent.click(screen.getByText('Quote'));
    userEvent.click(screen.getByText('Home'));
    userEvent.click(screen.getByText('Calculator'));
  });

  test('should render calculator', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('1'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('4'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('7'));
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('9'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('÷'));
    userEvent.click(screen.getByText('AC'));
    userEvent.click(screen.getByText('%'));
    userEvent.click(screen.getByText('.'));
    userEvent.click(screen.getByText('='));
    userEvent.click(screen.getByText('x'));
  });
});
