// src/fonts.ts

type ThemeId =
    | 'modern' | 'general-purpose' | 'tech' | 'nordic' | 'monochrome' | 'stylish'
    | 'playful' | 'funky' | 'pastel' | 'sunset' | 'glass'
    | 'scifi' | 'cyberpunk' | 'nerdy' | 'ocean' | 'brutalist'
    | 'luxury' | 'luxury-dark' | 'art-deco' | 'vintage'
    | 'stripe' | 'airbnb' | 'spotify' | 'notion' | 'linear'
    | 'robinhood' | 'duolingo' | 'headspace' | 'x' | 'coinbase'
    // New batch
    | 'sport' | 'gaming' | 'news' | 'religion'
    | 'beauty' | 'nature' | 'travel' | 'e-commerce';

/**
 * One Google Fonts URL per theme — only the families + weights that theme needs.
 * `display=swap` shows the fallback immediately, then swaps when the font loads.
 *
 * `null` = the theme's SCSS only uses a system stack, so there's nothing to fetch.
 */
const THEME_FONT_URLS: Record<ThemeId, string | null> = {
    // --- Original collection ---
    modern: null, // system stack only
    'general-purpose':
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    tech:
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap',
    nordic:
        'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap',
    monochrome:
        'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap',
    stylish:
        'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap',
    playful:
        'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
    funky:
        'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Fredoka:wght@400;500;600;700&display=swap',
    pastel:
        'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Poppins:wght@400;500;600&display=swap',
    sunset:
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@400;500;600&display=swap',
    glass:
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    scifi:
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap',
    cyberpunk:
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap',
    nerdy:
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Share+Tech+Mono&display=swap',
    ocean:
        'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap',
    brutalist:
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap',
    luxury:
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap',
    'luxury-dark':
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap',
    'art-deco':
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap',
    vintage:
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap',
    sport:
        'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@500;600;700;800;900&display=swap',
    gaming:
        'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap',
    news:
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:wght@400;500;600;700;800&display=swap',
    religion:
        'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap',
    beauty:
        'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
    nature:
        'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700;900&family=Work+Sans:wght@400;500;600;700&display=swap',
    travel:
        'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=DM+Serif+Display:wght@400&display=swap',
    'e-commerce':
        'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap',

    // --- Industry-inspired collection ---

    // Stripe: Source Sans 3 for UI, Source Code Pro for code blocks.
    stripe:
        'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&family=Source+Code+Pro:wght@400;500;600&display=swap',

    // Airbnb: system stack only (Circular is proprietary; the SCSS falls back).
    airbnb: null,

    // Spotify: system stack only (CircularSp is proprietary).
    spotify: null,

    // Notion: Inter is the closest free match to their custom NotionInter.
    notion:
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',

    // Linear: Inter + Inter Tight for display; JetBrains Mono for tag accents.
    linear:
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',

    // Robinhood: Inter body; no display serif needed.
    robinhood:
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',

    // Duolingo: Nunito is the closest free stand-in for DIN Round Pro / Feather Bold.
    duolingo:
        'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap',

    // Headspace: system stack only (Apercu is proprietary).
    headspace: null,

    // X: system stack (they use Chirp internally; Helvetica/Segoe fallback is fine).
    x: null,

    // Coinbase: system stack (Coinbase Sans / Display are proprietary).
    coinbase: null,

};

/** Ensure a theme's font CSS has been requested once. Idempotent. */
export function loadFontsForTheme(theme: ThemeId): Promise<void> {
    const url = THEME_FONT_URLS[theme];
    if (!url) return Promise.resolve();

    const selector = `link[data-font-theme="${theme}"]`;
    if (document.querySelector(selector)) return Promise.resolve();

    return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.setAttribute('data-font-theme', theme);
        link.onload = () => resolve();
        link.onerror = () => resolve(); // never block — fallbacks still render
        document.head.appendChild(link);
    });
}

