# Development Guide - Hotel Corona

## Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or pnpm package manager
- Git

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

## Available Scripts

### Development
```bash
npm run dev          # Start development server on localhost:3000
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint to check code quality
npm run lint:fix     # Auto-fix linting issues
```

### Common Tasks

#### Adding a New Page
1. Create file in `src/app/[page-name]/page.tsx`
2. Follow the page template:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title - Hotel Corona',
  description: 'Page description for SEO',
};

export default function PageName() {
  return (
    <main>
      {/* Page content */}
    </main>
  );
}
```

3. Add navigation link in `Header.tsx`
4. Update sitemap if needed

#### Creating a New Component

1. **Determine component type**:
   - Layout: `src/components/layout/`
   - Section: `src/components/sections/`
   - UI: `src/components/ui/`

2. **Create component file**:

```typescript
// src/components/ui/ComponentName.tsx
interface ComponentNameProps {
  title: string;
  description?: string;
}

export const ComponentName = ({ 
  title, 
  description 
}: ComponentNameProps) => {
  return (
    <div className="p-4 bg-coastal-cream rounded-lg">
      <h3 className="text-2xl font-serif text-coastal-bronze">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-coastal-bronze/80">
          {description}
        </p>
      )}
    </div>
  );
};
```

3. **Export from index (optional)**:
```typescript
// src/components/ui/index.ts
export { ComponentName } from './ComponentName';
```

#### Adding New Constants

Add to `src/lib/constants.ts`:

```typescript
export const NEW_CONSTANT = {
  key: 'value',
  // ...
};
```

#### Adding Utility Functions

Add to `src/lib/utils.ts`:

```typescript
/**
 * Brief description of what the function does
 * @param param1 - Description of param1
 * @returns Description of return value
 */
export function utilityFunction(param1: string): string {
  // Implementation
  return result;
}
```

## Project Structure Deep Dive

### App Directory (`src/app/`)
Next.js 14 App Router with file-based routing:

```
app/
├── page.tsx              # Homepage (/)
├── layout.tsx            # Root layout (wraps all pages)
├── globals.css           # Global styles
├── rooms/
│   ├── page.tsx          # Rooms listing (/rooms)
│   └── [slug]/
│       └── page.tsx      # Individual room (/rooms/deluxe-ocean)
├── pricing/page.tsx      # Pricing page (/pricing)
├── amenities/page.tsx    # Amenities page (/amenities)
├── about/page.tsx        # About page (/about)
├── contact/page.tsx      # Contact page (/contact)
├── gallery/page.tsx      # Gallery page (/gallery)
└── booking/page.tsx      # Booking page (/booking)
```

### Components Directory (`src/components/`)

#### Layout Components
Global components used across all pages:
- `Header.tsx` - Navigation header with mobile menu
- `Footer.tsx` - Site footer with links and info
- `BookingBar.tsx` - Sticky booking bar (scroll-triggered)
- `LoadingOverlay.tsx` - Initial page load animation

#### Section Components
Page-specific sections (mostly for homepage):
- `HeroSection.tsx` - Full-screen hero with booking form
- `WelcomeSection.tsx` - Hotel introduction
- `FeaturedRooms.tsx` - Room preview carousel
- `AmenitiesOverview.tsx` - Amenities highlights
- `TestimonialsSection.tsx` - Customer reviews
- `RestaurantsSection.tsx` - Dining options
- `CTASection.tsx` - Call-to-action blocks

#### UI Components
Reusable, generic components:
- `Button.tsx` - Styled buttons with variants
- `Card.tsx` - Content cards
- `Input.tsx` - Form inputs
- `RoomCard.tsx` - Room display card

### Library Directory (`src/lib/`)

#### constants.ts
All static data and configuration:
```typescript
export const ROOMS = [ /* room data */ ];
export const AMENITIES = [ /* amenities data */ ];
export const TESTIMONIALS = [ /* testimonials */ ];
export const CONTACT_INFO = { /* contact details */ };
```

#### utils.ts
Helper functions:
```typescript
export function formatPrice(price: number): string;
export function formatDate(date: Date): string;
export function cn(...classes: string[]): string; // classnames utility
```

## Styling Guidelines

### Using Tailwind CSS

#### Basic Structure
```tsx
<div className="
  // Layout
  flex flex-col items-center justify-between
  
  // Spacing
  px-6 py-4 gap-4
  
  // Colors
  bg-coastal-cream text-coastal-bronze
  
  // Borders & Shadows
  rounded-lg border border-coastal-gold-light shadow-md
  
  // Transitions
  transition-all duration-300
  
  // Hover States
  hover:bg-coastal-sand hover:shadow-lg
  
  // Responsive
  md:flex-row md:px-8 lg:px-12
