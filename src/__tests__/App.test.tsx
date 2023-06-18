import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders App component', () => {
  render(<App />);
  const searchBarElement = screen.getByPlaceholderText('Search by title...');
  expect(searchBarElement).toBeInTheDocument();
});


