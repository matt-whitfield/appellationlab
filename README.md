# Wine Education Platform - Portfolio Brochure Site

A portfolio showcase for the Walla Walla Wine Alliance (WWWA) educational platform, demonstrating full-stack development capabilities in building comprehensive Learning Management Systems with interactive geographic visualization.

**Live Platform**: [wallawallawine.com](https://wallawallawine.com)
**Portfolio Site**: [wine-app.mattwhitfield.xyz](https://wine-app.mattwhitfield.xyz)
**Developer**: Matt Whitfield ([mattwhitfield.xyz](https://mattwhitfield.xyz))

---

## 🎯 **Project Overview**

This brochure site showcases a production wine education platform built for the Walla Walla Valley Wine Alliance, combining:

1. **Complete Learning Management System**
   - Multi-level course structure (courses → topics → lessons)
   - JWT authentication and course enrollment
   - Real-time progress tracking with localStorage + backend sync
   - Topic quizzes with instant feedback
   - Final exam system requiring 100% course completion
   - Automated PDF certificate generation using jsPDF

2. **Interactive Wine Mapping**
   - Leaflet.js integration with GeoJSON overlays
   - Walla Walla Valley AVA and Rocks District boundaries
   - Searchable vineyard database with detailed information
   - Multiple basemap styles and layer toggles
   - Accessible keyboard navigation

---

## 🏗️ **Technical Architecture**

### **Frontend Stack**
- **Next.js 15** - App Router with React 19 and TypeScript 5.8
- **Tailwind CSS** - Custom design system with 99 semantic tokens
- **shadcn/ui** - Component library foundation with CVA variants
- **Leaflet.js** - Interactive mapping with React Leaflet and Turf.js
- **Server Components** - Optimized rendering and progressive loading

### **Backend Stack**
- **Strapi v5** - Headless CMS with GraphQL + REST APIs
- **JWT Authentication** - Secure token-based user sessions
- **Custom Content Types** - Courses, topics, lessons, quizzes, exams, enrollments, certificates
- **GraphQL API** - Type-safe data fetching with custom resolvers

### **Key Features Implemented**
- ✅ Hierarchical course content with rich media support
- ✅ Protected routes with enrollment validation
- ✅ Multi-attempt exam system with tracking
- ✅ Unique certificate IDs with verification
- ✅ GeoJSON AVA boundaries and vineyard mapping
- ✅ Vineyard search by name, varietal, and AVA
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ WCAG accessibility compliance

---

## 🎨 **Design System**

### **Color Palette (Minimalist Professional)**
- **Primary**: `#2563EB` (Trust blue)
- **Secondary**: `#0F172A` (Deep slate)
- **Accent**: `#10B981` (Success green)
- **Neutrals**: Slate gray progression for trustworthy, clean aesthetic

### **Typography**
- **Headings**: Inter (sans-serif, 700 weight, -0.02em letter spacing)
- **Body**: Inter (sans-serif, 400 weight)
- **Modern & Clean**: Single font family for minimalist, professional aesthetic
- **Design Tokens**: 99 semantic tokens for consistent theming

### **Component Architecture**
- shadcn/ui foundation components
- CVA-based variant management
- Modular design system for multi-client theming
- Responsive breakpoints: 375px, 768px, 1440px

---

## 📊 **Technical Highlights**

### **Engineering Challenges Solved**
1. **Comprehensive Exam System**
   - Built attempt tracking with configurable retry limits
   - Implemented 100% course completion requirement validation
   - Created instant feedback mechanism with score calculation

2. **Real-time Progress Synchronization**
   - localStorage persistence for offline capability
   - Backend sync on reconnection
   - Per-lesson, per-topic, and overall progress tracking

3. **Modular Design System**
   - 99 semantic tokens for multi-client theming
   - CVA-based component variants
   - White-label ready architecture

4. **Complex GeoJSON Mapping**
   - Integrated AVA boundaries with educational content
   - Vineyard search with Turf.js geographic calculations
   - Layer management with Leaflet.js controls

5. **Automated Certificate Generation**
   - Server-side PDF generation with jsPDF
   - Unique verification IDs
   - Professional branding with custom templates

---

## 🚀 **Deployment**

### **Brochure Site Deployment (wine-app.mattwhitfield.xyz)**

This static HTML brochure site can be deployed to any static hosting platform:

#### **Local Development**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Navigate to `http://localhost:8000`

#### **Production Deployment Options**

**Netlify (Recommended)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.
```

**Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**GitHub Pages**
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch and directory

**Custom Domain Setup**
- Point DNS A record to hosting provider
- Configure SSL certificate (auto on Netlify/Vercel)
- Update environment variables if needed

---

## 📱 **Site Structure**

### **Key Sections**
1. **Hero** - Portfolio positioning with technology stack highlights
2. **Case Study** - Accurate WWWA implementation details
3. **Technology Stack** - Frontend and backend architecture breakdown
4. **Platform Capabilities** - LMS and mapping feature highlights
5. **About** - Engineering achievements and developer attribution
6. **Contact** - Links to live platform, GitHub, and contact info

### **Features**
- Responsive design (mobile-first)
- Interactive animations and scroll effects
- Semantic HTML for SEO
- Fast loading times
- Accessible keyboard navigation

---

## 🔧 **Customization**

### **Content Updates**
- Update links to live platform and repositories
- Replace contact information (email, portfolio links)
- Add actual screenshots or mockups
- Customize developer attribution

### **Design Customization**
```css
/* Update CSS variables in styles.css */
:root {
  --primary: #2563EB;        /* Trust blue */
  --secondary: #0F172A;      /* Deep slate */
  --accent: #10B981;         /* Success green */
}
```

Current design philosophy:
- **Minimalist**: Clean, uncluttered interface with ample whitespace
- **Professional**: Trustworthy blue primary color, neutral slate text
- **Modern**: Subtle shadows, rounded corners (8px/16px), smooth transitions
- **Accessible**: High contrast ratios, clear typography hierarchy

### **Adding Screenshots**

The site uses placeholder containers for screenshots. To add actual images:

1. Create an `images` directory in the project root
2. Add screenshots from the WWWA platform (recommended):
   - `platform-dashboard.png` - Main dashboard view
   - `course-interface.png` - Course enrollment/progress view
   - `interactive-map.png` - Leaflet.js mapping interface
   - `certificate-example.png` - Generated PDF certificate

3. Update the HTML placeholder:
```html
<!-- Current placeholder -->
<div class="mockup-container">
  <!-- Replace with actual screenshot: <img src="images/platform-dashboard.png" alt="WWWA Platform Dashboard" class="mockup-screen loaded"> -->
</div>

<!-- Updated with image -->
<div class="mockup-container">
  <img src="images/platform-dashboard.png" alt="WWWA Platform Dashboard" class="mockup-screen loaded">
</div>
```

---

## 📈 **Performance Targets**

- **Load Time**: <3 seconds first contentful paint
- **Mobile Score**: 90+ Lighthouse mobile performance
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO Score**: 95+ Lighthouse SEO score

### **Browser Support**
- Modern browsers: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- Mobile: iOS 13+, Android 8+
- Graceful degradation for older browsers

---

## 📞 **Developer Information**

**Matt Whitfield**
- **Email**: matt@mattwhitfield.xyz
- **Portfolio**: [mattwhitfield.xyz](https://mattwhitfield.xyz)
- **GitHub**: [github.com/whittypro](https://github.com/whittypro)
- **Live Platform**: [wallawallawine.com](https://wallawallawine.com)

**Expertise**
- Full-stack development (React, Next.js, Node.js)
- Learning Management Systems
- Interactive mapping applications
- Modern web architecture (TypeScript, GraphQL, headless CMS)
- Responsive design and accessibility

---

## 🎯 **Use Cases**

This portfolio piece demonstrates capabilities in:
- Building comprehensive educational platforms
- Integrating complex mapping functionality
- Implementing authentication and enrollment systems
- Creating automated certificate generation
- Architecting type-safe full-stack applications
- Designing accessible, responsive user interfaces
- Working with headless CMS architectures

---

## 📝 **License**

This brochure site is a portfolio piece showcasing development work for Walla Walla Wine Alliance.

---

*Full-stack wine education platform built with Next.js 15, Strapi v5, and Leaflet.js.*
