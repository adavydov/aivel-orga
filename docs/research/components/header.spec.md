# Header specification

## Overview

- Target: `src/components/SiteHeader.tsx`
- Screenshot: `docs/design-references/investor-story-desktop.png`
- Interaction: sticky + anchor navigation; native details menu on mobile

## Structure

- `header.site-header`
  - `div.shell.header-inner`
    - brand anchor
    - desktop nav
    - mobile details/nav

## Exact styles

- header: `height:64px`, `position:sticky`, `top:0`, `z-index:20`
- border bottom: `1px solid rgba(216,64,39,.5)`
- background: `rgba(251,250,247,.96)`
- backdrop filter: `blur(12px)`
- brand: Arial, `14px`, `700`, accent
- desktop links: Arial, `12px`, `700`, `24px` gap
- mobile breakpoint: `760px`; header `56px`; desktop nav hidden
- mobile menu: `220px`, paper background, accent border, absolute at right

## Content

- Brand: `Aivel / роль`
- Links: `Функции`, `Орга`, `Границы`

## States

- Link hover: ink → accent
- Focus: 2px accent outline
- Mobile `<details>` opens a vertical menu
