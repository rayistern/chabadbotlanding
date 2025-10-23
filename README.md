# ChabadAI Landing Page

A modern, interactive landing page for ChabadAI featuring a 3D spinning globe, dark theme design, and professional layout.

![ChabadAI Landing Page](https://via.placeholder.com/800x400/251B33/FFFFFF?text=ChabadAI+Landing+Page)

## 🌟 Features

- **🌍 Interactive 3D Globe** - Three.js powered spinning globe with Chabad center locations
- **🌙 Dark Mode Design** - Professional dark theme with gray color palette
- **📱 Responsive Layout** - Mobile-first design that works on all devices
- **🎨 Modern UI** - Clean typography and minimalist design inspired by OpenAI
- **📰 Article Section** - Featured articles with high-quality square images
- **🔗 Professional Footer** - Comprehensive footer with social links and contact info
- **⚡ Fast Performance** - Optimized for speed with static site generation
- **🎬 Scroll Animations** - GSAP powered smooth scroll effects

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chabadai-landing.git
   cd chabadai-landing
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

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js
- **Animations:** GSAP + ScrollTrigger
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Deployment:** Netlify

## 📁 Project Structure

```
chabadai-landing/
├── app/
│   ├── globals.css          # Global styles and dark theme
│   ├── layout.tsx          # Root layout with scripts
│   └── page.tsx            # Main page component
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── articles.tsx        # Article section
│   ├── features.tsx        # Features section
│   ├── footer.tsx          # Footer component
│   ├── hero.tsx            # Hero section with 3D globe
│   └── sidebar.tsx         # Left sidebar navigation
├── lib/
│   └── utils.ts            # Utility functions
├── netlify.toml            # Netlify configuration
├── DEPLOYMENT.md           # Deployment instructions
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary:** Dark grays (#251B33, #0F0817)
- **Accent:** Purple (#9D4EDD) and Yellow (#F4D35E)
- **Text:** White and light gray variants

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 400, 600, 700, 900

### Components
- Clean, minimalist design
- Consistent spacing and typography
- Hover effects and smooth transitions
- Professional button styles

## 🌍 3D Globe Features

The interactive globe includes:
- **Chabad Centers:** 9 major locations worldwide
- **Starfield:** 10,000 animated stars
- **Scroll Animations:** Globe rotates and zooms on scroll
- **Lighting:** Purple and yellow point lights
- **Responsive:** Adapts to different screen sizes

## 📱 Responsive Design

- **Mobile:** Single column layout with collapsible sidebar
- **Tablet:** Optimized spacing and typography
- **Desktop:** Full sidebar navigation and multi-column layouts

## 🚀 Deployment

### Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/chabadai-landing)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `out` directory to your hosting provider

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Copy `env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
NEXT_PUBLIC_SITE_NAME=ChabadAI
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For questions or support:
- Create an issue on GitHub
- Contact: info@chabadai.com

## 🙏 Acknowledgments

- Three.js for 3D graphics
- GSAP for animations
- Tailwind CSS for styling
- Radix UI for components
- Unsplash for images

---

**ChabadAI** - Empowering Jewish learning through artificial intelligence.