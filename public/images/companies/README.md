# Company and Client Logos

Place WebP logo files here for the Experience section.

## Expected filenames

| Filename | Used for |
|----------|----------|
| geniusee.webp | Geniusee Inc. |
| luxoft.webp | Luxoft Poland |
| mercedes.webp | Mercedes-Benz (client) |
| chase.webp | JP Morgan Chase (client) |

## Fetching official logos

Run `node tools/fetch-official-logos.mjs` to download and adapt official logos from Wikimedia Commons (Chase, Luxoft, Mercedes, EPAM). Geniusee has no Wikimedia source; add manually if needed.

## Adding new logos manually

1. Place PNG source in `images-before-optimization/companies/`
2. Copy `tools/png_to_webp.py` into that folder and run it
3. Move the generated WebP to `public/images/companies/`
4. Add the filename to the corresponding entry in `src/data/experiences.ts`
