import React from 'react';
import { render, screen} from "@testing-library/react";
import Button from './index';

test('renders button component',()=>{
  render(<Button name="Request Demo"/>)
  const buttonComponent = screen.getByText(/Request Demo/);

  expect(buttonComponent).toBeInTheDocument()

})

test('renders button component learn more',()=>{
  render(<Button name="Learn more"/>)
  const buttonComponent = screen.getByText(/Learn more/);

  expect(buttonComponent).toBeInTheDocument()

})