# 🎨 Style Guide - Polines Website Redesign

## Visual Identity

### Brand Colors (Palet Warna)

| Warna | HEX | HSL | Penggunaan |
|-------|-----|-----|------------|
| **Primary Blue** | `#0D4C8B` | `210 82% 30%` | Header, tombol utama, elemen branding |
| **Polines Blue Dark** | `#082D53` | `210 82% 18%` | Hover state, footer |
| **Secondary Gold** | `#E5A800` | `43 100% 45%` | Aksen, badge unggulan, CTA |
| **Gold Light** | `#F5C842` | `43 90% 61%` | Highlight, hover gold |
| **Success** | `#16A34A` | `142 76% 36%` | Status sukses, akreditasi A |
| **Warning** | `#EAB308` | `45 93% 47%` | Peringatan |
| **Info** | `#0EA5E9` | `199 89% 48%` | Informasi |
| **Error** | `#DC2626` | `0 72% 51%` | Error state |

### ❌ Warna yang Dihilangkan
- ~~Purple/Ungu terang~~
- ~~Green terang (hijau cerah)~~
- Fokus hanya pada biru dan kuning emas

---

## Typography

### Font Family
- **Heading**: Plus Jakarta Sans (700, 800)
- **Body**: Inter (400, 500, 600)
- **Monospace**: JetBrains Mono

### Skala Ukuran Font

| Level | Ukuran | Line Height | Penggunaan |
|-------|--------|-------------|------------|
| **Display** | 48-64px | 1.1 | Hero title |
| **H1** | 36-40px | 1.2 | Page title |
| **H2** | 28-32px | 1.3 | Section title |
| **H3** | 22-24px | 1.4 | Subsection |
| **H4** | 18-20px | 1.4 | Card title |
| **Body Large** | 18px | 1.6 | Intro text |
| **Body** | 16px | 1.6 | Default paragraph |
| **Body Small** | 14px | 1.5 | Caption, meta |
| **Label** | 12px | 1.4 | Badge, tag |

### CSS Classes
```css
.text-display { font-size: clamp(2.5rem, 5vw, 4rem); }
.text-h1 { font-size: clamp(2rem, 4vw, 2.5rem); }
.text-h2 { font-size: clamp(1.5rem, 3vw, 2rem); }
.text-h3 { font-size: clamp(1.25rem, 2.5vw, 1.5rem); }
.text-body-lg { font-size: 1.125rem; }
.text-body { font-size: 1rem; }
.text-small { font-size: 0.875rem; }
.text-label { font-size: 0.75rem; }
```

---

## Spacing System

| Token | Value | Penggunaan |
|-------|-------|------------|
| `xs` | 4px (0.25rem) | Minimal gap |
| `sm` | 8px (0.5rem) | Icon gap |
| `md` | 16px (1rem) | Component padding |
| `lg` | 24px (1.5rem) | Card padding |
| `xl` | 32px (2rem) | Section margin |
| `2xl` | 48px (3rem) | Large section |
| `3xl` | 64px (4rem) | Page section |

---

## Border Radius

| Token | Value | Penggunaan |
|-------|-------|------------|
| `sm` | 0.375rem | Small buttons, tags |
| `md` | 0.625rem | Default buttons, inputs |
| `lg` | 0.875rem | Cards |
| `xl` | 1rem | Large cards |
| `2xl` | 1.5rem | Feature cards |
| `full` | 9999px | Pills, avatars |

---

## Shadow System

```css
--shadow-xs: 0 1px 2px hsla(210, 82%, 30%, 0.05);
--shadow-sm: 0 1px 3px hsla(210, 82%, 30%, 0.08), 0 1px 2px hsla(210, 82%, 30%, 0.06);
--shadow-md: 0 4px 6px hsla(210, 82%, 30%, 0.07), 0 2px 4px hsla(210, 82%, 30%, 0.06);
--shadow-lg: 0 10px 15px hsla(210, 82%, 30%, 0.08), 0 4px 6px hsla(210, 82%, 30%, 0.05);
--shadow-xl: 0 20px 25px hsla(210, 82%, 30%, 0.10), 0 10px 10px hsla(210, 82%, 30%, 0.04);
--shadow-gold: 0 4px 14px hsla(43, 100%, 45%, 0.25);
--shadow-blue: 0 4px 14px hsla(210, 82%, 30%, 0.25);
```

---

## Component Patterns

### Button Variants

| Variant | Penggunaan |
|---------|------------|
| `default` | Primary action |
| `secondary` | Secondary action |
| `outline` | Tertiary action |
| `ghost` | Subtle action |
| `gold` | Premium/Highlight CTA |
| `success` | Positive action |

### Card Types
- **Card Elevated**: Shadow + hover effect
- **Glass Card**: Glassmorphism dengan backdrop blur
- **Gradient Card**: Background gradient untuk feature

### Badge Colors
- `bg-secondary` - Unggul/Premium
- `bg-green-600` - Akreditasi A
- `bg-blue-500` - Baik Sekali
- `bg-gray-500` - Default

---

## Icon Guidelines

### Library: Lucide React
- Stroke width: 2px (default)
- Ukuran standar: 16px, 20px, 24px
- Warna mengikuti text color atau primary

### Icon Sizes
| Size | Dimension | Penggunaan |
|------|-----------|------------|
| `sm` | 16px | Inline text |
| `md` | 20px | Buttons |
| `lg` | 24px | Headers |
| `xl` | 32px | Features |
| `2xl` | 48px | Hero icons |

---

## Breakpoints

| Name | Min Width | Penggunaan |
|------|-----------|------------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1600px | Ultra wide (max-width container) |

---

## Animation Guidelines

### Timing
- **Fast**: 150ms (hover, micro-interactions)
- **Normal**: 300ms (transitions, fades)
- **Slow**: 500ms (page transitions)

### Easing
- `ease-out`: Entering elements
- `ease-in`: Exiting elements  
- `ease-in-out`: State changes

### Framer Motion Defaults
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}
```

---

## Accessibility (WCAG 2.1)

### Kontras Minimum
- **Normal text**: 4.5:1
- **Large text**: 3:1
- **UI components**: 3:1

### Focus States
- Semua interactive element harus memiliki visible focus ring
- Default: `ring-2 ring-primary ring-offset-2`

### Keyboard Navigation
- Semua fitur dapat diakses via keyboard
- Tab order logis dan predictable

---

## File Structure

```
src/
├── index.css          # Global styles, CSS variables
├── tailwind.config.ts # Tailwind configuration
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── layout/       # Navbar, Footer, Layout
│   ├── sections/     # Page sections
│   └── shared/       # Shared components
└── pages/            # Route pages
```

---

## Best Practices

1. **Konsistensi**: Gunakan design tokens, jangan hardcode values
2. **Responsif**: Mobile-first approach
3. **Accessible**: Semantic HTML, ARIA labels
4. **Performance**: Lazy load images, optimize bundles
5. **Typography**: Gunakan skala yang sudah ditentukan

---

*Style Guide v2.0 - Updated: Desember 2024*
