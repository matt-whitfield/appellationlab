# AI Agent Prompt: Appellation Lab Alternate Layout Implementation

### 🎯 **AI Agent Prompt**

```
You are an expert web designer and front-end developer specializing in brand storytelling, visual hierarchy, and conversion-optimized landing pages for B2B service companies.

**CONTEXT**:
Appellation Lab is a wine education platform company that builds custom digital storytelling platforms for wine regions, AVAs, and wine alliances. The current single-page brochure site (index.html) has solid technical execution but suffers from weak visual storytelling and feature-first (rather than aspiration-first) messaging. The site reads like a generic SaaS product demo instead of a compelling narrative about transforming wine regions into digital destinations.

A brand audit has identified three critical priority improvements:
1. Replace tech-focused hero with wine region landscape imagery
2. Rewrite hero copy to lead with aspiration, not features
3. Expand the Walla Walla partnership section into a visual case study

**CURRENT FILE(S)**:
- `/Users/whittypro/Sites/wine-education-platform-brochure/appellationlab/index.html` (main single-page brochure site)
- `/Users/whittypro/Sites/wine-education-platform-brochure/appellationlab/styles.css` (styling)
- `/Users/whittypro/Sites/wine-education-platform-brochure/appellationlab/images/tim-mossholder-vineyards-lowres.jpg` (new hero image - vineyard landscape at golden hour)
- `/Users/whittypro/Sites/wine-education-platform-brochure/appellationlab/images/hero-desktop.webp` (current hero image - platform screenshot)

**TASK**:
Create an alternate layout version of the Appellation Lab brochure site that transforms the visual storytelling by implementing wine-centric imagery, aspiration-first hero copy, and an expanded Walla Walla case study section.

**REQUIREMENTS**:

1. **Replace Hero Section** (lines 66-86):
   - Replace current platform screenshot (`hero-desktop.webp`) with wine region landscape (`tim-mossholder-vineyards-lowres.jpg`)
   - Implement **Option D: Heritage-Forward** hero copy:
     - H1: "Every Wine Region Has a Story Written in Soil, Time, and Craft"
     - Subtitle: "We help you tell it. Custom digital platforms that transform your region's geology, heritage, and winemaking into interactive experiences that educate consumers, empower trade partners, and elevate your regional identity."
   - Maintain existing hero badge: "Co-Founded by Advanced Sommelier Kaleigh Brook"
   - Consider split-layout: Left side = full vineyard image, Right side = text overlay with subtle transparency

2. **Expand Walla Walla Partnership Section** (lines 122-143):
   - Transform from simple logo + 2 paragraphs into comprehensive visual case study
   - Move this section to immediately **after** the "Platform Overview" section (before line 198) to improve narrative flow
   - Add "Featured Partnership" badge
   - Change section header to: "Transforming Walla Walla Valley into a Digital Wine Destination"
   - Add subtitle: "Building a comprehensive regional storytelling platform for one of America's premier wine regions"
   - Include key metrics display:
     - 135+ Wineries Represented
     - 6 Districts Featured
     - 2 States Connected
     - Launch Timeline: Spring 2025
   - Add placeholder for testimonial quote from Walla Walla Valley Wine Alliance Executive Director (with headshot placeholder)
   - Include before/after visual journey component showing transformation from static website to interactive platform
   - Add secondary CTA: "Explore Platform Features" button linking to #platform

3. **Visual Hierarchy Improvements**:
   - Ensure wine region imagery takes visual precedence over platform screenshots
   - Add subtle texture overlays or gradient overlays to maintain text readability on hero image
   - Maintain existing color palette (burgundy #722F37, sage #7D8B6C, straw #CFB781)
   - Preserve responsive design patterns from original

4. **Content Structure Reorganization**:
   - Adjust section flow to: Hero → Value Proposition → **Walla Walla Case Study** (moved here) → Platform Overview → Admin & Analytics → Platform Details → CTA
   - This creates story arc: "Here's what we do → Here's why it matters → Here's proof it works → Here's how it works → Let's talk"

5. **Preserve Existing Functionality**:
   - Maintain all navigation links and anchor IDs
   - Keep hamburger menu functionality intact
   - Preserve modal demo request form (lines 363-418)
   - Maintain Lucide icon integration
   - Keep all existing scripts (script.js, Lucide initialization)

**BRAND & MESSAGING CONTEXT**:

- **Target Audience**: Wine region marketing directors, AVA alliance leaders, wine industry executives
- **Emotional Positioning**: The site should evoke wine country—rich, layered, evocative—not just describe software features
- **Visual Identity**: Sophisticated, professional, rooted in terroir and heritage
- **Tone Shift**: From "We built this technology" to "We help you tell your region's story"

**CONSTRAINTS**:

- Do NOT modify `styles.css`, `script.js`, or any existing JavaScript functionality
- Do NOT change navigation structure or existing anchor link IDs (#platform, #about, #contact)
- Do NOT alter footer content or structure (lines 329-360)
- Do NOT modify SEO meta tags, Open Graph tags, or favicon references (lines 1-41)
- Do NOT remove existing platform screenshots—they should be complemented by wine imagery, not replaced entirely
- Do NOT add any new external dependencies or libraries
- Maintain mobile responsiveness using existing CSS classes and grid patterns
- Keep file size reasonable—optimize for web without sacrificing image quality excessively

**CODE REFERENCE - Current Hero Section**:
```html
<!-- Hero Section (lines 66-86) -->
<section class="hero">
    <div class="hero-content">
        <div class="hero-badge">
            Co-Founded by Advanced Sommelier Kaleigh Brook
        </div>
        <h1 class="hero-title">
            Transform Wine Regions Into
            <span class="gradient-text">Compelling Digital Destinations</span>
        </h1>
        <p class="hero-subtitle">
            Custom wine education platforms designed to integrate seamlessly with your existing marketing ecosystem.
            We build tailored digital experiences that elevate regional identity through interactive education,
            immersive storytelling, and professional content—crafted to complement your current outreach and analytics efforts.
        </p>
    </div>
    <div class="hero-visual">
        <div class="hero-image">
            <img src="images/hero-desktop.webp" alt="Appellation Lab Platform Interface" style="width: 100%; border-radius: 8px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);">
        </div>
    </div>
