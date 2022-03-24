import '@testing-library/jest-dom';

import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Illustrations from '../Illustrations';

afterEach(() => {
  cleanup();
});

test('should render Illustrations', () => {
  render(<Illustrations />);
  const illustrationElement = screen.getByTestId('gallery');
  expect(illustrationElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const tree = renderer.create(<Illustrations />);
  expect(tree).toMatchSnapshot();
});