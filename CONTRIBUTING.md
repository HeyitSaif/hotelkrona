# Contributing to Hotel Corona

Thank you for your interest in contributing to Hotel Corona! This document provides guidelines and instructions for contributing to this project.

## Table of Contents
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or pnpm package manager
- Git
- Code editor (VS Code or Cursor IDE recommended)

### Initial Setup

1. **Clone the repository** (if not already done):
```bash
git clone <repository-url>
cd hotel-corona
```

2. **Install dependencies**:
```bash
npm install
# or
pnpm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to `http://localhost:3000`

### Recommended VS Code Extensions
Install these extensions for the best development experience:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

These are listed in `.vscode/extensions.json` and VS Code will prompt you to install them.

## Development Workflow

### Branch Naming Convention
```
feature/description    # New features
fix/description       # Bug fixes
style/description     # Design/styling updates
refactor/description  # Code refactoring
docs/description      # Documentation updates
perf/description      # Performance improvements
```

Example: `feature/add-booking-confirmation-page`

### Development Process

1. **Create a new branch**:
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes**:
- Write clean, readable code
- Follow the code standards below
- Test your changes thoroughly

3. **Commit your changes**:
```bash
git add .
git commit -m "feat: add booking confirmation page"
```

4. **Push to repository**:
```bash
git push origin feature/your-feature-name
```

5. **Create a Pull Request** with a clear description

## Code Standards

### TypeScript Guidelines

#### Always Use Types
```typescript
// ❌ Bad
const fetchData = (id: any) => {
  // ...
};

// ✅ Good
interface FetchDataParams {
  id: string;
}

const fetchData = ({ id }: FetchDataParams): Promise<DataType> => {
  // ...
};
```

#### Interface vs Type
- Use `interface` for object shapes
- Use `type` for unions, intersections, and primitives

```typescript
// Interfaces for objects
interface Room {
  id: string;
  name: string;
  price: number;
}

// Types for unions
type Status = 'available' | 'booked' | 'maintenance';
```

### React Component Guidelines

#### Component Structure
```typescript
// 1. Imports (group logically)
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
  price: number;
  onBook?: () => void;
}

// 3. Constants (if needed)
const ANIMATION_DURATION = 0.3;

// 4. Component
export const Component = ({ title, price, onBook }: ComponentProps) => {
  // a. Hooks
  const [isHovered, setIsHovered] = React.useState(false);

  // b. Event handlers
  const handleClick = () => {
    if (onBook) onBook();
  };

  // c. Render
  return (
    <div>
      <h2>{title}</h2>
      <p>{formatPrice(price)}</p>
      <Button onClick={handleClick}>Book</Button>
    </div>
  );
};
```

#### Component Naming
- Use PascalCase for component names
- Use descriptive names that indicate purpose
- Suffix with expected component type when helpful

```typescript
// Components
export const HeroSection = () => { };
export const BookingForm = () => { };
export const RoomCard = () => { };
```

### Styling Guidelines

#### Tailwind CSS Usage
```tsx
// ✅ Good - Logical grouping, readable
<div className="
  flex items-center justify-between
  px-6 py-4
  bg-coastal-cream
  rounded-lg shadow-md
  transition-all duration-300
  hover:shadow-lg hover:scale-105
">
  Content
</div>

// ❌ Bad - No line breaks, hard to read
<div className="flex items-center justify-between px-6 py-4 bg-coastal-cream rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
  Content
</div>
```

#### Custom Styles
Only create custom styles when:
1. Pattern is repeated 5+ times
2. Complex animation not possible with Tailwind
3. Global style needed

Add to `src/app/globals.css`:
```css
@layer components {
  .btn-primary {
    @apply bg-accent-burgundy text-coastal-gold px-6 py-3 rounded-lg;
    @apply transition-colors duration-300;
    @apply hover:bg-accent-dark-brown;
  }
}
```

### File Organization

#### Import Order
```typescript
// 1. External dependencies
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 2. Internal components
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

// 3. Utilities and constants
import { formatDate } from '@/lib/utils';
import { ROOM_TYPES } from '@/lib/constants';

// 4. Types
import type { Room, Booking } from '@/types';

// 5. Styles (if any)
import styles from './Component.module.css';
```

