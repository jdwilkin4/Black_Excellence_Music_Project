import React from 'react';
import { render, screen } from '@testing-library/react';
import JazzComposers from './JazzComposers';

test('renders All Jazz Composers', () => {
    render(<JazzComposers />)
    expect(screen.getByText(/ALL/)).toBeInTheDocument()
});

test('renders Female Composers', () => {
    render(<JazzComposers />)
    expect(screen.getByText(/FEMALE/)).toBeInTheDocument()
});

