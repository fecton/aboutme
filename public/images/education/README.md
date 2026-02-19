# University Logos

Place WebP logo files here for the Education section.

## Expected filenames

| Filename | Used for |
|----------|----------|
| khai.webp | Kharkiv Aviation Institute |
| epam.webp | EPAM University |

## Fetching official logos

Run `node tools/fetch-official-logos.mjs` to download and adapt the EPAM logo from Wikimedia Commons. KhAI has no Wikimedia source; add manually if needed.

## Adding new logos manually

1. Place PNG source in `images-before-optimization/education/`
2. Copy `tools/png_to_webp.py` into that folder and run it
3. Move the generated WebP to `public/images/education/`
4. Add the filename to the corresponding entry in `src/data/education.ts`
