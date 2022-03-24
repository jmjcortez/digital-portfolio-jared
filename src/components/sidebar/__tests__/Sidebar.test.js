import '@testing-library/jest-dom';

import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Sidebar from '../Sidebar';

afterEach(() => {
  cleanup();
})

test('should render gallery if showSideBar is true', () => {
  render(<BrowserRouter><Sidebar showSideBar={true} /></BrowserRouter>);
  const sidebarElement = screen.getByTestId('sidebar');
  expect(sidebarElement).toBeInTheDocument();
});

test('should NOT render gallery if showSideBar is false', () => {
  render(<BrowserRouter><Sidebar showSideBar={false} /></BrowserRouter>);
  const emptyDiv = screen.getByTestId('empty-div');
  expect(emptyDiv).toBeInTheDocument();
});

test('matches snaphshot', () => {
  const tree = renderer.create(<BrowserRouter><Sidebar /></BrowserRouter>);
  expect(tree).toMatchSnapshot();
});