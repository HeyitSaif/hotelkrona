# Hotel Corona - Architecture Documentation

## Table of Contents
1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Component Architecture](#component-architecture)
6. [Data Flow](#data-flow)
7. [Performance Optimizations](#performance-optimizations)
8. [SEO Strategy](#seo-strategy)

## Overview

Hotel Corona is a luxury hotel website built with modern web technologies, featuring:
- Server-side rendering (SSR) for optimal performance and SEO
- Responsive design with mobile-first approach
- Conversion-optimized booking flows
- Elegant coastal castle aesthetic
- Accessibility compliance (WCAG AA)

### Key Goals
- 🚀 Performance: Lighthouse score 90+ on all metrics
- 🎨 Design: Elegant, luxury aesthetic with smooth animations
- 💰 Conversion: Optimized booking experience
- ♿ Accessibility: WCAG AA compliant
- 📱 Responsive: Seamless experience across all devices

## Tech Stack

### Core Framework
- **Next.js 14+**: App Router for file-based routing and SSR
- **React 18+**: Component-based UI architecture
- **TypeScript**: Type-safe development

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Custom Design System**: Coastal castle color palette

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Static type checking

### Deployment
- **Vercel**: Optimized hosting and CI/CD
- **Next.js Image Optimization**: Automatic image optimization

## Project Structure

```
hotel-corona/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── rooms/             # Rooms listing and details
│   │   ├── pricing/           # Pricing page
│   │   ├── amenities/         # Amenities page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── gallery/           # Gallery page
│   │   ├── booking/           # Booking page
│   │   ├── layout.tsx         # Root layout with header/footer
│   │   └── globals.css        # Global styles
│   │
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   ├── BookingBar.tsx # Sticky booking bar
│   │   │   └── LoadingOverlay.tsx # Initial loading screen
│   │   │
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WelcomeSection.tsx
│   │   │   ├── FeaturedRooms.tsx
│   │   │   ├── AmenitiesOverview.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── RestaurantsSection.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   └── ui/                # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       └── RoomCard.tsx
│   │
│   └── lib/                   # Utilities and constants
│       ├── constants.ts       # App-wide constants
│       └── utils.ts           # Helper functions
│
├── public/                    # Static assets
│   ├── images/               # Images organized by section
│   ├── logo.png              # Hotel logo
│   ├── robots.txt            # SEO robots file
│   └── sitemap.xml           # SEO sitemap
│
└── Configuration files
    ├── next.config.ts        # Next.js configuration
    ├── tailwind.config.ts    # Tailwind configuration
    ├── tsconfig.json         # TypeScript configuration
    └── package.json          # Dependencies
```

## Design System

### Color Palette

Our coastal castle aesthetic is defined by two color families:

#### Coastal Colors (Primary)
```css
--coastal-cream: #e9d9c3;      /* Primary background, light sections */
--coastal-sand: #d1c4a8;        /* Secondary background, alternating sections */
--coastal-gold-light: #b39a6b;  /* Accent highlights, borders */
--coastal-gold: #c4a65a;        /* Primary accent, hover states */
--coastal-bronze: #8a6e3d;      /* Dark accent, body text */
```

#### Accent Colors (Secondary)
```css
--accent-burgundy: #7d2e2e;     /* CTA buttons, urgent actions */
--accent-dark-brown: #3d2817;   /* Dark text, strong borders */
```

### Typography

```css
/* Headings - Elegant serif */
font-family: 'Playfair Display', Georgia, serif;

/* Body - Clean sans-serif */
font-family: 'Montserrat', system-ui, sans-serif;
```

**Scale:**
- H1: 3rem (48px) - Hero headings
- H2: 2.25rem (36px) - Section headings
- H3: 1.875rem (30px) - Subsection headings
- H4: 1.5rem (24px) - Card headings
- Body: 1rem (16px) - Regular text
- Small: 0.875rem (14px) - Captions, labels

### Spacing System

Following Tailwind's spacing scale with consistent rhythm:
- xs: 4px (0.25rem)
- sm: 8px (0.5rem)
- md: 12px (0.75rem)
- lg: 16px (1rem)
- xl: 24px (1.5rem)
- 2xl: 32px (2rem)
- 3xl: 48px (3rem)
- 4xl: 64px (4rem)

### Component Patterns

#### Button Variants
```typescript
// Primary - Burgundy CTA
<Button variant="primary">Book Now</Button>

// Secondary - Outlined with hover fill
<Button variant="secondary">Learn More</Button>

// Ghost - Minimal for less emphasis
<Button variant="ghost">View Details</Button>
```

#### Card Styles
- Soft shadows with warm tones
- 1-2px borders in gold-light or bronze
- Rounded corners: 8-12px
- Hover: Scale 1.02-1.05 with smooth transition

#### Animations
- Duration: 300-400ms for most interactions
- Easing: ease-in-out or custom bezier curves
- Parallax: Subtle on hero images
- Scroll animations: Fade in with Intersection Observer

## Component Architecture

### Layout Components

#### Header
- **Location**: `src/components/layout/Header.tsx`
- **Functionality**:
  - Transparent on hero, solid on scroll
  - Mobile: Hamburger menu with slide-out navigation
  - Desktop: Horizontal navigation with dropdowns
  - Logo links to homepage
  - Smooth scroll to page sections

#### BookingBar
- **Location**: `src/components/layout/BookingBar.tsx`
- **Functionality**:
  - Hidden initially, appears after 300px scroll
  - Fixed to top with backdrop blur
  - Date pickers, guest selector, CTA button
  - Mobile: Collapsible with floating button
  - Form validation before proceeding

#### Footer
- **Location**: `src/components/layout/Footer.tsx`
- **Functionality**:
  - Multi-column layout (desktop)
  - Quick links, contact info, social media
  - Newsletter signup
  - Legal links (privacy, terms)

#### LoadingOverlay
- **Location**: `src/components/layout/LoadingOverlay.tsx`
- **Functionality**:
  - Display on initial page load
  - Hotel logo centered
  - Gradient background (cream to sand)
  - Minimum 1.5s, fade out when ready
  - Prevents layout shift

### Section Components

#### HeroSection
- Full viewport height
- Parallax background image
- Centered heading and subtitle
- Inline booking form (prominent)
- Scroll indicator animation

#### WelcomeSection
- Hotel introduction text
- Key highlights in card grid
- Asymmetric image layout
- Fade-in on scroll animation

#### FeaturedRooms
- Horizontal carousel (desktop)
- Room cards with hover effects
- Quick view: image, name, price, CTA
- Links to individual room pages

#### TestimonialsSection
- Auto-rotating carousel
- Star ratings in gold
- Guest names and stay dates
- Pause on hover

### UI Components

All reusable components follow this pattern:

```typescript
interface ComponentProps {
  // Typed props
}

export const Component = ({ prop1, prop2 }: ComponentProps) => {
  // Component logic
  return (
    // JSX with Tailwind classes
  );
};
```

**Key Principles:**
- Single Responsibility: Each component has one clear purpose
- Composable: Components can be nested and reused
- Typed: Full TypeScript support with interfaces
- Accessible: ARIA labels, keyboard navigation, semantic HTML

## Data Flow

### Static Data
- Room information in `src/lib/constants.ts`
- Testimonials, amenities, FAQ data
- Imported by page/section components

### Future: Dynamic Data (CMS Integration Ready)
```
CMS → API Route → Component
```

Example structure for when CMS is added:
```typescript
// app/api/rooms/route.ts
export async function GET() {
  const rooms = await fetchFromCMS();
  return Response.json(rooms);
}

// app/rooms/page.tsx
const rooms = await fetch('/api/rooms').then(r => r.json());
```

### Form Submissions
```
Client Form → API Route → Email Service
                       → Database (future)
```

## Performance Optimizations

### Image Optimization
- **Next.js Image Component**: Automatic WebP conversion, lazy loading
- **Responsive Images**: Appropriate sizes for each device
- **Priority Loading**: Above-fold images load first
- **Lazy Loading**: Below-fold images load on scroll

### Code Splitting
- **Automatic**: Next.js splits code by route
- **Dynamic Imports**: Heavy components loaded on demand
```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'));
```

### Bundle Optimization
- **Tree Shaking**: Unused code eliminated
- **Minification**: Production builds compressed
- **Target**: Initial JS bundle < 200KB

### Caching Strategy
- **Static Assets**: Cached by CDN (Vercel)
- **Pages**: ISR (Incremental Static Regeneration) for semi-dynamic content
- **Images**: Optimized and cached on edge

## SEO Strategy

### Meta Tags
- Unique title and description per page
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hotel Corona",
  "description": "...",
  "address": {...},
  "telephone": "...",
  "priceRange": "$$$$"
}
```

### Sitemap & Robots
- XML sitemap at `/sitemap.xml`
- Robots.txt for crawler guidance
- All public pages indexed

### Performance = SEO
- Fast load times boost rankings
- Mobile-friendly design required
- Core Web Vitals optimized

## Accessibility

### WCAG AA Compliance
- ✅ Color contrast ratios meet standards
- ✅ Keyboard navigation fully functional
- ✅ Screen reader compatible
- ✅ Focus indicators visible
- ✅ Semantic HTML throughout

### ARIA Implementation
```tsx
<button aria-label="Close menu" aria-expanded={isOpen}>
  <Icon />
</button>
```

### Alt Text
All images have descriptive alt text for screen readers.

## Testing Strategy

### Manual Testing Checklist
- [ ] Responsive design on mobile, tablet, desktop
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Keyboard navigation works throughout
- [ ] Forms validate correctly
- [ ] Images load and lazy-load properly
- [ ] Animations perform smoothly
- [ ] Booking flow functions end-to-end

### Performance Testing
- Lighthouse audits (target: 90+ all metrics)
- WebPageTest for detailed analysis
- Real device testing for mobile

## Future Enhancements

### Phase 1 (Current)
- ✅ Static website with all pages
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Booking UI (no backend yet)

### Phase 2 (Next)
- [ ] CMS integration (Contentful/Sanity)
- [ ] Booking system API connection
- [ ] Email service integration
- [ ] Analytics (Google Analytics 4)

### Phase 3 (Future)
- [ ] User accounts and profiles
- [ ] Multi-language support (i18n)
- [ ] Blog/news section
- [ ] Advanced booking features (packages, add-ons)

---

**Last Updated**: November 2025
**Maintained By**: Development Team

