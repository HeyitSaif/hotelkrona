# 🚀 Quick Start Guide - Hotel Corona

> Get up and running in 5 minutes!

## Prerequisites Check

Before you begin, ensure you have:
- ✅ **Node.js** 18.x or higher → [Download](https://nodejs.org/)
- ✅ **npm** (comes with Node.js)
- ✅ **Git** → [Download](https://git-scm.com/)
- ✅ **VS Code** or **Cursor IDE** → [VS Code](https://code.visualstudio.com/) | [Cursor](https://cursor.sh/)

## 5-Minute Setup

### 1. Clone & Install (2 minutes)
```bash
# Clone the repository
git clone <repository-url>
cd hotel-corona

# Install dependencies
npm install
```

### 2. Start Development Server (30 seconds)
```bash
npm run dev
```

### 3. Open in Browser (30 seconds)
Open your browser and navigate to:
```
http://localhost:3000
```

🎉 **That's it!** You should see the Hotel Corona homepage.

## First Steps

### View All Pages
The website includes these pages:
- **Homepage** - http://localhost:3000
- **Rooms** - http://localhost:3000/rooms
- **Pricing** - http://localhost:3000/pricing
- **Amenities** - http://localhost:3000/amenities
- **About** - http://localhost:3000/about
- **Contact** - http://localhost:3000/contact
- **Gallery** - http://localhost:3000/gallery
- **Booking** - http://localhost:3000/booking

### Make Your First Change

1. **Open** `src/app/page.tsx` in your editor
2. **Find** the welcome section text
3. **Edit** some text
4. **Save** the file
5. **Watch** the browser automatically update! 🎨

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Check code quality
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code
npm run format

# Check TypeScript types
npm run type-check
```

## Project Structure Overview

```
hotel-corona/
├── src/
│   ├── app/                    # Your pages live here
│   │   ├── page.tsx           # Homepage
│   │   ├── rooms/             # Rooms pages
│   │   └── ...                # Other pages
│   │
│   ├── components/            # Reusable components
│   │   ├── layout/           # Header, Footer, etc.
│   │   ├── sections/         # Page sections
│   │   └── ui/               # Buttons, Cards, etc.
│   │
│   └── lib/                  # Utilities
│       ├── constants.ts      # Data (rooms, amenities)
│       └── utils.ts          # Helper functions
│
└── public/                   # Images and static files
```

## Making Changes

### Adding a New Room

1. Open `src/lib/constants.ts`
2. Add your room to the `ROOMS` array:
```typescript
{
  id: 'new-room',
  name: 'New Luxury Room',
  price: 399,
  // ... other properties
}
```
3. Save and check http://localhost:3000/rooms

### Changing Colors

1. Open `tailwind.config.ts`
2. Find the `colors` section under `extend`
3. Modify the hex values
4. Save and see changes instantly

### Editing Content

Most content is in:
- **Pages**: `src/app/*/page.tsx`
- **Sections**: `src/components/sections/*.tsx`
- **Data**: `src/lib/constants.ts`

## IDE Setup (Optional but Recommended)

### VS Code / Cursor IDE

1. **Open the project folder**
2. **Install recommended extensions** (you'll be prompted)
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
3. **Reload VS Code**

That's it! Auto-formatting and linting will now work automatically.

## Common Issues & Solutions

### Port Already in Use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Styles Not Updating
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript Errors
```bash
# Check for type errors
npm run type-check

# In VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

Now that you're set up:

### For Developers
1. Read **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development guide
2. Review **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture
3. Check **[.cursorrules.md](./.cursorrules.md)** - Coding standards

### For Contributors
1. Read **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Contribution guidelines
2. Review **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)** - Community standards

### For Designers
1. Check **[ARCHITECTURE.md](./ARCHITECTURE.md#design-system)** - Design system
2. Review component library in `src/components/ui/`

## Key Concepts

### 1. File-Based Routing
Pages are automatically created based on folder structure:
```
src/app/rooms/page.tsx     → /rooms
src/app/about/page.tsx     → /about
src/app/rooms/[slug]/page.tsx → /rooms/deluxe-ocean
```

### 2. Components
Reusable UI pieces:
```typescript
import { Button } from '@/components/ui/Button';

<Button variant="primary">Book Now</Button>
```

### 3. Tailwind CSS
Utility-first styling:
```tsx
<div className="p-6 bg-coastal-cream rounded-lg">
  Content
</div>
```

### 4. TypeScript
Type-safe development:
```typescript
interface RoomProps {
  name: string;
  price: number;
}
```

## Development Workflow

```
1. Create branch
   git checkout -b feature/my-feature

2. Make changes
   Edit files in src/

3. Test locally
   npm run dev

4. Check code quality
   npm run lint
   npm run type-check

5. Commit changes
   git commit -m "feat: add new feature"

6. Push and create PR
   git push origin feature/my-feature
```

## Useful Resources

### Documentation
- **[README.md](./README.md)** - Project overview
- **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** - All docs index
- **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** - Current status

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Getting Help

### Documentation
1. Check **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** for all guides
2. Search existing documentation
3. Review code examples in the codebase

### Community
1. Open an issue on GitHub
2. Check existing issues for solutions
3. Ask in discussions

### Quick Answers

**Q: How do I add a new page?**  
A: Create `src/app/page-name/page.tsx`

**Q: Where do I add content?**  
A: Most content is in `src/lib/constants.ts` or page components

**Q: How do I change colors?**  
A: Edit `tailwind.config.ts` in the `extend.colors` section

**Q: Can I use regular CSS?**  
A: Yes, but Tailwind is preferred. Add custom CSS to `src/app/globals.css`

**Q: How do I deploy?**  
A: See **[VERCEL_DEPLOYMENT_CHECKLIST.md](./VERCEL_DEPLOYMENT_CHECKLIST.md)**

## Tips for Success

### Do's ✅
- ✅ Use Tailwind classes for styling
- ✅ Define TypeScript types for all props
- ✅ Test on multiple screen sizes
- ✅ Follow the existing code patterns
- ✅ Run `npm run lint` before committing

### Don'ts ❌
- ❌ Don't use inline styles
- ❌ Don't use `any` type in TypeScript
- ❌ Don't skip alt text on images
- ❌ Don't commit directly to main branch
- ❌ Don't skip testing your changes

## Keyboard Shortcuts (VS Code)

```
Cmd/Ctrl + P        → Quick file open
Cmd/Ctrl + Shift + P → Command palette
Cmd/Ctrl + B        → Toggle sidebar
Cmd/Ctrl + /        → Comment/uncomment
Cmd/Ctrl + S        → Save (auto-formats)
Cmd/Ctrl + `        → Toggle terminal
```

## What's Next?

You're all set! Here are some ideas:

1. **Explore the codebase** - Look at existing components
2. **Make a small change** - Update some text or colors
3. **Read the docs** - Check out [DEVELOPMENT.md](./DEVELOPMENT.md)
4. **Pick an issue** - Find a good first issue on GitHub
5. **Ask questions** - Don't hesitate to ask for help!

---

<div align="center">

**🎉 Happy Coding! 🚀**

Need help? Check **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** for all guides

</div>

