# Deployment Guide - Springlife Worship Center

## 🚀 Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Springlife Worship Center website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/springlife-worship-center.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a React project

3. **Configure Build Settings**
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes at `https://your-project.vercel.app`

### Method 2: Direct Upload

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 🔧 Configuration Files

The project includes these configuration files for optimal deployment:

- `vercel.json` - Vercel deployment settings
- `vite.config.ts` - Build configuration
- `package.json` - Dependencies and scripts

## 📋 Pre-Deployment Checklist

- [ ] All images are optimized and loading correctly
- [ ] All internal links work properly
- [ ] Mobile responsiveness tested
- [ ] Forms and interactive elements work
- [ ] No console errors in browser
- [ ] Build completes without errors (`npm run build`)

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain (e.g., `springlifeworship.com`)

2. **DNS Configuration**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.19`

3. **SSL Certificate**
   - Vercel provides free SSL automatically
   - Certificate will be issued within minutes

## 🔄 Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Preview deployments created for pull requests
- Rollback to previous versions available in dashboard

## 📊 Performance Optimization

The project includes several optimizations:
- **Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Vendor and UI components separated
- **Caching**: Static assets cached for 1 year
- **Compression**: Gzip compression enabled

## 🐛 Troubleshooting

### Build Failures
- Check all imports are correct
- Ensure all dependencies are in `package.json`
- Verify TypeScript types are correct

### Routing Issues
- `vercel.json` includes SPA rewrites for React Router
- All routes will fallback to `index.html`

### Image Loading Issues
- Ensure all imported images exist
- Check `figma:asset` imports are correctly configured
- Verify fallback images are accessible

## 📈 Monitoring

After deployment, monitor:
- **Performance**: Vercel Analytics (free tier available)
- **Errors**: Browser console and Vercel function logs
- **Traffic**: Vercel dashboard analytics

## 🔐 Environment Variables

If you need to add environment variables:
1. Go to Vercel project settings
2. Click "Environment Variables"
3. Add your variables (e.g., `VITE_API_URL`)

## 🚀 Going Live

1. **Test thoroughly** on the Vercel preview URL
2. **Set up custom domain** (optional but recommended)
3. **Share the URL** with your church community
4. **Set up analytics** to track visitors

## 📞 Support

If you encounter issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review build logs in Vercel dashboard
- Ensure all dependencies are properly installed

Your Springlife Worship Center website is now ready to serve your community! 🙏

---

**Live URL**: After deployment, your site will be available at:
- Vercel URL: `https://springlife-worship-center.vercel.app`
- Custom domain: `https://your-domain.com` (if configured)