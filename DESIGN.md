# DESIGN.md - ArchiveVerse

## Brand & Visual Direction
- Dark luxury aesthetic: black void with gold constellation accents
- Cinematic gravitas, international appeal, tech-forward elegance
- Glassmorphism as primary card treatment throughout

## Design Tokens

### Color
- Background Primary: #000000 (pure black void)
- Background Secondary: #0a0a0f (near-black with blue undertone)
- Gold Primary: #D4AF37 (luxury accent)
- Gold Light: #F4E29A (highlights, hover states)
- Gold Dark: #A08520 (subtle accents)
- Silver: #C0C0C0 (secondary accent)
- Text Primary: #FFFFFF
- Text Secondary: rgba(255,255,255,0.7)
- Text Muted: rgba(255,255,255,0.4)
- Glass Background: rgba(255,255,255,0.03-0.06)
- Glass Border: rgba(255,255,255,0.08)
- Gold Border: rgba(212,175,55,0.3)

### Typography
- Display: Playfair Display (serif) - headings, brand
- Body: Inter (sans-serif) - body text, UI elements
- Scale: 4rem hero > 2.5rem section > 1.5rem card > 1rem body > 0.875rem caption

### Spacing
- Section padding: 120px vertical
- Card padding: 32px
- Grid gap: 24px

### Effects
- Glassmorphism: backdrop-filter blur(20px) + rgba bg
- Gold glow: box-shadow 0 0 30px rgba(212,175,55,0.15)
- Card hover: translateY(-8px) + glow increase
- Border radius: 16px cards, 24px large sections, 8px small elements

## Interaction
- Smooth scroll with CSS scroll-behavior: smooth
- Intersection Observer for fade-in-up reveal animations
- Touch-friendly carousel with momentum and snap points
- Hover states with gold accent glow and subtle lift
- Modal transitions with scale + fade

## Design Prohibitions
- No bright/saturated colors except gold accents
- No rounded corners > 32px
- No drop shadows using black (use gold-tinted shadows)
- No heavy borders (use subtle glass borders)
- No flat/matte card backgrounds (always glass or gradient)
