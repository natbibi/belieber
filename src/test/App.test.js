import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {

  beforeEach(() => {
    render(<App />);
  });

  test("it has a button")

  test("renders story headlines", () => {
    const headlines = screen.getByRole('list');
    expect(headlines.textContent).toContain("Beware the Frumious Bandersnatch");
  })
  
})