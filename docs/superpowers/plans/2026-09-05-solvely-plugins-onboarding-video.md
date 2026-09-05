# Solvely Plugins onboarding video implementation plan

> **For the implementation:** execute on the user-authorized `main` checkout so the verified commit can trigger the existing Vercel production deployment.

**Goal:** Replace the existing Figma onboarding visual placeholder with the supplied first-use MP4, which autoplays only while users scroll through the “核心功能引导” module.

**Architecture:** Reuse the existing `useMediaVisibility` hook rather than creating a second observer. Keep the module self-contained in `SolvelyPluginsPage` and use CSS only for the Figma stage and responsive sizing.

## Steps

1. Add a static regression check for the exact copy, video attributes, visibility hook, and Figma stage tokens; run it and confirm it fails before implementation.
2. Add the onboarding section after “我们的解决方案”, bind a ref to the imported first-use MP4, and enable visibility-aware autoplay.
3. Add desktop and responsive CSS that preserves the 1220 × 574 stage relationship, centered uncropped video, and caption spacing.
4. Run the regression check and production build; inspect the local page and its scrolling video behavior; then commit, push to `main`, and verify the live deployment.
