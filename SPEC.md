# Card Tag – Project Handover & Spec

This document captures everything we built and planned for Card Tag, so a new project (e.g. the landing site) can be brought up to speed.

---

## 1. What Is Card Tag?

**Card Tag** is an iOS app that lets users add price and condition labels to photos of trading cards. It's aimed at sellers and traders of Pokémon, Yu-Gi-Oh!, sports cards, and other TCGs.

**Core flow:** Take or select a photo → Add stickers (prices, conditions, quantity) → Export to Photos with watermark.

---

## 2. App Features (Implemented)

### Stickers

| Type | Description | Styling |
|------|-------------|---------|
| **Price label** | White background, bold dark grey border, rounded corners, dark grey text, drop shadow. Rotated 45° by default. | €1.50, £2.00, $3.00, CA$4.00 |
| **Quantity badge** | Orange circular badge, white text (e.g. x4) | For multi copies |
| **Custom text** | Multi-line, max 3 lines / 100 chars. Dynamically sized container. | Arbitrary text |
| **Condition badges** | Rounded squares: NM (green), LP (yellow), MP (red) | White text, centered |
| **Sold X** | Red X overlay | For sold cards |
| **Checkmark** | Green checkmark | For confirmed/sold |

### Sticker Behaviour

- **Size presets:** XS, S, M, L, XL (all shifted down one step for smaller defaults)
- **Positioning:** Center origin; drag to place; offset-drag: when selected, drag anywhere on image to move
- **Duplicate:** Select sticker → long-press where you want the copy → duplicate appears there
- **Delete:** Drag sticker off image edge → haptic feedback → delete
- **Edit:** Tap price/quantity/custom stickers to edit text; Done to close
- **Undo:** Top-left undo button; up to 20 steps
- **Stickers persist** across image changes until user chooses to clear

### Other

- **Multi-currency:** EUR, GBP, USD, CAD in Settings
- **Photo flow:** When replacing a photo, dialog asks "Keep stickers" or "Start fresh"
- **Export:** Saves to Photos with "Card Tag" watermark (logo + text) in bottom-right
- **FAQ:** In Settings, expandable Q&A
- **Launch screen:** App icon + "Card Tag" text
- **Theme:** Dark grey, off-white; avoids pure black

---

## 3. Branding & Visuals

- **App name:** Card Tag  
- **Bundle ID:** ie.order4.CardTag  
- **Display name:** Card Tag  
- **Colours:** Off-white background, dark grey (#2C2C2E style), mid-grey for secondary text  
- **App icon:** Dark grey rounded tag shape with off-white label  
- **Watermark:** App icon + "Card Tag" in bottom-right of exports  

### Example Export

User created a 3×3 Pokémon card mockup with: price labels (€), condition badges (NM/LP/MP), quantity badges (x3, x4), Card Tag watermark. Good reference for landing imagery.

---

## 4. Planned Landing Page Structure

Inspired by [Collectr](https://getcollectr.com/), but simplified for Card Tag.

### Suggested Sections

1. **Hero**
   - Headline: e.g. "Add Price & Condition Labels to Your Card Photos"
   - Subtext on fast, professional listings
   - App screenshot or 3×3 card mockup

2. **Why Card Tag**
   - 3–4 benefit cards:
     - "Price labels in seconds"
     - "Condition badges for buyers"
     - "Clean, professional listings"
     - "Multi-currency support" etc.

3. **Features**
   - Price labels, condition badges, quantity badges  
   - Custom text stickers  
   - Multi-currency (EUR, GBP, USD, CAD)  
   - Export with watermark  

4. **Image Gallery**
   - Mockup(s) of app in use
   - Before/after or sample exports

5. **FAQ**
   - Can mirror/adapt in-app FAQ

6. **App Store CTA**
   - Primary button: "Download on the App Store"

7. **Footer**
   - Contact, privacy, terms (as needed)

### Differentiator

- Collectr = portfolio tracking for collectors  
- Card Tag = labeling card photos for selling and trading  

---

## 5. Technical Details (for reference)

- **Platform:** iOS, SwiftUI  
- **Project path:** `Stickers Newry/Stickers Newry/`  
- **Main UI:** ContentView.swift (large file)  
- **Git:** Repo in project folder; last checkpoint: "Pre-launch checkpoint"  
- **App size:** ~3.9 MB debug build, likely smaller after App Store processing  

---

## 6. Handover Checklist for New Project

- [x] Copy this spec into the new project  
- [ ] Add Card Tag mockup / export images to `/assets` (or equivalent)  
- [ ] Add app icon or logo for site use  
- [ ] Use branding: Card Tag, dark grey, off-white  
- [ ] Implement hero, benefits, features, gallery, FAQ, CTA, footer  
- [ ] Keep messaging focused on "labeling card photos for sellers and traders"  

---

*Generated as handover from Card Tag iOS app development. Last updated: February 2026.*
