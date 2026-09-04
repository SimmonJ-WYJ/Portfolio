# Study Plugin Hero and Portfolio Entry

## Scope

Add a new Study Plugin case-study entry without changing or replacing the existing Solvely project. This pass implements only the homepage entry and the first-screen hero of the new detail page.

## Chosen approach

Create an independent `/study-plugin` route and page component. Reuse the portfolio's existing lightweight client routing and cover-image discovery instead of folding the work into `/solvely` or aliasing both URLs to one component. This keeps the original Solvely case study intact and gives the new interaction-design story room to grow as more Figma sections are supplied.

## Homepage entry

- Add a `Study Plugin` project card at the beginning of the homepage work collection.
- Keep every existing project entry and its route unchanged.
- Use the supplied wide screenshot (`codex-clipboard-9c61ed4f-1088-495a-be7a-3d17083c3512.png`) as the 16:9 cover image.
- Link the card to `/study-plugin`.
- Preserve the existing card interaction and visual treatment.

## Detail route and hero

- Add a lazy-loaded Study Plugin page at `/study-plugin`.
- Include the same fixed Back control pattern used by existing case-study pages.
- Reproduce Figma node `262:12636` for the first screen only.
- The hero uses the Figma background color `#eef1f5` and a responsive version of the 1440 by 739 composition.
- Use the supplied complete screenshot (`codex-clipboard-3c8025d5-795f-4194-8568-6146a34f3a1c.png`) as the hero visual.
- At the 1440px reference width, render the visual at 988 by 659, positioned 226px from the left and 160px from the top. The hero clips the lower part of the image at its 739px boundary, matching Figma.
- Scale the composition proportionally on smaller screens. Keep the product visual legible, avoid horizontal overflow, and maintain the cool-gray background.
- Do not implement content below the hero in this pass.

## Assets

Copy both user-provided PNG files into the repository under a dedicated `src/assets/study-plugin/` directory. The source files remain unchanged; sizing and cropping are handled in CSS.

## Accessibility and behavior

- Provide descriptive alternative text for both cover and hero imagery.
- The project card remains keyboard-accessible through its existing link behavior.
- The Back control returns to the homepage through the current client router.
- Disable non-essential entrance motion for users who prefer reduced motion.

## Verification

- Run the production build.
- Verify `/`, `/study-plugin`, and `/solvely` render without console or routing errors.
- Confirm Study Plugin is the first work entry and Solvely still links to `/solvely`.
- Compare the desktop hero against the Figma reference at 1440px.
- Check a narrow mobile viewport for clipping, overflow, and readable image framing.

## Out of scope

- Remaining Study Plugin case-study sections.
- Copy or content changes to the existing Solvely page.
- Deployment or publishing unless requested separately.