">
  Content
</div>
```

#### Color Classes
```css
/* Backgrounds */
bg-coastal-cream
bg-coastal-sand
bg-coastal-gold
bg-accent-burgundy

/* Text */
text-coastal-bronze
text-coastal-gold
text-accent-dark-brown

/* Borders */
border-coastal-gold-light
border-coastal-bronze
```

#### Responsive Breakpoints
```css
/* Mobile first - no prefix needed */
px-4          /* All screens */
md:px-6       /* ≥768px */
lg:px-8       /* ≥1024px */
xl:px-12      /* ≥1280px */
2xl:px-16     /* ≥1536px */
```

### Custom Animations

Using Framer Motion:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

Scroll-triggered animations:

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Component = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
      Content
    </motion.div>
  );
};
```

## TypeScript Patterns

### Component Props
```typescript
// Basic props
interface ComponentProps {
  title: string;
  count: number;
  isActive?: boolean; // Optional
}

// With children
interface ComponentProps {
  children: React.ReactNode;
  title: string;
}

// With callbacks
interface ComponentProps {
  onSubmit: (data: FormData) => void;
  onChange?: (value: string) => void;
}

// Extending HTML attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}
```

### Data Types
```typescript
// Room type
interface Room {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  amenities: string[];
  capacity: {
    adults: number;
    children: number;
  };
}

// Booking type
interface Booking {
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guests: {
    adults: number;
    children: number;
  };
}
```

## Common Patterns

### Page Template
```typescript
import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: 'Page Title - Hotel Corona',
  description: 'SEO description',
  openGraph: {
    title: 'Page Title - Hotel Corona',
    description: 'OG description',
    images: ['/og-image.jpg'],
  },
};

export default function PageName() {
  return (
    <main className="min-h-screen">
      <HeroSection 
        title="Page Title"
        subtitle="Page subtitle"
      />
      
      {/* Additional sections */}
    </main>
  );
}
```

### Form Handling
```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API call
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
```

## Debugging Tips

### Next.js Debugging
```typescript
// Add console logs in server components
console.log('Server component data:', data);

// Use React DevTools for client components
// Install: https://chrome.google.com/webstore/detail/react-developer-tools

// Check build errors
npm run build
```

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit

# Get detailed error information
npx tsc --noEmit --pretty
```

### Styling Issues
```bash
# Ensure Tailwind classes are being generated
# Check terminal for warnings during dev

# Rebuild Tailwind
rm -rf .next
npm run dev
```

## Performance Optimization

### Image Optimization Checklist
- [ ] Use Next.js Image component
- [ ] Provide width and height
- [ ] Use `priority` for above-fold images
- [ ] Use `loading="lazy"` for below-fold
- [ ] Optimize source images before adding to project

### Code Splitting
- Use dynamic imports for heavy components
- Split large pages into smaller sections
- Lazy load below-the-fold content

### Bundle Analysis
```bash
# Analyze bundle size
npm run build

# Check .next/static for bundle sizes
# Keep JavaScript bundles under 200KB initial load
```

## Deployment

### Pre-deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test production build locally (`npm run start`)
- [ ] Check all pages load correctly
- [ ] Verify environment variables are set
- [ ] Test on multiple devices/browsers
- [ ] Run Lighthouse audit (target: 90+)

### Deploy to Vercel
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

See `VERCEL_DEPLOYMENT_CHECKLIST.md` for detailed deployment steps.

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

#### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### TypeScript Errors
```bash
# Restart TypeScript server in VS Code
# Command Palette: "TypeScript: Restart TS Server"

# Or check for issues
npx tsc --noEmit
```

## Getting Help

1. Check documentation files:
   - `README.md` - Project overview
   - `ARCHITECTURE.md` - System architecture
   - `CONTRIBUTING.md` - Contribution guidelines
   - `PROJECT_STATUS.md` - Current progress

2. Review existing code for patterns

3. Check Next.js documentation: https://nextjs.org/docs

4. Search issues in the repository

---

**Last Updated**: November 2025

