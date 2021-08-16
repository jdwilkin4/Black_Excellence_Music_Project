import React from 'react';
import { render, screen } from '@testing-library/react';
import Instrumentalists from './Instrumentalists';

test('renders All', () => {
    render(<Instrumentalists />)
    expect(screen.getByText(/All/)).toBeInTheDocument()
});

test('renders Woodwinds', () => {
    render(<Instrumentalists />)
    expect(screen.getByText(/Woodwinds/)).toBeInTheDocument()
});

test('renders Brass', () => {
    render(<Instrumentalists />)
    expect(screen.getByText(/Brass/)).toBeInTheDocument()
});

test('renders Strings', () => {
    render(<Instrumentalists />)
    expect(screen.getByText(/Strings/)).toBeInTheDocument()
});


test('renders Piano', () => {
    render(<Instrumentalists />)
    expect(screen.getByText(/Piano/)).toBeInTheDocument()
});