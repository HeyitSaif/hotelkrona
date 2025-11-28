# Hotel Corona - Vercel Deployment Guide

## Bundle Optimizations Implemented ✅

### 1. Next.js Configuration Optimizations

#### Image Optimization
- **AVIF & WebP formats**: Modern image formats with better compression
- **Custom device sizes**: Optimized for all screen sizes (640px to 2048px)
- **Image caching**: 60-second minimum cache TTL
- **Lazy loading**: Automatic for all images

#### Compiler Optimizations
- **SWC Minification**: Faster builds with Rust-based compiler
- **Console removal**: Production builds remove console.log (keeps error/warn)
- **Source maps disabled**: Smaller bundle size in production

#### Performance Features
- **React Strict Mode**: Enabled for better debugging
- **Optimized fonts**: Automatic font optimization
- **Package imports optimization**: Tree-shaking for @heroicons, framer-motion, lucide-react
- **Compression**: Gzip/Brotli compression enabled
- **ETags**: Generated for better caching

#### Caching Strategy
- **Static assets**: 1 year cache (immutable)
- **Images**: 1 year cache for optimal performance
- **Next.js static files**: Aggressive caching

### 2. Vercel Configuration

#### Region
- **Primary region**: `iad1` (Washington, D.C.)
- Can be changed based on your target audience

#### Build Settings
- **Framework**: Next.js (auto-detected)
- **Build command**: `next build`
- **Output directory**: `.next` (automatic)

### 3. Environment Variables

Create these in Vercel Dashboard:

#### Required Variables
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

#### Optional (Add as needed)
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## Deployment Steps

### Initial Setup

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Add bundle optimizations for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js

3. **Configure Build Settings**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add production variables
   - Save and redeploy if needed

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Every push to main branch will trigger auto-deployment

### Performance Monitoring

After deployment, check:

1. **Vercel Analytics**
   - Go to your project → Analytics
   - Monitor Core Web Vitals (LCP, FID, CLS)

2. **Lighthouse Score**
   - Run Google Lighthouse on deployed URL
   - Target scores:
     - Performance: 90+
     - Accessibility: 95+
     - Best Practices: 95+
     - SEO: 95+

3. **Bundle Size**
   - Check build output in Vercel logs
   - Monitor "First Load JS" for each page

## Expected Bundle Sizes

### Optimized Sizes (approximate)
- **Homepage**: ~150-200 KB (First Load JS)
- **Room Pages**: ~120-180 KB
- **Static Pages**: ~100-150 KB

### Lighthouse Targets
- **Performance**: 90-95
- **Accessibility**: 95-100 (WCAG AA compliant)
- **Best Practices**: 95-100
- **SEO**: 95-100

## Optimization Features

### Image Optimization
✅ Next.js automatic image optimization
✅ AVIF/WebP format conversion
✅ Responsive image sizes
✅ Lazy loading
✅ Blur placeholder (optional)

### Code Splitting
✅ Automatic route-based code splitting
✅ Dynamic imports for heavy components
✅ Optimized package imports (tree-shaking)

### Caching Strategy
✅ Static assets: 1 year cache
✅ Images: Immutable caching
✅ API responses: Configurable
✅ ETags for cache validation

### Compression
✅ Gzip compression
✅ Brotli compression (Vercel automatic)
✅ Minified JavaScript
✅ Minified CSS

## Advanced Optimizations (Optional)

### 1. Add Bundle Analyzer
```bash
npm install --save-dev @next/bundle-analyzer
```

Update `next.config.ts`:
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Run analysis:
```bash
npm run analyze
```

### 2. Add Sitemap Generation
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
}
```

### 3. Add PWA Support (Optional)
```bash
npm install next-pwa
```

## Troubleshooting

### Build Fails
- Check Node.js version (18+ recommended)
- Clear `.next` folder: `rm -rf .next`
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Large Bundle Size
- Run `npm run analyze` to identify large packages
- Use dynamic imports for heavy components
- Check for duplicate dependencies
- Optimize images (use WebP/AVIF)

### Slow Performance
- Check Vercel Analytics for bottlenecks
- Optimize database queries
- Add caching for API routes
- Use ISR (Incremental Static Regeneration) where applicable

## Monitoring & Maintenance

### Regular Checks
- [ ] Monitor Vercel Analytics weekly
- [ ] Check Lighthouse scores monthly
- [ ] Update dependencies quarterly
- [ ] Review bundle sizes after major updates

### Performance Budget
Set alerts in Vercel for:
- Bundle size > 200KB (per route)
- LCP > 2.5s
- CLS > 0.1

## Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records:
   - Type: A Record
   - Name: @ (or subdomain)
   - Value: 76.76.21.21
4. Wait for DNS propagation (up to 48 hours)
5. Vercel will automatically provision SSL certificate

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)

---

**Last Updated**: November 28, 2024
**Next.js Version**: 16.0.5
**Deployment Platform**: Vercel


