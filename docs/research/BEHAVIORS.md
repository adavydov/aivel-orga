# Behaviors

## Interaction model

The reference is a long, anchor-driven editorial page. The primary interaction is scrolling.

## Header

- Sticky at the top.
- Height: `64px` desktop, `56px` mobile.
- Background remains paper-colored with slight transparency and blur.
- Desktop navigation is inline.
- Mobile navigation collapses into a native `<details>` menu.

## Scroll

- `html { scroll-behavior: smooth; }`
- Sections use scroll margins so headings clear the sticky header.
- No scroll snap or parallax.
- The page remains legible with JavaScript disabled.

## Buttons and links

- Outlined accent buttons.
- Primary button is accent-filled.
- Hover swaps outline/fill.
- Focus-visible uses a `2px` accent outline with `4px` offset.

## Responsive behavior

### Desktop — 1440px

- 1180px content shell.
- Two-column indexed story sections.
- Metric and function panels use 2–4 columns.

### Tablet — 768px

- Indexed story sections narrow the left rail.
- Dense panels wrap to fewer columns.
- Navigation remains desktop until `760px`.

### Mobile — 390px

- Single-column page.
- Left rail becomes an uppercase section header above content.
- Metrics stack vertically with horizontal separators.
- Buttons become full width.
- All functional detail remains visible; nothing depends on hover.

## Page-specific additions

- The final alignment button copies the current URL when clipboard access exists; otherwise it is a normal anchor.
- No forms, authentication, tracking scripts, or external data submission.

