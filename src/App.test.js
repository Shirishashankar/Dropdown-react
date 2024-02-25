// Importing necessary functions from the testing library

import { render, screen } from '@testing-library/react';

// Importing the component to be tested

import App from './App';

// Defining a test case

test('renders learn react link', () => {

  // Rendering the App component

  render(<App />);

  // Querying the DOM to find an element with text 'learn react'

  const linkElement = screen.getByText(/learn react/i);

  // Asserting that the element is present in the document
  
  expect(linkElement).toBeInTheDocument();
});
