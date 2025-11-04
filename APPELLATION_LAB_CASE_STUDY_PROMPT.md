# AI Agent Prompt: Appellation Lab Case Study

### 🎯 **AI Agent Prompt**

```
You are an expert web design case study writer specializing in authentic, straightforward portfolio content for web developers and designers.

**CONTEXT**: Matt Whitfield is a full-stack web developer who co-founded Appellation Lab with Advanced Sommelier Kaleigh Brook. Matt developed the entire wine education platform technology (Next.js 15, Strapi v5, Leaflet.js mapping) and also designed/built the Appellation Lab single-page marketing website as an MVP to launch the business. This case study will be added to Matt's portfolio website (built with Astro) to showcase both his branding/design work on the single-page site AND highlight his role as the platform developer—though the full platform case study hasn't been created yet. The tone must be authentic, straightforward, and avoid marketing fluff while highlighting technical and design decisions.

**CURRENT FILE(S)**:
- `/Users/whittypro/Sites/mattsWebSite/src/content/case-studies/` (directory for new case study markdown file)
- Reference files: `/Users/whittypro/Sites/mattsWebSite/src/content/case-studies/lifechangemedical.md` and `/Users/whittypro/Sites/mattsWebSite/src/content/case-studies/mountain-view-pole-buildings.md`
- Appellation Lab site: `/Users/whittypro/Sites/wine-education-platform-brochure/appellationlab/index.html`
- Appellation Lab styles: `/Users/whittypro/Sites/wine-education-platform-brochure/appellationlab/styles.css`

**TASK**: Create a case study markdown file for the Appellation Lab single-page website that highlights Matt's branding, logo design, content strategy, and mobile-first responsive design decisions—while elegantly acknowledging he also developed the underlying platform technology (with a note that the full platform case study is coming).

**REQUIREMENTS**:
1. Follow the exact frontmatter structure from the reference case studies (lifechangemedical.md and mountain-view-pole-buildings.md)
2. Create authentic, straightforward copy matching Matt's portfolio tone (no marketing hype)
3. Highlight key brand decisions:
   - Color palette: Burgundy (#722F37), Sage (#7D8B6C), Straw (#CFB781), Sky Blue (#8BA5B5)
   - Typography: Cormorant Garamond (serif headings) + Lato (body text) for wine industry elegance
   - Logo design approach and brand identity decisions
   - Content structure for wine region marketing (B2B audience)
4. Emphasize mobile responsiveness and clean, professional design
5. Acknowledge Matt's dual role as both:
   - Designer/developer of the single-page marketing site (this case study's focus)
   - Platform developer for the underlying wine education technology (mentioned briefly with "full platform case study coming")
6. Keep it concise, professional, and focused on design/branding decisions
7. Use actual metrics where possible (page speed, mobile optimization, etc.)

**APPELLATION LAB BRAND CONTEXT**:
- **Business Model**: Custom wine education platforms for wine regions, AVAs, and alliances
- **Target Audience**: Wine industry professionals, regional wine alliances, tourism boards
- **Key Value Props**:
  - Interactive AVA mapping
  - Terroir and geology storytelling
  - Gamified wine education with certifications
  - Multi-audience content (consumers, trade, media)
- **Technology Stack**: Next.js 15, Strapi v5, Leaflet.js (Matt developed this)
- **Featured Partnership**: Walla Walla Valley Wine Alliance (160+ vineyards on map, Spring 2026 launch)

**DESIGN DECISIONS TO HIGHLIGHT**:
1. **Color Palette**: Wine-inspired burgundy/sage/straw palette conveying sophistication and terroir
2. **Typography**: Serif headings (Cormorant Garamond) for elegance, clean sans-serif body (Lato) for readability
3. **Logo**: Simple, elegant mark suitable for wine industry professionalism
4. **Content Strategy**:
   - B2B focused messaging for wine alliances and regional organizations
   - Clear value proposition: "Transform Wine Regions Into Compelling Digital Destinations"
   - Educational content over sales pitch
   - Partnership showcase (Walla Walla Valley Wine Alliance) for credibility
5. **Mobile-First Design**: Hero section, responsive grids, touch-friendly navigation
6. **Single-Page MVP Strategy**: Efficient launch approach with clear CTAs for demo requests

**CONSTRAINTS**:
- Must match the frontmatter structure from reference case studies exactly
- Tone must be authentic and straightforward (avoid phrases like "stunning," "revolutionary," "game-changing")
- Don't overstate—this is an MVP single-page site, not a complex web app
- Keep acknowledgment of Matt's platform development role brief and elegant (1-2 sentences max)
- Focus primarily on the branding and single-page site design decisions
- Must work within Matt's existing Astro site structure (markdown frontmatter format)

**CODE REFERENCE**:
Appellation Lab site analysis from `/Users/whittypro/Sites/wine-education-platform-brochure/appellationlab/`:

```html
<!-- Hero Section Structure (index.html lines 95-137) -->
- Background image with overlay gradient
- Hero badge: "Co-Founded by Advanced Sommelier Kaleigh Brook"
- Value proposition: "Every Wine Region Has a Story - Written in Soil, Time, and Craft"
- Three value cards: Educate Consumers, Empower Trade, Elevate Identity
- Clear CTA: "Explore the Platform"
```

```css
/* Brand Color Variables (styles.css lines 6-18) */
--primary: #722F37;        /* Brand burgundy */
--accent: #7D8B6C;         /* Brand sage green */
--straw: #CFB781;          /* Brand straw */
--sky-blue: #8BA5B5;       /* Brand sky blue */

