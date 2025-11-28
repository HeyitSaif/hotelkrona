# 📚 Documentation Index - Hotel Corona

> **Quick Navigation**: Your complete guide to all Hotel Corona documentation

## 🚀 Getting Started

New to the project? Start here:

1. **[README.md](./README.md)** - Project overview, features, and quick start guide
2. **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Setup instructions and common development tasks
3. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Understand the system design and structure

## 📖 Core Documentation

### For Developers

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[README.md](./README.md)** | Project overview and introduction | First time viewing the project |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | System architecture and design patterns | Understanding how the app is structured |
| **[DEVELOPMENT.md](./DEVELOPMENT.md)** | Development guide with code examples | Daily development work |
| **[CONTRIBUTING.md](./CONTRIBUTING.md)** | Contribution guidelines and workflow | Before making contributions |
| **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** | Current progress and roadmap | Checking what's done and what's next |

### For Code Quality

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[.cursorrules](./.cursorrules)** | Cursor IDE project rules | Automatically used by Cursor IDE |
| **[.cursorrules.md](./.cursorrules.md)** | Extended Cursor guidelines (readable) | Understanding project standards |
| **[.editorconfig](./.editorconfig)** | Editor configuration | Automatically used by editors |
| **[.prettierrc](./.prettierrc)** | Code formatting rules | Automatically used by Prettier |

### For Project Management

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[CHANGELOG.md](./CHANGELOG.md)** | Version history and changes | Tracking releases and updates |
| **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)** | Community guidelines | Understanding community standards |
| **[SECURITY.md](./SECURITY.md)** | Security policies and reporting | Reporting vulnerabilities |

### For Deployment

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[VERCEL_DEPLOYMENT_CHECKLIST.md](./VERCEL_DEPLOYMENT_CHECKLIST.md)** | Deployment guide | Before deploying to production |
| **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** | Detailed deployment instructions | Setting up hosting and CI/CD |

### Design & UX

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[DESIGN_FIXES.md](./DESIGN_FIXES.md)** | Design improvements log | Reviewing design changes |
| **[UI_UX_IMPROVEMENTS_SUMMARY.md](./UI_UX_IMPROVEMENTS_SUMMARY.md)** | UX enhancement details | Understanding UX decisions |
| **[TAILWIND_FIX_SUMMARY.md](./TAILWIND_FIX_SUMMARY.md)** | Tailwind configuration notes | Troubleshooting styling issues |

## 🎯 Quick Reference Guides

### Project Structure
```
hotel-corona/
├── src/
│   ├── app/              # Pages (Next.js App Router)
│   ├── components/       # React components
│   │   ├── layout/      # Header, Footer, BookingBar
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Reusable components
│   └── lib/             # Utils and constants
├── public/              # Static assets
└── .vscode/            # VS Code configuration
```

### Color Palette Reference
```css
Coastal Colors:
- coastal-cream: #e9d9c3      /* Primary background */
- coastal-sand: #d1c4a8        /* Secondary background */
- coastal-gold-light: #b39a6b  /* Accent highlights */
- coastal-gold: #c4a65a        /* Primary accent */
- coastal-bronze: #8a6e3d      /* Dark text */

Accent Colors:
- accent-burgundy: #7d2e2e     /* CTA buttons */
- accent-dark-brown: #3d2817   /* Dark text/borders */
```

### Common Commands
```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix issues

# Package Management
npm install          # Install dependencies
npm update           # Update packages
npm audit            # Check for vulnerabilities
```

### File Naming Conventions
- **Components**: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- **Pages**: `page.tsx` in folder (e.g., `rooms/page.tsx`)
- **Utils**: `camelCase.ts` (e.g., `utils.ts`)
- **Constants**: `UPPER_SNAKE_CASE` in code (e.g., `MAX_GUESTS`)

## 🔧 IDE Configuration

### VS Code / Cursor IDE Setup

**Automatic Configuration:**
- `.vscode/settings.json` - Editor settings
- `.vscode/extensions.json` - Recommended extensions
- `.vscode/tasks.json` - Development tasks
- `.vscode/launch.json` - Debug configurations

