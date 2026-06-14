# UI_UX_GUIDELINES.md — UI/UX Design System
> ⚠️ AI GENERATED FILE — Customize colors and styles to match your brand.
> Generated from: `@main.md`
> Last Updated: `[AI fills date]`
> Updated By: `[AI fills model name]`
> Connected Files: `ARCHITECTURE.md` `TECH_STACK.md`

---
> 📌 **RULE FOR AI**
> Every UI component you create MUST follow this file.
> Never invent new colors, fonts, or spacing values.
> If this file doesn't cover a UI pattern → ask user → update this file → then build.
> Consistency > Creativity. Always match existing patterns.
---

## 🎨 COLOR PALETTE

> [AI fills based on design preferences in @main.md]

### Primary Colors
```
Primary:      [hex] — Main brand color, CTAs, links
Secondary:    [hex] — Supporting actions, accents
```

### Semantic Colors
```
Success:      [hex] — Confirmations, completed states
Warning:      [hex] — Caution states, pending actions
Error:        [hex] — Errors, destructive actions
Info:         [hex] — Information, neutral highlights
```

### Neutral Colors
```
Background:   [hex] — Page background
Surface:      [hex] — Card/panel background
Border:       [hex] — Dividers, input borders
Text Primary: [hex] — Main body text
Text Muted:   [hex] — Subtle text, placeholders
```

### Dark Mode Equivalents
> [AI fills if dark mode is required]
```
Background:   [hex]
Surface:      [hex]
Text Primary: [hex]
[etc.]
```

### Tailwind Class Mapping
> [AI fills if using Tailwind CSS]
```
Primary:    bg-[color]-600 / text-[color]-600
Secondary:  bg-[color]-500 / text-[color]-500
[etc.]
```

---

## 🔤 TYPOGRAPHY

### Font Family
```
Primary Font:   [e.g. Inter — headings and body]
Mono Font:      [e.g. JetBrains Mono — code blocks]
Import:         [Google Fonts URL or local font path]
```

### Font Scale
```
xs:   12px / 0.75rem  — Captions, labels
sm:   14px / 0.875rem — Secondary text, metadata
base: 16px / 1rem     — Body text (default)
lg:   18px / 1.125rem — Lead text
xl:   20px / 1.25rem  — Small headings
2xl:  24px / 1.5rem   — Section headings
3xl:  30px / 1.875rem — Page headings
4xl:  36px / 2.25rem  — Hero headings
```

### Font Weight
```
Regular:    400 — Body text
Medium:     500 — Emphasized body text
Semibold:   600 — Subheadings, labels
Bold:       700 — Headings, CTAs
```

### Line Height
```
Tight:    1.25 — Headings
Normal:   1.5  — Body text
Relaxed:  1.75 — Long-form content
```

---

## 📐 SPACING SYSTEM

> All spacing based on 4px grid

```
1:  4px   — Micro spacing (icon padding)
2:  8px   — Tight spacing (inline elements)
3:  12px  — Compact spacing
4:  16px  — Default spacing (base unit)
5:  20px  — Comfortable spacing
6:  24px  — Section padding (mobile)
8:  32px  — Section padding (desktop)
10: 40px  — Large section gaps
12: 48px  — Hero sections
16: 64px  — Full page sections
```

---

## 🔲 BORDER RADIUS

```
sm:   4px  — Inputs, tags
md:   8px  — Cards, dropdowns
lg:   12px — Modals, large cards
xl:   16px — Hero cards, featured
full: 9999px — Pills, avatars, badges
```

---

## 🌑 SHADOWS

```
sm:   Small shadow — Inputs on focus
md:   Medium shadow — Cards, dropdowns
lg:   Large shadow — Modals, popovers
xl:   Heavy shadow — Floating elements
```

---

## 🧩 COMPONENT PATTERNS

### Buttons

```
Primary Button:
  Background: [primary color]
  Text: white
  Padding: 12px 24px
  Border Radius: [md]
  Font Weight: semibold
  Hover: slightly darker primary

Secondary Button:
  Background: transparent
  Border: 1px solid [border color]
  Text: [text primary]
  Same padding and radius as primary

Destructive Button:
  Background: [error color]
  Text: white
  Same padding and radius

Disabled State:
  Opacity: 50%
  Cursor: not-allowed

Loading State:
  Show spinner, disable clicks, keep same size
```