/* Typography (styles.css lines 35-36) */
--font-heading: 'Cormorant Garamond', serif;
--font-body: 'Lato', sans-serif;

/* Responsive Strategy (styles.css lines 1442-1605) */
- Breakpoints: 1024px, 768px, 480px
- Mobile-first grid transformations
- Touch-friendly navigation hamburger menu
```

**EXPECTED OUTCOME**:
A markdown file structured like this:

```markdown
---
title: Appellation Lab
description: A single-page marketing website for a wine education platform company
client: Appellation Lab (Co-Founded)
image: /images/case-studys/appellationlab-hero.webp
imageSecondary: /images/case-studys/appellationlab-mobile.webp
publishDate: 2025-11-03
tags: [Web Design, Branding, UX Design]
color: burgundy
services: [Web Design, Branding, Logo Design, Content Strategy]
featured: true
projectFeatures: [Wine Industry Branding, Mobile-First Design, B2B Content Strategy, Platform Preview]
challenge: "Create a professional single-page website to launch Appellation Lab, a wine education platform company co-founded with Advanced Sommelier Kaleigh Brook. The site needed to establish brand identity, communicate value to wine industry professionals, and preview the underlying technology platform—all while serving as an efficient MVP to get the business launched."
caseStudyLink: https://appellationlab.com
goals:
 - Establish brand identity for wine industry audience
 - Communicate platform value to regional wine alliances
 - Create mobile-responsive design for wine tourism professionals
 - Preview technology capabilities and featured partnership
solution: "I designed and built a clean, single-page marketing site that establishes Appellation Lab's brand through a wine-inspired color palette (burgundy, sage, straw), elegant typography pairing (Cormorant Garamond + Lato), and straightforward B2B messaging. The site uses a mobile-first responsive approach and showcases the Walla Walla Valley Wine Alliance partnership to build credibility. As both co-founder and platform developer, I built the underlying wine education technology (Next.js 15, Strapi v5, Leaflet.js) that the site promotes—though the full platform case study is still in development."
keyFeatures:
  - title: Wine Industry Branding
    color: burgundy
    description: Custom color palette and typography system that conveys sophistication and terroir—burgundy primary, sage/straw accents, paired with elegant serif headings and clean sans-serif body text.
  - title: Mobile-First Responsive Design
    color: mint
    description: Fully responsive layout optimized for wine professionals browsing on mobile devices, with touch-friendly navigation and flexible grids that adapt from 480px to desktop.
  - title: B2B Content Strategy
    color: blue
    description: Clear, educational messaging focused on wine alliances and regional organizations rather than consumers, with partnership showcase (Walla Walla Valley) for industry credibility.
  - title: Platform Technology Preview
    color: coral
    description: Strategic preview of the underlying wine education platform capabilities (interactive AVA mapping, terroir storytelling, gamified learning) that I developed using Next.js 15 and Strapi v5.
results: "Launched Appellation Lab's online presence with a professional single-page MVP that establishes brand identity and communicates platform value to wine industry prospects."
resultsMetrics:
  - value: "MVP"
    label: Efficient single-page launch strategy to get business online quickly
    color: burgundy
  - value: "Mobile-First"
    label: Responsive design optimized for wine professionals on mobile devices
    color: blue
  - value: "Dual Role"
    label: Both designed the marketing site AND developed the underlying platform technology
    color: mint