**Manual Setup:**
1. Open project in VS Code/Cursor
2. Install recommended extensions (you'll be prompted)
3. Reload window
4. Configuration applies automatically

### Recommended Extensions
- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Path Intellisense
- Error Lens
- Pretty TypeScript Errors

## 📋 Development Workflows

### Adding a New Feature
1. Read **[CONTRIBUTING.md](./CONTRIBUTING.md)** for guidelines
2. Create feature branch: `git checkout -b feature/name`
3. Follow patterns in **[DEVELOPMENT.md](./DEVELOPMENT.md)**
4. Check **[ARCHITECTURE.md](./ARCHITECTURE.md)** for design patterns
5. Test thoroughly
6. Submit PR using template

### Fixing a Bug
1. Check **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** for known issues
2. Create branch: `git checkout -b fix/description`
3. Make changes following code standards
4. Test the fix
5. Submit PR with bug report details

### Updating Documentation
1. Identify which document needs updating (see table above)
2. Make changes following markdown best practices
3. Update **[CHANGELOG.md](./CHANGELOG.md)** if significant
4. Update this index if adding new documents

## 🎓 Learning Paths

### For New Contributors
1. Read **[README.md](./README.md)** - 5 minutes
2. Read **[CONTRIBUTING.md](./CONTRIBUTING.md)** - 10 minutes
3. Skim **[ARCHITECTURE.md](./ARCHITECTURE.md)** - 15 minutes
4. Follow **[DEVELOPMENT.md](./DEVELOPMENT.md)** setup - 5 minutes
5. Review **[.cursorrules.md](./.cursorrules.md)** - 20 minutes
6. Start contributing!

### For Designers
1. **[DESIGN_FIXES.md](./DESIGN_FIXES.md)** - See past design decisions
2. **[UI_UX_IMPROVEMENTS_SUMMARY.md](./UI_UX_IMPROVEMENTS_SUMMARY.md)** - UX rationale
3. Color palette in **[ARCHITECTURE.md](./ARCHITECTURE.md#design-system)**
4. Component library in `src/components/ui/`

### For DevOps/Deployment
1. **[VERCEL_DEPLOYMENT_CHECKLIST.md](./VERCEL_DEPLOYMENT_CHECKLIST.md)** - Step by step
2. **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Detailed setup
3. **[SECURITY.md](./SECURITY.md)** - Security considerations

## 🆘 Troubleshooting

### Common Issues

**Build Errors:**
- Check **[DEVELOPMENT.md](./DEVELOPMENT.md#troubleshooting)**
- Review **[TAILWIND_FIX_SUMMARY.md](./TAILWIND_FIX_SUMMARY.md)**

**Styling Issues:**
- Review color palette in **[ARCHITECTURE.md](./ARCHITECTURE.md#design-system)**
- Check **[.cursorrules.md](./.cursorrules.md#styling-with-tailwind-css)**

**TypeScript Errors:**
- See patterns in **[DEVELOPMENT.md](./DEVELOPMENT.md#typescript-patterns)**
- Review **[.cursorrules.md](./.cursorrules.md#typescript-guidelines)**

**Git/Contribution Issues:**
- Read **[CONTRIBUTING.md](./CONTRIBUTING.md)**
- Check commit format in **[.cursorrules.md](./.cursorrules.md#git-commit-conventions)**

## 📞 Getting Help

### Documentation Not Clear?
1. Check if there's a more specific guide in this index
2. Look for examples in the codebase
3. Review related documentation
4. Open an issue with the "documentation" label

### Found an Error in Docs?
1. Note which document has the error
2. Submit PR with correction
3. Or open an issue describing the problem

### Have a Question?
1. Search existing documentation first
2. Check **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** for known items
3. Open a discussion or issue

## 🔄 Keeping Documentation Updated

### When to Update Docs

| Scenario | Documents to Update |
|----------|---------------------|
| New feature added | README, CHANGELOG, PROJECT_STATUS |
| Architecture changed | ARCHITECTURE, DEVELOPMENT |
| New coding pattern | .cursorrules, DEVELOPMENT |
| Design system update | ARCHITECTURE, DESIGN_FIXES |
| Version released | CHANGELOG, README |
| Security policy change | SECURITY |
| New contributor workflow | CONTRIBUTING |

### Documentation Review Checklist
- [ ] All links work correctly
- [ ] Code examples are accurate
- [ ] Screenshots are up to date
- [ ] Version numbers are current
- [ ] Status reflects reality
- [ ] No outdated information
- [ ] Follows markdown best practices

## 📊 Documentation Statistics

**Total Documentation Files**: 15+  
**Coverage Areas**: 
- Development (5 files)
- Architecture (3 files)
- Project Management (4 files)
- Configuration (8+ files)
- Templates (3 files)

**Last Major Update**: November 28, 2025  
**Next Review Due**: When Phase 2 begins

## 🎯 Documentation Goals

### Current Phase (1.0)
- ✅ Complete project setup documentation
- ✅ IDE configuration for Cursor and VS Code
- ✅ Comprehensive development guides
- ✅ Architecture documentation
- ✅ Contribution guidelines

### Next Phase (2.0)
- ⏳ API integration documentation
- ⏳ Backend setup guides
- ⏳ Testing documentation
- ⏳ Deployment automation docs
- ⏳ Performance optimization guides

## 📝 Contributing to Documentation

Documentation contributions are welcome! Please:

1. Read **[CONTRIBUTING.md](./CONTRIBUTING.md)** first
2. Check this index to see where your contribution fits
3. Follow markdown best practices
4. Keep examples clear and concise
5. Update this index if adding new documents
6. Submit PR with "docs:" prefix in commit message

## 🏆 Documentation Best Practices Used

- ✅ Clear hierarchical structure
- ✅ Searchable content
- ✅ Cross-referenced documents
- ✅ Code examples included
- ✅ Visual aids where helpful
- ✅ Version controlled
- ✅ Regularly updated
- ✅ Accessible formatting

---

**Maintained By**: Hotel Corona Development Team  
**Last Updated**: November 28, 2025  
**Questions?** Open an issue or see **[CONTRIBUTING.md](./CONTRIBUTING.md)**

---

<div align="center">

**📚 Happy Reading! 🎉**

*Complete documentation enables better development*

</div>

