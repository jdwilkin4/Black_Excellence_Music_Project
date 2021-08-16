import React from 'react';
import { render, screen } from '@testing-library/react';
import VocalistsPage from './VocalistsPage';

test('renders All', () => {
    render(<VocalistsPage />)
    expect(screen.getByText(/All/)).toBeInTheDocument()
});

test('renders Jazz Vocalists', () => {
    render(<VocalistsPage />)
    expect(screen.getByText(/Jazz Vocalists/)).toBeInTheDocument()
});

test('renders Classical Vocalists', () => {
    render(<VocalistsPage />)
    expect(screen.getByText(/Classical Vocalists/)).toBeInTheDocument()
});