import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';


test('render day in life link', () => {
    render(<Home />)
    expect(screen.getByText(/Day in The Life Page/)).toBeInTheDocument();
});

