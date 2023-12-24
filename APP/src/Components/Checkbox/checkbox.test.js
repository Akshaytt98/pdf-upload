import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';


describe('Checkbox', () => {

    test('renders correctly', async () => {
        const numPages = 5
        render(<Checkbox numPages={numPages} selectedPages={[1]} />)
        expect(screen.getAllByText(/Page/i).length).toBe(numPages);
    })

    test('onchange called', async () => {
        const numPages = 5;
        const selectedPages = 1;
        const handlePageSelection = jest.fn()
        render(<Checkbox
            numPages={numPages}
            selectedPages={[selectedPages]}
            handlePageSelection={handlePageSelection}
        />);
        fireEvent.click(screen.getByTestId(selectedPages));
        expect(handlePageSelection).toHaveBeenCalledTimes(1);
        expect(handlePageSelection).toHaveBeenCalledWith(selectedPages + 1);
    })

    test('checks the selected checkboxes', () => {
        const numPages = 3;
        const selectedPages = [2];
        render(<Checkbox 
             numPages={numPages}
             selectedPages={selectedPages} 
             handlePageSelection={() => {}} 
        />);
        selectedPages.forEach((page) => {
          const checkbox = screen.getByTestId((page-1).toString());
          expect(checkbox).toHaveProperty('checked', true);
        });
      });

})