# 🎬 MULTI MOVIES - Schema Architecture & Customization Guide

This project features a decoupled, schema-driven architecture. All interface elements, navigation items, dropdowns, hero carousels, and episode lists are governed by JSON schemas in `schemas/` and loaded dynamically from `data/`.

---

## 📁 Directory & Schema Layout

```text
movie/
├── index.html                           # Main web application entry point (Widescreen layout)
├── schemas/                             # JSON Schemas defining structures & types
│   ├── README.md                        # Documentation & customization guide (this file)
│   ├── site-config.schema.json          # MULTI MOVIES brand, pill navigation dropdowns & utility icons
│   ├── hero.schema.json                 # Hero series showcase (Lucifer) with carousel controls
│   ├── episodes.schema.json             # Episode explorer schema with season, runtime & thumbnails
│   ├── cartoon.schema.json              # Cartoon & Animation section schema
│   ├── trends.schema.json               # Trending movies & categories schema
│   └── continue-watching.schema.json    # Continue watching video row & progress bars
├── data/                                # Modular data files (edit these to change site content!)
│   ├── site-config.json                 # MULTI MOVIES branding, pill dropdown menu & utilities
│   ├── hero.json                        # 10 Featured slides (Lucifer is active at 09/10)
│   ├── episodes.json                    # Lucifer Season 1 episode list with synopses & thumbnails
│   ├── cartoon.json                     # Cartoon & Animation hits (Spider-Verse, Arcane, etc.)
│   ├── trends.json                      # Trending blockbusters list
│   └── continue-watching.json           # In-progress series and playback percentages
└── assets/
    ├── css/                             # Modular stylesheets
    │   ├── variables.css                # Color tokens & typography
    │   ├── base.css                     # Resets & widescreen layout
    │   ├── navbar.css                   # MULTI MOVIES logo, centered pill menu & utility circles
    │   ├── hero.css                     # Lucifer hero banner, buttons & 09/10 carousel controls
    │   └── modal.css                    # Cinema trailer player & Episodes explorer modal
    ├── js/                              # Modular scripts
    │   ├── app.js                       # Core loader, carousel controller & renderer
    │   ├── player.js                    # Cinema trailer & episode modal controller
    │   └── schema-manager.js            # Live on-page Schema & Data Inspector/Editor
    └── images/                          # High-resolution backdrops, posters & logos
```

---

## 🛠️ How to Change Content

### 1. Change the Hero Series (`data/hero.json`)
To change Lucifer or any of the 10 carousel slides:
```json
{
  "activeSlideIndex": 8,
  "slides": [
    {
      "badge": "LATEST UPDATES",
      "title": "Lucifer",
      "rating": 8.4,
      "year": 2016,
      "type": "Series",
      "duration": "45 min",
      "quality": "1080p",
      "synopsis": "Bored and unhappy as the Lord of Hell...",
      "backdropUrl": "assets/images/multimovies_hero_bg.jpg",
      "trailerUrl": "https://www.youtube-nocookie.com/embed/X4bF_quwNtw?autoplay=1"
    }
  ]
}
```

### 2. Customize the Pill Navigation & Dropdowns (`data/site-config.json`)
Add or edit menu items in the floating pill navigation bar:
```json
{
  "pillMenu": [
    { "id": "home", "label": "Home", "hasDropdown": false, "isActive": true },
    { "id": "genre", "label": "Genre", "hasDropdown": true, "dropdownItems": ["Action", "Crime", "Drama", "Fantasy", "Horror"] },
    { "id": "ott", "label": "OTT", "hasDropdown": true, "dropdownItems": ["Netflix", "HBO Max", "Disney+"] }
  ]
}
```

### 3. Add or Modify Episodes (`data/episodes.json`)
When users click `▷ Explore episodes`, it renders from `data/episodes.json`:
```json
{
  "seriesTitle": "Lucifer",
  "currentSeason": 1,
  "episodes": [
    {
      "episodeNumber": 1,
      "title": "Pilot",
      "duration": "45m",
      "synopsis": "Upon leaving hell, Lucifer Morningstar takes up residence in Los Angeles...",
      "thumbnailUrl": "assets/images/lucifer_hero_banner.jpg"
    }
  ]
}
```

---

## ⚡ Built-in Live Schema Manager
Click the floating **"⚙️ Schema Manager"** button or the top-right filter icon on the page:
1. Switch between `Hero Series`, `Multi Movies Navigation`, `Episodes Explorer`, and `Trends`.
2. Edit JSON directly in the browser.
3. Click **Apply Live Changes** to re-render the page live!
4. Click **Download JSON** to save the updated file directly to your `data/` folder.