### Input Fields

```
Default:
  Border: 1px solid [border color]
  Border Radius: [sm]
  Padding: 10px 14px
  Font Size: base (16px)
  Background: [surface color]

Focus:
  Border: 2px solid [primary color]
  Outline: none

Error:
  Border: 2px solid [error color]
  Show error message below in [error color]

Disabled:
  Background: [muted background]
  Cursor: not-allowed
```

### Cards

```
Background: [surface color]
Border: 1px solid [border color]
Border Radius: [md or lg]
Padding: 24px
Shadow: [md]

Interactive Card:
  Hover: slight shadow increase
  Cursor: pointer
```

### Form Layout

```
Label:
  Font Size: sm
  Font Weight: medium
  Color: [text primary]
  Margin Bottom: 6px

Helper Text:
  Font Size: sm
  Color: [text muted]
  Margin Top: 4px

Error Message:
  Font Size: sm
  Color: [error color]
  Margin Top: 4px
  Show icon before text

Form Groups:
  Spacing between fields: 20px
  Section spacing: 32px
```

### Navigation

```
[AI fills based on project type: sidebar / topbar / both]

Active Item:
  Background: [primary color with low opacity]
  Text: [primary color]
  Font Weight: semibold

Hover Item:
  Background: [subtle hover color]

Mobile Navigation:
  Bottom tab bar (mobile apps)
  Hamburger menu (web)
```

### Modals / Dialogs

```
Overlay: rgba(0,0,0,0.5) backdrop
Modal:
  Background: [surface color]
  Border Radius: [lg]
  Padding: 24px
  Max Width: 480px (small) / 640px (medium) / 800px (large)
  Shadow: [xl]

Header: Title (text-xl, bold) + Close button (X)
Body: Content area
Footer: Action buttons (right-aligned)

Mobile: Full screen on small viewports
```

### Loading States

```
Skeleton Loading:
  Use instead of spinners for content
  Animated pulse effect
  Match shape/size of real content

Button Loading:
  Show spinner inside button
  Disable button
  Keep original button size

Page Loading:
  Full screen overlay with centered logo/spinner
  Only for initial page load
```

### Empty States

```
Always show for empty lists/tables:
  Icon (relevant to content)
  Title: "No [items] yet"
  Description: "Start by creating your first [item]"
  CTA Button (if user can create)
```

### Toast / Notifications

```
Position: Top-right (desktop) / Top-center (mobile)
Duration: 4 seconds (success) / 6 seconds (error)
Types:
  Success: [success color] + check icon
  Error: [error color] + X icon
  Warning: [warning color] + warning icon
  Info: [info color] + info icon
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile:  < 640px   — Single column, full width
Tablet:  640-1024px — 2 columns where needed
Desktop: > 1024px  — Full layout
Wide:    > 1280px  — Max content width applied
```

### Max Content Width
```
Content areas: max-w-7xl (1280px) centered
Text content: max-w-2xl (672px) centered
```

---

## ♿ ACCESSIBILITY RULES

> These are non-negotiable for every component:

- [ ] All images have `alt` text
- [ ] All form inputs have `<label>` tags
- [ ] Color contrast ratio: minimum **4.5:1** for body text
- [ ] Color contrast ratio: minimum **3:1** for large text
- [ ] Interactive elements are keyboard navigable
- [ ] Focus states are clearly visible
- [ ] Error messages are not just color-based (add icon/text)
- [ ] `aria-label` on icon-only buttons
- [ ] `role` attributes where semantic HTML isn't enough

---

## ⚡ PERFORMANCE RULES

- [ ] Images: Use WebP format, lazy loading
- [ ] Fonts: Subset fonts, use `font-display: swap`
- [ ] Icons: Use SVG sprite or icon component library
- [ ] Animations: Use CSS transitions (not JS animations)
- [ ] Motion: Respect `prefers-reduced-motion`

---

## 🎭 ANIMATION GUIDELINES

```
Duration:
  Fast: 100-150ms — Hover states, color changes
  Normal: 200-300ms — Expanding, collapsing
  Slow: 400-500ms — Page transitions, modals

Easing:
  ease-out — Elements entering
  ease-in — Elements leaving
  ease-in-out — Moving elements
```

---

## 🔗 RELATED FILES

- Component implementation → `ARCHITECTURE.md` (frontend section)
- Why design decisions → `DECISIONS.md`
