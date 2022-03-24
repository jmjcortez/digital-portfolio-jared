import '@testing-library/jest-dom';

import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from '../App';

afterEach(() => {
  cleanup();
});

test('should render App', () => {
  render(<App />);
  const appElement = screen.getByTestId('App');
  expect(appElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});