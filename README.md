# COCO Studio Website

A modern, responsive website for COCO Studio - a landscape design, build, and maintenance company based in Bengaluru.

## Overview

This website is built with React, Vite, Tailwind CSS, and GSAP for animations. It features:

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations** - Scroll animations and interaction effects powered by GSAP
- **Image Optimization** - WebP images for faster loading
- **Performance Optimized** - Lazy loading for below-the-fold images
- **Accessible** - Semantic HTML with proper alt text for images
- **Modern Stack** - React 18, Vite, Tailwind CSS

## Project Structure

```
plantoriumV2/
├── src/
│   ├── components/
│   │   ├── Navbar/              # Navigation bar component
│   │   ├── Hero/                # Hero section with botanical video
│   │   ├── WhyWeWork/           # Before/after comparison section
│   │   ├── WhatWeDo/            # Services section with 4 cards
│   │   ├── SelectedWork/        # Portfolio projects section
│   │   ├── OurApproach/         # 4-step process section
│   │   ├── WhyCoco/             # Company benefits section
│   │   ├── SelectedSpaces/      # Gallery of landscaping projects
│   │   ├── FinalCTA/            # Contact form and final call-to-action
│   │   └── Footer/              # Footer section
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles and Tailwind directives
├── assets/
│   ├── home/                    # Homepage images (WebP format)
│   └── logo/                    # Logo assets
├── index.html                   # HTML entry point
├── package.json                 # Project dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── .gitignore                  # Git ignore rules
```

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Technologies Used

### Core
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

### Animations & Interactions
- **GSAP** - Professional animations library
- **ScrollTrigger** - Scroll-based animations
- **CSS Transitions** - Smooth hover effects

### Styling
- **Playfair Display** - Serif font for headings
- **Inter** - Sans-serif font for body text
- **CSS Variables** - Custom properties for theming

## Key Features

### Hero Section
- Botanical animation video with fallback MP4
- Wooden door image overlay
- Gradient dark background
- Smooth fade-up animations
- CTA buttons for booking and contact

### Before/After Slider
- Interactive before/after comparison
- Draggable slider handle
- Mouse and touch support
- Visual feedback with labels

### Service Cards
- 4 main services with icons
- Hover effects on card backgrounds
- Responsive grid layout

### Project Cards
- Large project images with hover zoom effect
- Project metadata (category, year)
- WhatsApp contact button
- Smooth scroll-triggered animations

### Form Section
- Contact form with 4 input fields
- Dropdown for service selection
- Responsive layout on mobile
- Submit button

### Responsive Design
- Mobile-first approach
- Tablet optimizations
- Desktop enhancements
- Touch-friendly interactive elements

## Images & Assets

All images are in **WebP format** for optimal performance:
- `assets/home/` - Homepage section images
- `assets/logo/` - Logo files

### Image Lazy Loading
Below-the-fold images use `loading="lazy"` for better performance.

### Before/After Slider
Uses full-width images that respond to mouse/touch input for smooth interaction.

## Animations

### Scroll Animations
- Fade-up on section entrance
- Staggered animations for card groups
- Scale effects for images

### Interaction Animations
- Button hover transforms
- Image zoom on card hover
- Slider handle transitions

### Performance
- Uses `transform` and `opacity` for 60 FPS performance
- ScrollTrigger for efficient scroll listeners
- CSS transitions for simple effects

## Accessibility

- Semantic HTML structure
- Alt text on all images
- Proper heading hierarchy
- ARIA labels for interactive elements
- Respects `prefers-reduced-motion`
- Keyboard accessible navigation

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- **Lazy loading** for below-the-fold images
- **WebP format** for modern browsers
- **Code splitting** via Vite
- **Tree shaking** for unused code
- **Minified production build**
- **Gzip compression ready**

## Development Guidelines

### Component Structure
Each component has:
- `ComponentName.jsx` - React component
- `ComponentName.css` - Component-specific styles (when needed)

### Styling
- Use Tailwind CSS utility classes
- Extend via `tailwind.config.js` for custom values
- Use CSS variables for colors in custom CSS

### Animations
- Use GSAP for complex animations
- Use CSS transitions for simple hover effects
- Always consider performance (transform, opacity)

### Images
- Use WebP format for photographic images
- Use SVG for icons and logos
- Provide alt text for all images
- Lazy load below-the-fold images

## Deployment

The `dist/` folder contains the production-ready build:

```bash
npm run build
# Deploy dist/ folder to your hosting
```

## Future Enhancements

- Add page transitions
- Implement smooth scroll library (Lenis)
- Add lightbox for project images
- Integrate email service for form submissions
- Add multi-language support
- Implement dark mode toggle

## License

© 2026 COCO Studio. All rights reserved.
