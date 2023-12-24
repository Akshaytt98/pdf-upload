import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

// Mock the fetch function
fetchMock.enableMocks();

describe('App Component', () => {
  beforeEach(() => {
    // Clear fetch mocks before each test
    fetchMock.resetMocks();
  });

  test('render', () => {
    render(<App />)
    const linkElement = screen.getByText(/PDF Extractor/i);
    expect(linkElement).toBeInTheDocument();
  })

  // it('uploads a PDF file and previews it', async () => {
  //   fetchMock.mockResolvedValueOnce({
  //     ok: true,
  //     json: () => Promise.resolve({ filename: { path: 'mocked-file-path.pdf' } }),
  //   });

  //   render(<App />);

  //   const dropzone = screen.getByTestId("pdf-dragger");

  //   fireEvent.drop(dropzone, {
  //     dataTransfer: {
  //       files: [new File([''], 'test.pdf', { type: 'application/pdf' })],
  //     },
  //   });

  //   await screen.findByText('Selected PDF:');

  //   fireEvent.click(screen.getByText('Preview Uploaded PDF'));

  //   await screen.findByText('Cancel');
  // });

})