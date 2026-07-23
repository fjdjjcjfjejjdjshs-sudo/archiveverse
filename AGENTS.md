# AGENTS.md - ArchiveVerse

## Project Overview
ArchiveVerse is a premium dark-themed single-page website for a global digital archive community. Built with pure HTML/CSS/JS (no framework dependencies).

## Tech Stack
- HTML5 (semantic)
- CSS3 (Custom Properties, Grid, Flexbox, Glassmorphism)
- Vanilla JavaScript (ES6+)
- Python http.server (dev server)

## Project Structure
```
.
├── index.html              # Main SPA with all sections
├── styles/
│   └── main.css            # Complete stylesheet
├── scripts/
│   ├── main.js             # Router, rendering, animations, interactions
│   ├── data-directory.js   # 9-Category directory data (91 subdirs, 970 items)
│   ├── data-boxoffice.js   # Box Office Top 100 (100 items)
│   ├── data-douban.js      # Douban Top 100 (100 items)
│   ├── data-oscar.js       # Oscar Best Picture (96 items)
│   ├── data-tvseries.js    # TV Series Collection (30 items)
│   └── data-anime.js       # Anime Must Watch (100 items)
├── .coze                   # Build/run configuration
├── DESIGN.md               # Design tokens and guidelines
└── AGENTS.md               # This file
```

## SPA Routing System
- Hash-based routing: `#boxoffice`, `#douban`, `#oscar`, `#tvseries`, `#anime`
- List pages: `#boxoffice/boxoffice-1`, `#douban/douban-1`, etc.
- Detail pages: same hash, renders detail view with poster, metadata, synopsis
- Total: 426 works across 5 collections

## 9-Category Directory System (3-Level)
- **Level 1**: 9 main categories (Movies, TV, Anime, Variety, Concerts, Music, Books, Docs, Games)
- **Level 2**: 91 subdirectories with item counts and total sizes
- **Level 3**: 970 terminal items (name + size + spec, NOT clickable)
- Routes: `#cat-movies` → `#cat-movies/0` (subgroup index)
- Data source: `scripts/data-directory.js` (parsed from Excel 9 sheets)
- `directoryRouteMap` in main.js maps route keys to data keys

## Key Features
- **Hero Section**: Canvas-based particle animation with gold constellation effect
- **Showcase Carousel**: Continuous horizontal auto-scroll with cinematic posters
- **SPA Routing**: Hash-based routing for 5 collections (426 total works) + 9-category directory
- **List Pages**: Grid layout with poster thumbnails, titles, years, and storage sizes
- **Detail Pages**: Full metadata view with poster, tags, file info, synopsis, and membership CTA
- **Category Grid**: 9 glassmorphism cards with hover effects
- **Directory Subgroup Cards**: Glassmorphism cards showing item count, total size, preview items
- **Directory Item List**: Numbered rows with name, spec, and gold size display
- **Membership Section**: Pricing card with benefits list
- **About Section**: Animated counters and community stats
- **Footer**: WhatsApp contact with 3-step interaction flow

## Development Commands
- Start dev server: `python -m http.server ${DEPLOY_RUN_PORT} --bind 0.0.0.0`
- No build step required (static site)

## Design System
- Theme: Dark luxury (black void + gold accents)
- Glassmorphism: `backdrop-filter: blur(20px)` + `rgba(255,255,255,0.05)`
- Gold: `#D4AF37` primary, `#F4E29A` light, `#A08520` dark
- Fonts: Playfair Display (display) + Inter (body)
- See DESIGN.md for complete tokens

## Content Rules
- Never use "download" - use "Contact to Obtain Original Files"
- All data must be real and accurate
- Each item shows precise storage size
- WhatsApp contact: +86 18902065009
