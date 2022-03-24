import '@testing-library/jest-dom';

import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Contact from "../Contact";

afterEach(() => {
  cleanup();
});

test('should render Contact', () => {
  render(<Contact />);
  const contactElement = screen.getByTestId('contact-container');
  expect(contactElement).toBeInTheDocument();
});

test('matches snaphshot', () => {
  const tree = renderer.create(<Contact />);
  expect(tree).toMatchSnapshot();
});