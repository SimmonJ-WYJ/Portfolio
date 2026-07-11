# Solvely Section Order Design

## Goal

Move the existing Logic Flow, Font Specification, and Colors Specification sections before the Onboarding section on the Solvely case-study page.

## Approved Order

1. Real Comments
2. Logic Flow Design
3. Font Specification
4. Colors Specification
5. Onboarding Iteration Design
6. Remaining existing sections

## Constraints

- Move each complete `<section>` exactly once.
- Do not duplicate any section.
- Do not change section markup, CSS classes, copy, images, videos, animations, or spacing rules.
- Keep all other sections in their existing relative order.
- Preserve the current Onboarding video behavior and scroll-reveal behavior.

## Verification

- Run `npm run build` successfully.
- Confirm each moved section title occurs exactly once in `SolvelyPage.jsx`.
- Confirm the source order is Logic Flow, Font Specification, Colors Specification, then Onboarding.
- Open `/solvely` and verify the four sections render in the approved order without console errors.
