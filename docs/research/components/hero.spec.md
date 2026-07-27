# Hero specification

## Overview

- Target: `src/components/HeroSection.tsx`
- Screenshot: `docs/design-references/investor-story-desktop.png`
- Interaction: static

## Structure

- `section.hero`
  - shell
  - eyebrow
  - H1
  - context and focus copy
  - three-column segment grid

## Exact styles

- hero: `padding:116px 0 82px`, accent bottom border
- H1: Arial, accent, `clamp(52px,7vw,82px)`, weight 500, line-height .98, tracking -.055em, max-width 1000px
- lead: Georgia, muted, `clamp(21px,2.2vw,29px)`, line-height 1.4, max-width 900px
- segments: top/bottom accent rule, three equal columns, names in accent
- mobile: hero `72px 0 54px`; H1 minimum 52px; metrics stack

## Content

- Eyebrow: `КОНТРАКТ РОЛИ · CEO ↔ ДИРЕКТОР ПО МАРКЕТИНГУ`
- H1: `Построить три измеримые машины спроса`
- Lead: `Aivel одновременно развивает новый продукт для СМБ, продаёт Enterprise AI software и строит roll-up бухгалтерского аутсорсинга. Порядок фокуса: СМБ → Enterprise → бух-аутсорс.`
- Segments:
  - `СМБ` / `Органический рост и новый продукт`
  - `Enterprise` / `Enterprise AI software`
  - `Бух-аутсорс` / `Roll-up через партнёрства и M&A`
