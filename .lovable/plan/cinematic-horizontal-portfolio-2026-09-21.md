# Cinematic horizontal portfolio

## What will change

- Replace the static portfolio grid with one continuous horizontal showcase on both the home and portfolio pages.
- Display every project as a large, image-led slide with its name, sector, sequence number, and direct project link.
- Add smooth automatic movement that pauses when a visitor hovers, focuses, or interacts with the showcase.
- Keep touch swiping and trackpad/mouse-wheel horizontal browsing available, with snap points for easy control.
- Preserve the existing noir/crimson editorial branding, project images, wording, and page structure.

## Experience and accessibility

- Make the strip loop seamlessly without visible jumps.
- Use restrained image zoom and overlay transitions for a cinematic feel.
- Stop automatic movement for visitors who prefer reduced motion.
- Keep project links keyboard-accessible and ensure text remains readable on every image.
- Adapt card width and motion speed for mobile and desktop screens.

## Technical details

- Build a focused reusable React showcase using the existing seven project records.
- Use browser animation frames for fluid movement, with cleanup and interaction pause handling.
- Add semantic CSS utilities for hidden scrollbars, snap behavior, and motion-safe effects.
- Verify the homepage and portfolio page at desktop and mobile widths.
