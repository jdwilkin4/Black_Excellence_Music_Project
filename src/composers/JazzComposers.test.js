import React from 'react';
import { render, screen } from '@testing-library/react';
import JazzComposers from './JazzComposers';

test('renders All Jazz Composers', () => {
    render(<JazzComposers />)
    expect(screen.getByText(/All Jazz Composers/)).toBeInTheDocument()
});

test('renders Female Composers', () => {
    render(<JazzComposers />)
    expect(screen.getByText(/Female Composers/)).toBeInTheDocument()
});

test('renders Male Composers', () => {
    render(<JazzComposers />)
    expect(screen.getByText(/Male Composers/)).toBeInTheDocument()
});