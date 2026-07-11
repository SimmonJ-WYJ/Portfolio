# Browser Favicon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the browser tab icon with the uploaded SimmonJ `S` artwork while excluding the clipped white circle at the source image's right edge.

**Architecture:** Create a centered 128 x 128 crop from the existing 154 x 146 PNG using macOS `sips`, then export PNG and ICO favicon files in `public`. Reference both files explicitly from `index.html`; no React or page-level assets change.

**Tech Stack:** Vite 5, HTML, PNG/ICO, macOS `sips`.

## Global Constraints

- Preserve the white `S`, dotted dark background, colors, and transparency.
- Exclude the clipped white circle at the source image's right edge.
- Do not modify `public/logo.png` or any visible page content.
- Do not redraw, regenerate, or stylistically alter the uploaded artwork.

---

### Task 1: Create And Register The Browser Favicon

**Files:**
- Source: `/var/folders/xp/xvrvsq9x4mdfcs5bqppnhjb40000gn/T/codex-clipboard-7db89c87-1656-4578-b5c9-ffac63ae0be7.png`
- Create: `public/favicon.png`
- Create: `public/favicon.ico`
- Modify: `index.html`

**Interfaces:**
- Consumes: the uploaded 154 x 146 PNG.
- Produces: `/favicon.png` and `/favicon.ico`, referenced by browser favicon link tags.

- [ ] **Step 1: Verify the favicon is currently absent**

Run:

```bash
test ! -e public/favicon.png
test ! -e public/favicon.ico
! rg -q 'rel="icon"' index.html
```

Expected: all commands exit successfully, proving the favicon has not already been installed.

- [ ] **Step 2: Crop the approved artwork to 128 x 128**

Run:

```bash
sips --cropToHeightWidth 128 128 --cropOffset 9 8 \
  /var/folders/xp/xvrvsq9x4mdfcs5bqppnhjb40000gn/T/codex-clipboard-7db89c87-1656-4578-b5c9-ffac63ae0be7.png \
  --out public/favicon.png
```

The crop spans source coordinates x=8..135 and y=9..136. It keeps the centered `S` and dotted field while excluding the right-edge white circle.

- [ ] **Step 3: Export the compatibility ICO file**

Run:

```bash
sips -s format ico public/favicon.png --out public/favicon.ico
```

Expected: `public/favicon.ico` is created from the approved crop.

- [ ] **Step 4: Register both favicon formats**

Add these lines after the viewport meta tag in `index.html`:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="alternate icon" href="/favicon.ico" />
```

- [ ] **Step 5: Verify asset dimensions and production output**

Run:

```bash
sips -g pixelWidth -g pixelHeight public/favicon.png
npm run build
test -f dist/favicon.png
test -f dist/favicon.ico
```

Expected: PNG dimensions are 128 x 128, the build exits successfully, and both files exist in `dist`.

- [ ] **Step 6: Verify in the local browser**

Reload `http://127.0.0.1:5174/`, confirm `/favicon.png` returns HTTP 200, and visually confirm the browser tab shows the cropped `S` without the right-edge white circle.

- [ ] **Step 7: Commit the implementation**

```bash
git add index.html public/favicon.png public/favicon.ico
git commit -m "Use SimmonJ mark as browser favicon"
```
