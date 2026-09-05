# Solvely Hero Laptop Scale Design

## Goal

Increase the desktop visual scale of the Solvely Plugins hero laptop without cropping any part of its exported image.

## Approved Design

- Increase `.sp-hero-content` desktop `max-width` from `1440px` to `1640px`.
- Keep `margin: 0 auto`, so the laptop remains horizontally centred.
- Keep `.sp-hero-img { width: 100%; height: auto; }`, preserving the original aspect ratio and every image edge.
- Keep all existing responsive overrides unchanged; widths below 1440px continue to use their current 60px, 40px, and 20px side padding.

## Validation

- The static page check requires the 1640px desktop maximum width and the uncropped intrinsic image rules.
- `npm run build` must succeed.
- The deployed page must expose the hero image at `/solvely-plugins`.
