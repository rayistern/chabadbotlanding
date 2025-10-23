# ChabadAI Landing Page - Netlify Deployment

## Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/chabadai-landing)

## Manual Deployment Steps

### 1. Prepare Your Repository
1. Push your code to GitHub, GitLab, or Bitbucket
2. Make sure all files are committed and pushed

### 2. Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose your Git provider and select your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   - **Node version:** `18`

### 3. Environment Variables (if needed)
Add any environment variables in Netlify dashboard:
- Go to Site settings → Environment variables
- Add variables like `NEXT_PUBLIC_API_URL` if needed

### 4. Deploy
1. Click "Deploy site"
2. Netlify will automatically build and deploy your site
3. Your site will be available at `https://your-site-name.netlify.app`

## Build Configuration

The project includes:
- `netlify.toml` - Netlify configuration file
- Optimized build scripts
- Proper redirects for SPA routing
- Security headers
- Caching headers for static assets

## Features Included

✅ **3D Interactive Globe** - Three.js powered spinning globe  
✅ **Dark Mode Design** - Professional dark theme  
✅ **Left Sidebar Navigation** - Clean navigation layout  
✅ **Responsive Design** - Mobile-first approach  
✅ **Professional Footer** - Comprehensive footer with links  
✅ **Article Images** - High-quality square images  
✅ **Scroll Animations** - GSAP powered animations  

## Custom Domain

To add a custom domain:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS records as instructed
4. Enable HTTPS (automatic with Netlify)

## Performance Optimizations

- Static site generation
- Optimized images
- Minified CSS/JS
- Proper caching headers
- CDN distribution

## Support

For issues or questions:
- Check Netlify build logs
- Verify all dependencies are installed
- Ensure Node.js version compatibility