#### File Naming
```
PascalCase - Components (HeroSection.tsx)
camelCase - Utilities (utils.ts)
kebab-case - Pages ([room-slug]/page.tsx)
UPPER_SNAKE_CASE - Constants exports (MAX_GUESTS)
```

### Accessibility Requirements

#### Semantic HTML
```tsx
// ✅ Good
<nav>
  <ul>
    <li><a href="/rooms">Rooms</a></li>
  </ul>
</nav>

// ❌ Bad
<div>
  <div>
    <div><a href="/rooms">Rooms</a></div>
  </div>
</div>
```

#### ARIA Labels
```tsx
// ✅ Good
<button aria-label="Close menu" onClick={closeMenu}>
  <CloseIcon />
</button>

// ❌ Bad
<button onClick={closeMenu}>
  <CloseIcon />
</button>
```

#### Image Alt Text
```tsx
// ✅ Good
<Image 
  src="/room-deluxe.jpg" 
  alt="Deluxe room with ocean view, king bed, and modern furnishings"
  width={800}
  height={600}
/>

// ❌ Bad
<Image src="/room-deluxe.jpg" alt="Room" width={800} height={600} />
```

### Performance Best Practices

#### Image Optimization
```tsx
// ✅ Good - Next.js Image with proper props
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Hotel exterior with ocean view"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  quality={85}
/>

<Image
  src="/amenity-pool.jpg"
  alt="Outdoor pool with lounge chairs"
  width={800}
  height={600}
  loading="lazy" // For below-the-fold images
/>
```

#### Dynamic Imports
```typescript
// ✅ Good - Lazy load heavy components
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/Map'), {
  loading: () => <p>Loading map...</p>,
  ssr: false, // Disable SSR if needed
});
```

## Commit Guidelines

### Commit Message Format
```
<type>: <subject>

<body> (optional)

<footer> (optional)
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `style`: Design/styling changes (not code style)
- `refactor`: Code restructuring without behavior change
- `perf`: Performance improvement
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
# Simple feature
git commit -m "feat: add room comparison page"

# Bug fix with description
git commit -m "fix: correct date picker validation

- Add check for past dates
- Improve error message display
- Fix mobile layout issue"

# Breaking change
git commit -m "refactor: update booking form API

BREAKING CHANGE: Booking form now requires guestEmail field"
```

## Pull Request Process

### Before Submitting

1. **Test thoroughly**:
   - Test on multiple screen sizes
   - Check browser compatibility
   - Verify accessibility with keyboard navigation

2. **Run linting**:
```bash
npm run lint
```

3. **Build successfully**:
```bash
npm run build
```

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] Cross-browser testing
- [ ] Accessibility testing

## Screenshots (if applicable)
Add screenshots of visual changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] No console logs or debugging code
- [ ] Tested thoroughly
- [ ] Documentation updated if needed
```

### Review Process
1. Submit PR with clear description
2. Address reviewer feedback
3. Make requested changes
4. Get approval from maintainer
5. PR will be merged

## Testing

### Manual Testing Checklist

#### Responsive Design
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)
- [ ] Large screens (1920px+)

#### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible

#### Performance
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No layout shift
- [ ] Fast page loads

### Testing Features

#### Booking Bar
- [ ] Appears after scrolling 300px
- [ ] Date pickers work correctly
- [ ] Guest selector functions
- [ ] Mobile: Collapsible version works
- [ ] Form validation displays

#### Forms
- [ ] Required fields validated
- [ ] Error messages display clearly
- [ ] Success states show
- [ ] Submit button has loading state

#### Navigation
- [ ] All links work
- [ ] Mobile menu opens/closes
- [ ] Smooth scroll to sections
- [ ] Active page highlighted

## Questions or Issues?

If you have questions or run into issues:
1. Check existing documentation (README.md, ARCHITECTURE.md)
2. Review PROJECT_STATUS.md for current state
3. Look for similar issues in the repository
4. Create a new issue with detailed description

## Thank You!

Your contributions help make Hotel Corona better. We appreciate your time and effort! 🙏

