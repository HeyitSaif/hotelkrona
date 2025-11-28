# Hotel Corona 🏰

<div align="center">

**Coastal Castle Elegance on the Digital Shores**

A luxury hotel website built with Next.js 14, TypeScript, and Tailwind CSS

[View Demo](#) • [Report Bug](https://github.com/username/hotel-corona/issues) • [Request Feature](https://github.com/username/hotel-corona/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## 🏨 About

Hotel Corona is a modern, elegant website for a luxury coastal hotel. Built with performance and conversion optimization in mind, it features:

- **Elegant Design**: Coastal castle aesthetic with custom color palette
- **Fast Performance**: Server-side rendering with Next.js 14 App Router
- **Conversion Optimized**: Strategically placed booking CTAs and forms
- **Fully Responsive**: Seamless experience from mobile to desktop
- **SEO Friendly**: Optimized meta tags and structured data
- **Accessible**: WCAG AA compliant

### 🎨 Design Philosophy

The site embodies a "coastal castle elegance" theme with:
- Warm, inviting color palette inspired by sand, gold, and ocean views
- Serif typography for headings (Playfair Display)
- Clean sans-serif for body text (Montserrat)
- Smooth animations and transitions throughout
- Mobile-first responsive design

## ✨ Features

### Core Functionality
- ✅ **Homepage**: Hero section, welcome, featured rooms, amenities overview, testimonials
- ✅ **Rooms Showcase**: Browse all rooms with filtering and individual detail pages
- ✅ **Pricing Information**: Clear pricing tables and package deals
- ✅ **Amenities**: Comprehensive showcase of hotel facilities
- ✅ **About Page**: Hotel story, team, and sustainability practices
- ✅ **Contact Form**: Multi-purpose contact form with validation
- ✅ **Gallery**: Masonry grid layout with lightbox
- ✅ **Booking Interface**: User-friendly booking flow (UI ready for backend integration)

### Special Features
- 🎭 **Loading Overlay**: Elegant hotel logo animation on page load
- 📌 **Sticky Booking Bar**: Appears after scrolling with inline date pickers
- 🖼️ **Image Optimization**: Next.js Image component with lazy loading
- 🎨 **Smooth Animations**: Framer Motion powered transitions
- ♿ **Accessibility**: Keyboard navigation, ARIA labels, semantic HTML
- 📱 **Mobile Optimized**: Collapsible navigation and booking forms
- 🚀 **Performance**: Lighthouse score 90+ on all metrics

## 🛠️ Tech Stack

### Core
- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[React 18+](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

### Deployment
- **[Vercel](https://vercel.com/)** - Hosting and CI/CD

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **Package Manager**: npm (recommended) or pnpm
- **Git**: For version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/username/hotel-corona.git
cd hotel-corona
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

### Available Scripts

```bash
npm run dev          # Start development server on localhost:3000
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix linting issues
```

## 📁 Project Structure

```
hotel-corona/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── rooms/             # Rooms pages
│   │   ├── pricing/           # Pricing page
│   │   ├── amenities/         # Amenities page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── gallery/           # Gallery page
│   │   ├── booking/           # Booking page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   │
│   ├── components/
│   │   ├── layout/            # Header, Footer, BookingBar, LoadingOverlay
│   │   ├── sections/          # Page sections (Hero, Welcome, etc.)
│   │   └── ui/                # Reusable UI components
│   │
│   └── lib/                   # Utils and constants
│       ├── constants.ts       # Static data
│       └── utils.ts           # Helper functions
│
├── public/                    # Static assets
│   ├── images/               # Organized by section
│   └── logo.png              # Hotel logo
│
├── .cursorrules              # Cursor IDE project rules
├── .vscode/                  # VS Code configuration
├── .editorconfig             # Editor configuration
├── .prettierrc               # Prettier configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies

```

### Key Directories

- **`src/app/`**: Next.js pages using App Router (file-based routing)
- **`src/components/layout/`**: Global layout components (Header, Footer, etc.)
- **`src/components/sections/`**: Page-specific sections (HeroSection, WelcomeSection, etc.)
- **`src/components/ui/`**: Reusable UI components (Button, Card, Input, etc.)
- **`src/lib/`**: Utility functions and constants

## 💻 Development

### IDE Configuration

This project includes configuration for:
- **Cursor IDE**: `.cursorrules` with project-specific guidelines
- **VS Code**: `.vscode/settings.json` with recommended settings
- **EditorConfig**: `.editorconfig` for consistent formatting
- **Prettier**: `.prettierrc` for code formatting

### Recommended VS Code Extensions

The project recommends these extensions (auto-prompted on open):
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Path Intellisense
- Error Lens
- Pretty TypeScript Errors

### Code Style

#### TypeScript
- Strict mode enabled
- Avoid `any` type
- Define interfaces for all props
- Use type inference when obvious

#### React Components
- Functional components with TypeScript
- Named exports for components
- Props interfaces before component
- Keep components under 300 lines

#### Styling
- Tailwind utility classes first
- Custom utilities in `globals.css` for repeated patterns
- Mobile-first responsive design
- Follow the custom color palette

### Color Palette

```typescript
// Coastal Colors (Primary)
'coastal-cream': '#e9d9c3',      // Primary background
'coastal-sand': '#d1c4a8',        // Secondary background
'coastal-gold-light': '#b39a6b',  // Accent highlights
'coastal-gold': '#c4a65a',        // Primary accent
'coastal-bronze': '#8a6e3d',      // Dark accent/text

// Accent Colors (Secondary)
'accent-burgundy': '#7d2e2e',     // CTA buttons
'accent-dark-brown': '#3d2817',   // Dark text/borders
```

### Adding New Features

1. **Create feature branch**
```bash
git checkout -b feature/your-feature-name
```

2. **Make changes** following code standards

3. **Test thoroughly** (responsive, accessibility, performance)

4. **Commit with conventional commits**
```bash
git commit -m "feat: add booking confirmation page"
```

5. **Create Pull Request** with description

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Deploy to production**
```bash
vercel --prod
```

### Pre-deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build locally
- [ ] Verify all pages load correctly
- [ ] Check responsive design
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Verify SEO meta tags
- [ ] Test forms and interactions

See [VERCEL_DEPLOYMENT_CHECKLIST.md](./VERCEL_DEPLOYMENT_CHECKLIST.md) for detailed steps.

### Environment Variables

Currently no environment variables required. When integrating with backend services:

```env
# .env.example
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_BOOKING_ENGINE=your_booking_engine_id
# Add as needed
```

## 📚 Documentation

Comprehensive documentation is available:

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture and design patterns
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development guide and common tasks
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Contribution guidelines
- **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** - Current project status and progress
- **[DESIGN_FIXES.md](./DESIGN_FIXES.md)** - Design improvements log
- **[UI_UX_IMPROVEMENTS_SUMMARY.md](./UI_UX_IMPROVEMENTS_SUMMARY.md)** - UX enhancements
- **[VERCEL_DEPLOYMENT_CHECKLIST.md](./VERCEL_DEPLOYMENT_CHECKLIST.md)** - Deployment guide

### Quick Links

- [Component Examples](./DEVELOPMENT.md#creating-a-new-component)
- [Styling Guide](./DEVELOPMENT.md#styling-guidelines)
- [TypeScript Patterns](./DEVELOPMENT.md#typescript-patterns)
- [Performance Tips](./DEVELOPMENT.md#performance-optimization)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md)
2. Fork the repository
3. Create your feature branch
4. Make your changes
5. Write/update tests if applicable
6. Ensure code passes linting
7. Submit a Pull Request

### Reporting Issues

- **Bug Reports**: Use [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md)
- **Feature Requests**: Use [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md)

## 📊 Project Status

Current Status: **Phase 1 Complete** ✅

### Completed Features
- ✅ All pages implemented (homepage, rooms, pricing, amenities, about, contact, gallery, booking)
- ✅ Responsive design across all devices
- ✅ Loading overlay with hotel logo
- ✅ Sticky booking bar with scroll trigger
- ✅ SEO optimization with meta tags and sitemap
- ✅ Accessibility compliance (WCAG AA)
- ✅ Performance optimization (Lighthouse 90+)

### In Progress
- 🔄 Backend integration preparation
- 🔄 CMS integration planning

### Planned Features
- ⏳ Booking system API connection
- ⏳ Email service integration
- ⏳ User accounts
- ⏳ Multi-language support
- ⏳ Blog/news section

See [PROJECT_STATUS.md](./PROJECT_STATUS.md) for detailed status.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from luxury coastal hotels
- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Open source community for tools and libraries

## 📧 Contact

For questions or support:
- 📧 Email: info@hotelcorona.com
- 🌐 Website: [hotelcorona.com](https://hotelcorona.com)
- 💼 LinkedIn: [Hotel Corona](https://linkedin.com/company/hotelcorona)

---

<div align="center">

**Built with ❤️ using Next.js and TypeScript**

⭐ Star this repo if you find it helpful!

</div>
