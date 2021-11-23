import React from 'react';
import { render, screen } from '@testing-library/react';
import ClassicalContemporaryComposers from './ClassicalContemporaryComposers';

test('renders All Composers', () => {
    render(<ClassicalContemporaryComposers />)
    expect(screen.getByText(/ALL/)).toBeInTheDocument()
});

test('renders Female Composers', () => {
    render(<ClassicalContemporaryComposers />)
    expect(screen.getByText(/FEMALE/)).toBeInTheDocument()
});


