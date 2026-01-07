# Pacific Homefront - Modern Website

A modern, fast, and SEO-optimized static website for Pacific Homefront property management services.

## ✨ Features

- **Modern Design** - Fresh, clean aesthetics with smooth animations
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **SEO Optimized** - Meta tags, structured data, semantic HTML
- **Lead Capture** - Contact form with built-in lead tracking
- **Lightning Fast** - No frameworks, pure HTML/CSS/JavaScript
- **Accessible** - WCAG compliant with keyboard navigation
- **Analytics Ready** - Google Analytics integration points

## 🚀 Quick Start

### Option 1: Open Locally
Simply open `index.html` in your browser. No build process required!

### Option 2: Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
pacific-homefront/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (modern CSS with animations)
├── js/
│   └── main.js         # Interactive features & form handling
├── assets/
│   ├── README.md       # Asset guidelines
│   ├── favicon.png     # Site favicon (add your logo)
│   └── og-image.jpg    # Social sharing image (add your image)
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary: #2563eb;      /* Main blue */
    --secondary: #06b6d4;    /* Cyan accent */
    --accent: #8b5cf6;       /* Purple */
}
```

### Content
Edit `index.html` to update:
- Company information
- Services offered
- Service areas (cities)
- Testimonials
- Contact details

### Images
Add your images to the `assets/` folder:
- `favicon.png` - 512x512px logo
- `og-image.jpg` - 1200x630px social sharing image

## 📊 Lead Tracking

The contact form captures leads and stores them in localStorage (for demo purposes).

**In production**, replace the form handling in `js/main.js` with your backend API:

```javascript
// Replace this section in contactForm submit handler
const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Export Leads (Demo)
Open browser console and run:
```javascript
exportLeads()
```

## 🔍 SEO Features

- ✅ Semantic HTML5 structure
- ✅ Meta descriptions and keywords
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org)
- ✅ Responsive images
- ✅ Clean URLs
- ✅ Fast load times

## 📈 Analytics Integration

Add Google Analytics by replacing `GA_MEASUREMENT_ID` in the code with your tracking ID.

The site already tracks:
- Page views
- CTA button clicks
- Service card interactions
- Form submissions
- Page load performance

## 🌐 Deployment Options

### Netlify (Recommended)
1. Push to GitHub
2. Connect repository to Netlify
3. Deploy automatically

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Deploy from branch
3. Select main branch

### Traditional Hosting
Upload all files via FTP to your web host.

## 📱 Mobile Optimization

- Touch-friendly navigation
- Responsive grid layouts
- Optimized images
- Fast load times
- Readable text sizes

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- High contrast ratios
- Alt text ready (add to images)

## 🔧 Technical Details

**Technologies:**
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- No dependencies or frameworks

**Browser Support:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

**Performance:**
- No build process required
- < 50KB total page weight (excluding images)
- Lazy loading ready
- Optimized animations

## 📝 To-Do for Production

- [ ] Add real company images to `/assets`
- [ ] Update contact information (phone, email)
- [ ] Connect form to backend API
- [ ] Add Google Analytics tracking ID
- [ ] Test on all devices
- [ ] Add privacy policy page
- [ ] Add terms of service page
- [ ] Set up custom domain
- [ ] Add SSL certificate
- [ ] Submit sitemap to Google

## 🎯 Lead Generation Features

1. **Multiple CTAs** - Hero button, nav button, contact section
2. **Service Segmentation** - Separate paths for owners, renters, agents, investors
3. **Social Proof** - Testimonials section
4. **Trust Signals** - Stats, service areas, comprehensive services
5. **Easy Contact** - Prominent contact form with user type selection

## 📞 Support

For questions or customization help, refer to the comments in the code files.

## 📄 License

© 2024 Pacific Homefront. All rights reserved.

---

**Built with modern web standards for maximum performance and lead conversion.**
