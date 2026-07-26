# Design tokens

Source: `https://resheno-investor-story.asretasretovich.chatgpt.site/`

## Palette

- paper: `#fbfaf7`
- ink: `#272725`
- muted: `#66625c`
- accent: `#d84027`
- accent dark: `#9d2c1c`
- line: `rgba(216, 64, 39, 0.50)`
- faint: `rgba(39, 39, 37, 0.13)`
- soft: `rgba(216, 64, 39, 0.055)`

## Typography

- sans: `Arial, Helvetica, "Segoe UI", sans-serif`
- serif: `Georgia, "Times New Roman", serif`
- body: `17px / 1.58`, serif
- hero H1: `clamp(52px, 7vw, 82px) / .98`, sans, weight `500`, tracking `-.055em`
- section H2/H3: `clamp(28px, 3.4vw, 44px) / 1.08`, sans, weight `500`
- lead: `clamp(21px, 2.3vw, 30px) / 1.42`, serif
- label: `11px / 1.4`, sans, weight `700`, uppercase, tracking `.07em`

## Layout

- shell: `min(1180px, 100%)`, `32px` horizontal padding
- sticky header: `64px`
- hero: `116px 0 82px`
- story section: `22% / 78%` grid, `58px 0`
- section body: `1px` accent-left rule, `42px` left padding
- mobile breakpoint: `760px`
- mobile shell padding: `20px`

## Interaction

- native smooth scrolling
- sticky translucent header with `12px` backdrop blur
- underline-free navigation, accent hover
- outline buttons become solid accent on hover
- no decorative imagery; hierarchy comes from type, rules, whitespace, and numeric panels
- `prefers-reduced-motion` disables transitions and smooth scrolling

