import React from 'react';
import { render, screen} from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Header from './index';


test('renders header component', ()=>{
  render(<Header/>);
  const menuElement = screen.getByTitle("menu")

  expect(menuElement).toBeInTheDocument()
})

test('should render component button', () => {
  render(<Header/>);
  const buttonElement = screen.getByTestId("button")

  expect(buttonElement).toBeInTheDocument()
})