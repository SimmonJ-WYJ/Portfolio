# Browser Favicon Design

## Goal

Use the uploaded SimmonJ symbol as the browser tab icon without changing any in-page logo or visual element.

## Source

- Source image: `/var/folders/xp/xvrvsq9x4mdfcs5bqppnhjb40000gn/T/codex-clipboard-7db89c87-1656-4578-b5c9-ffac63ae0be7.png`
- Source dimensions: 154 x 146 pixels with transparency.

## Treatment

- Crop a centered square around the white `S` symbol and dotted dark background.
- Exclude the clipped white circle at the source image's right edge.
- Preserve the artwork, colors, transparency, and dotted background without redrawing or stylistic changes.
- Produce `public/favicon.png` for modern browsers.
- Produce `public/favicon.ico` for compatibility.
- Add explicit favicon declarations to `index.html`.

## Scope

- Do not modify `public/logo.png`.
- Do not change navigation, page content, layout, colors, or other assets.
- Do not generate a new logo or replace the uploaded symbol.

## Verification

- Run `npm run build` successfully.
- Confirm both favicon files are present in the production output.
- Confirm the browser requests the new favicon without an HTTP error.
- Confirm the browser tab displays the cropped `S` symbol without the clipped right-edge circle.
