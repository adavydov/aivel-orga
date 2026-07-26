# Context and focus specification

## Overview

- Target: `src/components/ContextFocusSection.tsx`
- Interaction: static

## Structure

- indexed story section `Контекст`
- three-column context panel
- indexed story section `Фокус`
- ordered three-step priority conveyor

## Exact styles

- story section: `22% 78%` grid, `58px 0`
- section index: uppercase 11px Arial, accent
- section body: 1px accent left rule, 42px padding
- lead: muted Georgia, `clamp(21px,2.3vw,30px)`
- panels: top/bottom accent rules; vertical faint separators
- mobile: single column, index becomes top rule label, panels stack

## Content

### Context

- `Aivel одновременно запускает новый продукт, продаёт корпоративный ИИ-софт и консолидирует бухгалтерский аутсорсинг. Это не одна воронка и не один покупатель.`
- Three motions:
  - `Новый продукт` — ИИ-финдир для собственника СМБ
  - `Enterprise Software` — ИИ-агенты для финансовых процессов
  - `Roll-up` — партнёрство и сделки с бухгалтерскими компаниями

### Focus

1. `СМБ` — собственная база предпринимателей и спрос на ИИ-финдира
2. `Enterprise` — отношения и встречи с целевыми ЛПР
3. `Бух-аутсорс` — тёплый поток владельцев и компаний для партнёрства и M&A

## Responsive

- 1440: indexed rail + three horizontal steps
- 768: narrower rail; steps remain horizontal if readable
- 390: all content stacks; sequence stays explicit through numbers

