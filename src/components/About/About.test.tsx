import React from 'react';
import { render, screen} from "@testing-library/react";
import About from './index';

test('renders about component', () => {
  render(<About/>);
  const aboutText = screen.getByTitle('about')

  expect(aboutText).toBeInTheDocument()
})

// test('render img about', ()=> {
//   const aboutImg = screen.getByTestId('img')

//   expect(aboutImg).toBeInTheDocument() 
// })