</section>
```

**CODE REFERENCE - Current Partnership Section**:
```html
<!-- Partnership Section (lines 122-143) -->
<section class="partnership">
    <div class="container">
        <div class="partnership-container">
            <p class="partnership-label">Partnering With Leading Wine Regions</p>

            <div class="partnership-logo-container">
                <div class="partnership-logo">
                    <img src="images/partner-logos/WWVW Color Logo.png" alt="Walla Walla Valley Wine Alliance">
                </div>
            </div>

            <div class="partnership-content">
                <p class="partnership-description">
                    Building a custom regional storytelling platform for the <strong>Walla Walla Valley Wine Alliance</strong>—representing over 135 wineries across 6 distinct wine districts spanning Washington and Oregon.
                </p>
                <p class="partnership-details">
                    Our platform will integrate with their existing marketing efforts to showcase the Valley's exceptional terroir, diverse microclimates, and collaborative wine community through interactive education and immersive digital experiences.
                </p>
            </div>
        </div>
    </div>
</section>
```

**EXPECTED OUTCOME**:

### Hero Section - Revised Structure:
```html
<section class="hero">
    <div class="hero-content">
        <div class="hero-badge">
            Co-Founded by Advanced Sommelier Kaleigh Brook
        </div>
        <h1 class="hero-title">
            Every Wine Region Has a Story
            <span class="gradient-text">Written in Soil, Time, and Craft</span>
        </h1>
        <p class="hero-subtitle">
            We help you tell it. Custom digital platforms that transform your region's geology, heritage, and winemaking into interactive experiences that educate consumers, empower trade partners, and elevate your regional identity.
        </p>
    </div>
    <div class="hero-visual">
        <div class="hero-image">
            <img src="images/tim-mossholder-vineyards-lowres.jpg" alt="Wine Region Vineyard Landscape at Golden Hour" style="width: 100%; border-radius: 8px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);">
        </div>
    </div>
