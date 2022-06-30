import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('Expects there to be one instance of the daphne image based on the alt text and then a second image after clicking the button', () => {
  render(<App />);
  const daphneOnLoad = screen.getAllByAltText(/Daphne running/i);
  expect(daphneOnLoad.length).toBe(1);

  const daphneButton = screen.getByText(/Run, Daphne!/i);

  fireEvent.click(daphneButton);

  const imagesAfterClick = screen.getAllByAltText(/Daphne running/i);
  expect(imagesAfterClick.length).toBe(2);
});

test('expects to see the', () => {
  render(<App />);
  const pictureOnLoad = screen.getByAltText(/picture of the meddling kids/i);
  expect(pictureOnLoad).toBeInTheDocument();
});