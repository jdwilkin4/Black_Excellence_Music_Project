import React from 'react'
import { render, screen } from '@testing-library/react';
import WelcomePage from './WelcomePage';

test('renders start game button text', () => {
    render(<WelcomePage />)
    expect(screen.getByText(/Start Game/)).toBeInTheDocument()
});

