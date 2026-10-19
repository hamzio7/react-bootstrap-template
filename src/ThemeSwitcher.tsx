import {useEffect, useMemo, useState} from 'react';
import {loadFontsForTheme} from './fonts';

const THEMES = [
    {id: 'modern', label: 'Modern'},
    {id: 'general-purpose', label: 'General Purpose'},
    {id: 'tech', label: 'Tech'},
    {id: 'nordic', label: 'Nordic'},
    {id: 'monochrome', label: 'Monochrome'},
    {id: 'stylish', label: 'Stylish'},
    {id: 'playful', label: 'Playful'},
    {id: 'funky', label: 'Funky'},
    {id: 'pastel', label: 'Pastel'},
    {id: 'sunset', label: 'Sunset'},
    {id: 'glass', label: 'Glass'},
    {id: 'scifi', label: 'Sci-Fi'},
    {id: 'cyberpunk', label: 'Cyberpunk'},
    {id: 'nerdy', label: 'Nerdy'},
    {id: 'ocean', label: 'Ocean'},
    {id: 'brutalist', label: 'Brutalist'},
    {id: 'luxury', label: 'Luxury'},
    {id: 'luxury-dark', label: 'Midnight Gold'},
    {id: 'art-deco', label: 'Art Deco'},
    {id: 'vintage', label: 'Vintage'},
    {id: 'stripe', label: 'Stripe'},
    {id: 'airbnb', label: 'Airbnb'},
    {id: 'spotify', label: 'Spotify'},
    {id: 'notion', label: 'Notion'},
    {id: 'linear', label: 'Linear'},
    {id: 'robinhood', label: 'Robinhood'},
    {id: 'duolingo', label: 'Duolingo'},
    {id: 'headspace', label: 'Headspace'},
    {id: 'x', label: 'X'},
    {id: 'coinbase', label: 'Coinbase'},
    // Sports, media & entertainment
    { id: 'sport',      label: 'Sport' },
    { id: 'gaming',     label: 'Gaming' },
    { id: 'news',       label: 'News' },
// Lifestyle & culture
    { id: 'religion',   label: 'Religion' },
    { id: 'beauty',     label: 'Beauty' },
    { id: 'nature',     label: 'Nature' },
    { id: 'travel',     label: 'Travel' },
// Commerce
    { id: 'e-commerce', label: 'E-Commerce' },
] as const;

function readInitialIndex(): number {
    if (typeof window === 'undefined') return 0;
    const stored = sessionStorage.getItem('theme');
    const i = THEMES.findIndex((t) => t.id === stored);
    return i >= 0 ? i : 0;
}

export default function ThemeSwitcher() {
    const [index, setIndex] = useState(readInitialIndex);
    const theme = THEMES[index];

    // Kick off font loading immediately when theme changes,
    // so fonts arrive by the time the CSS is parsed.
    useEffect(() => {
        void loadFontsForTheme(theme.id);
    }, [theme.id]);

    // Swap the stylesheet link
    useEffect(() => {
        let link = document.querySelector<HTMLLinkElement>('link[data-theme-link]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'stylesheet';
            link.setAttribute('data-theme-link', '');
            document.head.appendChild(link);
        }
        link.href = `/themes/${theme.id}.css`;
        document.documentElement.setAttribute('data-theme', theme.id);
        sessionStorage.setItem('theme', theme.id);
    }, [theme]);

    const prev = useMemo(
        () => () => setIndex((i) => (i - 1 + THEMES.length) % THEMES.length),
        [],
    );
    const next = useMemo(
        () => () => setIndex((i) => (i + 1) % THEMES.length),
        [],
    );

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const t = e.target as HTMLElement;
            if (
                t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' ||
                t.tagName === 'SELECT' || t.isContentEditable
            ) return;
            if (e.key === 'ArrowLeft') prev();
            else if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [prev, next]);

    return (
        <div className="theme-switcher d-flex align-items-center gap-2">
            <button
                type="button" className="btn theme-switcher__btn"
                onClick={prev} aria-label="Previous theme" title="Previous theme (←)"
            ><i className='bi bi-chevron-left'></i>
            </button>
            <div className="theme-switcher__label text-center">
                <div className="theme-switcher__eyebrow">Theme</div>
                <div className="theme-switcher__name">{theme.label}</div>
                <div className="theme-switcher__count">{index + 1} / {THEMES.length}</div>
            </div>
            <button
                type="button" className="btn theme-switcher__btn"
                onClick={next} aria-label="Next theme" title="Next theme (→)"
            ><i className='bi bi-chevron-right'></i>
            </button>
        </div>
    );
}