</section>
```

### Walla Walla Case Study - Expanded Structure:
```html
<!-- Walla Walla Case Study Section (moved to after Platform Overview) -->
<section class="case-study" style="background: var(--light-gray); padding: 80px 0;">
    <div class="container">
        <div class="case-study-header">
            <div class="case-study-badge">Featured Partnership</div>
            <h2>Transforming Walla Walla Valley into a Digital Wine Destination</h2>
            <p class="case-study-subtitle">Building a comprehensive regional storytelling platform for one of America's premier wine regions</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 60px;">
            <div>
                <div class="partnership-logo" style="margin-bottom: 24px;">
                    <img src="images/partner-logos/WWVW Color Logo.png" alt="Walla Walla Valley Wine Alliance" style="width: 200px;">
                </div>
                <p style="color: var(--dark-gray); line-height: 1.7; margin-bottom: 16px;">
                    [Partnership overview copy describing the challenge and solution]
                </p>
            </div>
            <div>
                <!-- Key metrics display -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 24px;">
                    <div style="text-align: center; padding: 20px; background: white; border-radius: 8px;">
                        <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary);">135+</div>
                        <div style="color: var(--medium-gray); font-size: 0.875rem;">Wineries</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: white; border-radius: 8px;">
                        <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary);">6</div>
                        <div style="color: var(--medium-gray); font-size: 0.875rem;">Districts</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: white; border-radius: 8px;">
                        <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary);">2</div>
                        <div style="color: var(--medium-gray); font-size: 0.875rem;">States</div>
                    </div>
                </div>
                <div style="background: var(--primary); color: white; padding: 12px 20px; border-radius: 6px; text-align: center;">
                    <strong>Launch Timeline:</strong> Spring 2025
                </div>
            </div>
        </div>

        <!-- Testimonial placeholder -->
        <div style="background: white; padding: 40px; border-radius: 8px; border-left: 4px solid var(--primary); margin-bottom: 40px;">
            <p style="font-size: 1.125rem; line-height: 1.8; color: var(--dark-gray); font-style: italic; margin-bottom: 20px;">
                "[Testimonial quote from Walla Walla Valley Wine Alliance Executive Director about the platform's impact on regional storytelling and education]"
            </p>
            <div style="display: flex; align-items: center; gap: 16px;">
                <div style="width: 60px; height: 60px; background: var(--light-gray); border-radius: 50%;"></div>
                <div>
                    <div style="font-weight: 600; color: var(--secondary);">[Name], Executive Director</div>
                    <div style="color: var(--medium-gray); font-size: 0.875rem;">Walla Walla Valley Wine Alliance</div>
                </div>
            </div>
        </div>

        <!-- Before/After Visual Journey -->
        <div>
            <h3 style="text-align: center; color: var(--secondary); margin-bottom: 40px;">Visual Journey: Static to Interactive</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
                <div style="background: white; padding: 30px; border-radius: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 16px;">Before Platform</h4>
                    <ul style="color: var(--dark-gray); line-height: 1.8;">
                        <li>Static website with basic winery directory</li>
                        <li>Limited storytelling about regional terroir</li>
                        <li>No interactive education tools</li>
                        <li>Difficult to convey district distinctions</li>
                    </ul>
                </div>
                <div style="background: white; padding: 30px; border-radius: 8px; border: 2px solid var(--primary);">
                    <h4 style="color: var(--primary); margin-bottom: 16px;">After Platform Launch</h4>
                    <ul style="color: var(--dark-gray); line-height: 1.8;">
                        <li>Interactive district exploration with clickable maps</li>
                        <li>Multimedia terroir and geology education</li>
                        <li>Gamified certification: "Certified Walla Walla Wine Explorer"</li>
                        <li>Integrated analytics showing engagement across audiences</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Secondary CTA -->
        <div style="text-align: center; margin-top: 60px;">
            <a href="#platform" class="btn-primary" style="display: inline-block;">Explore Platform Features</a>
            <p style="margin-top: 16px; color: var(--medium-gray);">Custom platforms designed for wine regions, AVAs, and regional alliances</p>
        </div>
    </div>
