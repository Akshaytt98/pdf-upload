/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PdfDragger from '../Components/PdfDragger';

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

  // Add more test cases as needed
});
