import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders black excellence text', () => {
    render(<Footer />)
    expect(screen.getByText(/Black Excellence Music Project/)).toBeInTheDocument()
});

test('renders afrovoices link', () => {
    render(<Footer />)
    expect(screen.getByText('AfroVoices').closest('a')).toHaveAttribute('href', 'https://afrovoices.com/')
});

test('renders AfriClassical links', () => {
    render(<Footer />)
    expect(screen.getByText('AfriClassical').closest('a')).toHaveAttribute('href', 'https://chevalierdesaintgeorges.homestead.com/index.html')
});

test('renders BlackPast links', () => {
    render(<Footer />)
    expect(screen.getByText('BlackPast').closest('a')).toHaveAttribute('href', 'https://www.blackpast.org/')
});

test('renders Black Excellence YouTube Series', () => {
    render(<Footer />)
    expect(screen.getByText('Black Excellence YouTube Series').closest('a')).toHaveAttribute('href', 'https://www.youtube.com/watch?v=FIWELCEBG0E&list=PLqHdMZJ08WM11cAx7YqdmvHb5YawvM0sq')
});

test('renders Institute for Composer Diversity', () => {
    render(<Footer />)
    expect(screen.getByText('Institute for Composer Diversity').closest('a')).toHaveAttribute('href', 'https://www.composerdiversity.com/')
});

test('renders Music By Black Composers', () => {
    render(<Footer />)
    expect(screen.getByText('Music By Black Composers').closest('a')).toHaveAttribute('href', 'https://www.musicbyblackcomposers.org/resources/living-composers-directory/')
});

test('renders YouTube Channel', () => {
    render(<Footer />)
    expect(screen.getByText('YouTube Channel').closest('a')).toHaveAttribute('href', 'https://www.youtube.com/channel/UCI0LQVebPSgovg-qJCGEqjg/playlists')
});

test('renders Facebook link', () => {
    render(<Footer />)
    expect(screen.getByText('Facebook').closest('a')).toHaveAttribute('href', 'https://www.facebook.com/blackexcellencemusicproject/')
});

test('renders Twitter link', () => {
    render(<Footer />)
    expect(screen.getByText('Twitter').closest('a')).toHaveAttribute('href', 'https://twitter.com/BlackEx63860012')
});

test('renders Instagram link', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram').closest('a')).toHaveAttribute('href', 'https://www.instagram.com/blackexcellencemusicproject31/')
});