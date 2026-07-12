# Solvely Comments Animation and Placement

## Goal

Make the Comments collage reveal from the visual center toward the perimeter while each card enters from its nearest outer edge, and move the complete Comments section to the bottom of the Solvely page.

## Motion

- Measure each card center relative to the collage center after layout.
- Sort cards by radial distance so central cards reveal first and outer cards reveal last.
- Use the dominant axis to choose entry direction: left cards enter from the left, right cards from the right, top cards from above, and bottom cards from below.
- Preserve opacity fading and use restrained staggered timing.
- Disable the custom animation when reduced motion is requested.

## Placement

- Move the full Comments section after the Quiz section.
- Preserve its content and visual styling.

## Verification

- Confirm Comments is the last direct section in the page.
- Confirm every comment cell receives one direction and a center-out delay.
- Confirm production build succeeds.
