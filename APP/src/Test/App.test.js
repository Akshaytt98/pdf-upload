import React from 'react';
import { screen,render, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('render', () => {
    render(<App/>) 
    const linkElement =  screen.getByText(/PDF Extractor/i);
    expect(linkElement).toBeInTheDocument();
  })