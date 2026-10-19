// scripts/build-themes.mjs
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const THEMES = [
    // Original collection
    'modern', 'general-purpose', 'tech', 'nordic', 'monochrome', 'stylish',
    'playful', 'funky', 'pastel', 'sunset', 'glass',
    'scifi', 'cyberpunk', 'nerdy', 'ocean', 'brutalist',
    'luxury', 'luxury-dark', 'art-deco', 'vintage',
    // Industry leaders
    'stripe', 'airbnb', 'spotify', 'notion', 'linear',
    'robinhood', 'duolingo', 'headspace', 'x', 'coinbase',
    // Industry categories
    'sport', 'gaming', 'news', 'religion',
    'beauty', 'nature', 'travel', 'e-commerce',
];

// ───────────────────────────────────────────────────────────
// 1. Ensure the output directory exists
// ───────────────────────────────────────────────────────────
const OUT_DIR = resolve(ROOT, 'public/themes');
mkdirSync(OUT_DIR, { recursive: true });

// ───────────────────────────────────────────────────────────
// 2. Verify every SCSS source file exists BEFORE running sass
//    (gives a clear, per-theme error instead of sass's "file not found")
// ───────────────────────────────────────────────────────────
const missing = THEMES
    .map((id) => resolve(ROOT, `src/styles/${id}-bootstrap.scss`))
    .filter((f) => !existsSync(f));

if (missing.length) {
    console.error('\n❌ Missing SCSS file(s):\n');
    for (const f of missing) console.error('   ' + f);
    console.error('\nCreate these files, or remove the ids from THEMES, then retry.\n');
    process.exit(1);
}

// ───────────────────────────────────────────────────────────
// 3. Resolve the local sass binary — do NOT rely on npx
// ───────────────────────────────────────────────────────────
const isWin = process.platform === 'win32';
const localSass = resolve(
    ROOT,
    'node_modules/.bin',
    isWin ? 'sass.cmd' : 'sass',
);

if (!existsSync(localSass)) {
    console.error('\n❌ sass is not installed in this project.\n');
    console.error('   Fix it with:\n');
    console.error('       npm install --save-dev sass\n');
    process.exit(1);
}

// ───────────────────────────────────────────────────────────
// 4. Build
// ───────────────────────────────────────────────────────────
const args = [
    '--load-path=node_modules',
    '--no-source-map',
    '--style=compressed',
];
for (const id of THEMES) {
    args.push(`src/styles/${id}-bootstrap.scss:public/themes/${id}.css`);
}

try {
    execFileSync(localSass, args, {
        cwd: ROOT,
        stdio: 'inherit',
        // .cmd shims on Windows need a shell; on Unix this is a no-op
        shell: isWin,
    });
} catch (err) {
    console.error('\n❌ Theme build failed.\n');
    console.error('   Message:', err.message);
    if (typeof err.status === 'number') console.error('   Exit code:', err.status);
    if (err.signal) console.error('   Signal:', err.signal);
    if (err.stderr) console.error('   stderr:', err.stderr.toString());
    console.error(
        '\n   Tip: run a single theme manually to see full sass output:\n' +
        `       npx sass --load-path=node_modules --no-source-map --style=expanded src/styles/${THEMES[0]}-bootstrap.scss:public/themes/${THEMES[0]}.css\n`,
    );
    process.exit(1);
}

console.log(`\n✓ Compiled ${THEMES.length} themes → public/themes/`);