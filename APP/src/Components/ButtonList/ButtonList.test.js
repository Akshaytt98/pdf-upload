import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonList  from './ButtonList';

describe('Counter', () => {
    
    test('renders correctly', async () => {
        const mockProps = {
            extreactedPdfPath: true
          };
        render(<ButtonList {...mockProps}/>)
        expect(screen.getByText(/Download Extracted PDF/i)).toBeInTheDocument();
        expect(screen.getByText(/Extract PDF/i)).toBeInTheDocument();
        expect(screen.getByText(/Upload New PDF/i)).toBeInTheDocument();

    })

    it('calls downloadPDF', () => {
        const mockProps = {
            extreactedPdfPath: true,
            downloadPDF: jest.fn(),
            handleCreatePDF: jest.fn(),
            handleCancel: jest.fn()
          };
        render(<ButtonList {...mockProps}  />);
        fireEvent.click(screen.getByText(/Download Extracted PDF/i));
        fireEvent.click(screen.getByText(/Extract PDF/i));
        fireEvent.click(screen.getByText(/Upload New PDF/i));
        expect(mockProps.downloadPDF).toHaveBeenCalledTimes(1);
        expect(mockProps.handleCreatePDF).toHaveBeenCalledTimes(1);
        expect(mockProps.handleCancel).toHaveBeenCalledTimes(1);

      });
})