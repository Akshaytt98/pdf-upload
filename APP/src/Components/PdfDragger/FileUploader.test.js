/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { screen,render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PdfDragger from './PdfDragger';
import { expect } from '@jest/globals';

const mockToast = jest.fn();
jest.mock('react-toastify', () => ({
  toast: {
    error: mockToast,
  },
}));


describe('PdfDragger Component', () => {
  // Mock the props
  const mockProps = {
    files: null,
    uploadedPdf: null,
    getPdf: jest.fn(),
    onDrop: jest.fn(),
  };

  it('renders without crashing', () => {
    const { getByText } = render(<PdfDragger {...mockProps} />);
    expect(getByText(/Drag 'n' drop a PDF file here, or click to select a file/i)).toBeInTheDocument();
  });

  it('displays selected PDF information if uploadedPdf is provided', () => {
    const uploadedPdf = { name: 'example.pdf' };
    const { getByText } = render(<PdfDragger {...mockProps} uploadedPdf={uploadedPdf} />);
    expect(getByText(/Selected PDF:/i)).toBeInTheDocument();
    expect(getByText(/example.pdf/i)).toBeInTheDocument();
  });



  it('calls getPdf function when "Preview Uploaded PDF" button is clicked', () => {
    const uploadedPdf = { name: 'example.pdf' };
    const { getByText } = render(<PdfDragger {...mockProps} uploadedPdf={uploadedPdf} />);
    const previewButton = getByText(/Preview Uploaded PDF/i);
    fireEvent.click(previewButton);
    expect(mockProps.getPdf).toHaveBeenCalledTimes(1);
  });

  // it('show error if file is not pdf', async () => {
  //   const uploadedPdf = { name: 'example.jpg' };
  //   const { getByText } = render(<PdfDragger {...mockProps} uploadedPdf={uploadedPdf} />);
  //   const previewButton = getByText(/Preview Uploaded PDF/i);
  //   fireEvent.click(previewButton);
  //   const { getByText: getByTextNew } = render(<App  />);
  //   expect(getByTextNew(/Please select a PDF file/i)).toBeInTheDocument();
  //   await waitFor(() => { 
  //     expect(mockToast).toHaveBeenCalledWith({ type: 'error', message: 'Please select a PDF file' });
  //   })
  // });

  // Add more test cases as needed
});
