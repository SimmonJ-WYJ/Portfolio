# Solvely Section Order Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorder four existing Solvely case-study sections without changing their internal presentation or behavior.

**Architecture:** Move complete JSX section blocks inside `SolvelyPage.jsx`. No component extraction, CSS change, asset change, or data-flow change is required.

**Tech Stack:** React 18, JSX, Vite 5.

## Global Constraints

- Final order: Logic Flow Design, Font Specification, Colors Specification, Onboarding Iteration Design.
- Keep all section markup, classes, copy, media, animation selectors, and styles unchanged.
- Each section must occur exactly once.
- Keep every other section in its current relative order.

---

### Task 1: Reorder The Solvely Sections

**Files:**
- Modify: `src/components/SolvelyPage.jsx`

**Interfaces:**
- Consumes: existing `.sv-logic`, `.sv-font`, `.sv-colors`, and `.sv-onb` JSX blocks.
- Produces: the approved source and rendered order immediately after `.sv-comments`.

- [ ] **Step 1: Record the current source order**

Run:

```bash
rg -n '<section className="sv-(logic|font|colors|onb)' src/components/SolvelyPage.jsx
```

Expected: Onboarding and font/colors appear before Logic Flow.

- [ ] **Step 2: Move complete section blocks**

Move the existing blocks without modifying their contents so the JSX after `.sv-comments` is:

```jsx
<section className="sv-logic">...</section>
<section className="sv-font container">...</section>
<section className="sv-colors container">...</section>
<section className="sv-onb">...</section>
```

- [ ] **Step 3: Verify source order and uniqueness**

Run:

```bash
rg -n '<section className="sv-(logic|font|colors|onb)' src/components/SolvelyPage.jsx
for section in logic font colors onb; do
  test "$(rg -c "<section className=\"sv-$section" src/components/SolvelyPage.jsx)" -eq 1
done
```

Expected: Logic, font, colors, onboarding in ascending line order; each count equals one.

- [ ] **Step 4: Build and verify the route**

Run:

```bash
npm run build
curl -fsS -o /dev/null http://127.0.0.1:5174/solvely
```

Expected: build and HTTP request both exit successfully.

- [ ] **Step 5: Browser regression check**

Open `/solvely` and confirm the four visible headings occur in the approved order, the Onboarding videos remain present, and the console has no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/SolvelyPage.jsx
git commit -m "Reorder Solvely design sections"
```