</section>
```

**ACCEPTANCE CRITERIA**:

- [ ] Hero section uses `tim-mossholder-vineyards-lowres.jpg` as primary visual
- [ ] Hero copy follows "Option D: Heritage-Forward" messaging exactly
- [ ] Hero badge "Co-Founded by Advanced Sommelier Kaleigh Brook" is preserved
- [ ] Walla Walla section is moved to appear after Platform Overview section (after line 196)
- [ ] Walla Walla section includes all required elements: badge, new header, metrics grid, testimonial placeholder, before/after comparison, secondary CTA
- [ ] Section flow follows: Hero → Value Proposition → Platform Overview → Walla Walla Case Study → Admin & Analytics → Platform Details → CTA
- [ ] All existing navigation anchor links still function correctly (#platform, #about, #contact)
- [ ] All existing CSS classes are reused (no new stylesheet modifications)
- [ ] Mobile responsiveness is maintained using existing grid patterns
- [ ] No existing platform screenshots are removed (only complemented with wine imagery)
- [ ] Modal form, footer, and all JavaScript functionality remain unchanged
- [ ] File validates as proper HTML5
- [ ] All image paths are correct and relative
- [ ] Brand color palette (burgundy, sage, straw) is consistently applied

**FILES TO CREATE/MODIFY**:

- `/Users/whittypro/Sites/wine-education-platform-brochure/appellationlab/index.html` (modify existing - create alternate layout version)
- `/Users/whittypro/Sites/wine-education-platform-brochure/appellationlab/CHANGELOG_ALTERNATE_LAYOUT.md` (new - document changes made)

**TESTING REQUIREMENTS**:

- Visual inspection: Hero image displays properly at various viewport sizes
- Navigation test: All anchor links (#platform, #about, #contact) scroll to correct sections
- Responsive test: Layout adapts properly on mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- Content hierarchy: Story arc flows logically from aspiration → proof → details → action
- Brand consistency: Wine region storytelling feel maintained throughout
- Performance: Page load time remains under 3 seconds on 3G connection

**DELIVERABLES**:

1. Modified `index.html` with all three priority improvements implemented
2. `CHANGELOG_ALTERNATE_LAYOUT.md` documenting:
   - Summary of changes made
   - Line numbers of major modifications
   - Rationale for layout decisions
   - Any deviations from the prompt requirements with justification
   - Suggestions for future improvements

**ADDITIONAL NOTES**:

- The testimonial quote is a placeholder—use bracket notation `[testimonial text here]` to indicate where client will provide actual quote
- The headshot placeholder can be a gray circle div—client will provide actual photo later
- If you identify any opportunities to enhance the wine region storytelling beyond these three priorities without breaking constraints, note them in the changelog for future consideration
- Maintain the existing professional, sophisticated tone throughout all new copy
```

---

## Implementation Notes

This prompt is designed to be used on the **alternate-layout-test** branch. The agent will create a revised version of the index.html file that addresses the three critical brand audit priorities while maintaining all existing functionality.

The expected outcome is a brochure site that:
1. Leads with wine region imagery and aspiration-first messaging
2. Proves credibility through an expanded Walla Walla case study
3. Maintains technical professionalism while adding emotional resonance
4. Creates a clear story arc from "why it matters" to "how it works" to "let's talk"
