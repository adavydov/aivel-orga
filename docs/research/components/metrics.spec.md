# Metrics specification

## Overview

- Target: `src/components/MetricsSection.tsx`
- Interaction: static

## Structure

- indexed section
- top three universal metrics
- segment-specific metric rows
- accounting-outsourcing multiplier callout

## Universal metrics

1. `Размер целевой базы`
2. `Целевые обращения`
3. `Проведённые встречи`

## Segment metrics

### SMB

- number of target entrepreneur contacts in the owned base
- target inquiries for AI CFO
- held demos / meetings
- ability to price above market through brand strength

### Enterprise

- target-account and decision-maker base
- target inquiries
- held meetings with target roles
- target pipeline volume and enterprise-account revenue

### Accounting outsourcing

- warm owner / target-company base
- aggregate revenue of companies entering warm
- held owner meetings
- acquisition multiple on closed deals sourced from the marketing contour

## Multiplier explanation

`Маркетинг снижает цену входа не торгом, а ценностью присоединения. При сопоставимом качестве компании более низкий фактический мультипликатор означает, что Aivel был продан собственнику как более ценный следующий шаг.`

## Ownership note

SMB price premium and enterprise revenue are shared outcome metrics with Product and Commerce. Revenue and acquisition multiple for accounting outsourcing are shared with M&A; marketing does not own valuation or closing.

## Exact styles

- top metrics use the reference metric grid
- summary labels use a smaller responsive scale so long Russian words do not collide
- segment rows use a compact data table
- multiplier callout uses accent top/bottom rules and accent-dark text
- mobile stacks metrics and allows the table to become labeled blocks