# testimonial: Coming soon
# testimonialAuthor: TBD
# testimonialTitle: TBD
---
```

**ACCEPTANCE CRITERIA**:
- [ ] Markdown file follows exact frontmatter structure from reference case studies
- [ ] Tone is authentic and straightforward (matches Matt's portfolio voice)
- [ ] Highlights specific brand decisions (colors, typography, logo, content strategy)
- [ ] Emphasizes mobile-responsive design approach
- [ ] Elegantly acknowledges Matt's dual role (site designer + platform developer)
- [ ] Keeps platform development mention brief (1-2 sentences, note full case study coming)
- [ ] Uses actual technical details from the HTML/CSS files provided
- [ ] Results metrics are realistic and specific (not generic marketing claims)
- [ ] File is ready to drop into `/Users/whittypro/Sites/mattsWebSite/src/content/case-studies/`

**FILES TO CREATE/MODIFY**:
- `/Users/whittypro/Sites/mattsWebSite/src/content/case-studies/appellationlab.md` (new file)

**TESTING REQUIREMENTS**:
- Verify frontmatter structure matches reference case studies exactly
- Ensure color values match Appellation Lab brand colors
- Confirm tone consistency with Matt's existing case studies
- Check that all required frontmatter fields are populated
```

---

## Usage Instructions for This Prompt

### 1. **How to Use This Prompt**

Copy the entire prompt above and paste it into a new Claude Code agent session or any AI assistant. The prompt is completely self-contained and includes:

- Full context about Matt's dual role (site designer + platform developer)
- Specific brand details from the actual Appellation Lab website
- Code references from the HTML/CSS files
- Exact frontmatter structure to follow
- Clear constraints about tone and focus

### 2. **What the Agent Will Create**

The agent will generate a new markdown file:
- **Location**: `/Users/whittypro/Sites/mattsWebSite/src/content/case-studies/appellationlab.md`
- **Structure**: Matches existing case study format exactly
- **Content**: Highlights branding, logo, content strategy, mobile design
- **Special Element**: Elegantly mentions Matt's role as platform developer without making it the focus

### 3. **Key Considerations**

**Tone Guidance**:
- Authentic and straightforward (like Mountain View Pole Buildings case study)
- Avoid marketing hyperbole ("stunning," "revolutionary," etc.)
- Focus on actual decisions made and problems solved

**Dual Role Strategy**:
The prompt handles the tricky balance of showing Matt as:
1. **Primary focus**: Designer/developer of the single-page marketing site
2. **Secondary mention**: Platform developer (with note that full case study is coming)

This is addressed in the `solution` field with a sentence like:
> "As both co-founder and platform developer, I built the underlying wine education technology (Next.js 15, Strapi v5, Leaflet.js) that the site promotes—though the full platform case study is still in development."

### 4. **After Generation**

Once the agent creates the file, you'll need to:
1. Add actual screenshots to `/Users/whittypro/Sites/mattsWebSite/public/images/case-studys/`:
   - `appellationlab-hero.webp` (desktop screenshot)
   - `appellationlab-mobile.webp` (mobile screenshot)
2. Review the generated content for tone consistency
3. Verify frontmatter fields match your existing case studies
4. Test the case study in your Astro site locally

---

## Quality Checklist

Before using the generated case study, verify:

- [x] **Role is specific** - "Web designer and platform developer for wine education company"
- [x] **Context is complete** - Includes brand details, tech stack, business model
- [x] **Requirements are actionable** - Specific brand decisions to highlight
- [x] **Examples are concrete** - Actual color codes, typography choices, code references
- [x] **Constraints are clear** - Tone guidelines, dual role handling, MVP focus
- [x] **Success is measurable** - Acceptance criteria with specific checkboxes
- [x] **Files are specified** - Exact path for new markdown file

---

## Example Brand Decisions to Highlight

The prompt specifically calls out these design decisions from the Appellation Lab site:

1. **Color Palette**: Wine-inspired burgundy (#722F37), sage (#7D8B6C), straw (#CFB781), sky blue (#8BA5B5)
2. **Typography**: Cormorant Garamond (serif, elegant) + Lato (sans-serif, clean)
3. **Logo Design**: Simple, professional mark for wine industry
4. **Content Strategy**: B2B focused, educational over sales-y, partnership showcase for credibility
5. **Mobile-First**: Responsive grids, hamburger nav, touch-friendly interactions
6. **MVP Approach**: Single-page efficiency to launch quickly

---

## Advanced: Platform Case Study Teaser

The prompt includes a clever strategy for future-proofing:

**Current case study** (this prompt creates):
- Focus: Single-page marketing site design/branding
- Brief mention: "I also developed the platform technology"
- Note: "Full platform case study coming"

**Future case study** (not yet created):
- Focus: Full wine education platform (Next.js, Strapi, Leaflet.js)
- Deep dive: LMS features, mapping, authentication, certification system
- Reference back: "See the Appellation Lab marketing site case study for branding work"

This creates a natural progression and shows the full scope of Matt's work without cramming everything into one case study.
