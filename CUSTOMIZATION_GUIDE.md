# Akansha Rautela - Portfolio Customization Guide

## ✅ Completed Setup

Your portfolio has been successfully populated with:
- **Personal Information**: Name, title, and professional summary
- **Research Interests**: Optimal Control, Multi-Agent Systems, Distributed Control
- **Publications**: 7 publications including journals, conferences, and presentations
- **Education Timeline**: PhD, M.Tech, B.Tech with advisors and thesis titles
- **Professional Experience**: Research Assistant, Teaching Assistant, and Internship roles
- **Technical Skills**: Programming languages, research methods, documentation tools
- **Awards & Recognition**: 6 major awards and scholarships
- **Professional Activities**: Peer review roles and workshops attended
- **Advisors & Referees**: Contact information for all advisors

## 🎨 Visual Customization

### Colors
The portfolio uses professional academic colors:
- **Primary**: Navy Blue (#1B3A6B) - Trust and professionalism
- **Secondary**: Gold (#B8860B) - Academic distinction
- **Accent**: Gold (#D4AF37) - Highlights

To change colors, edit in `styles.css`:
```css
:root {
    --primary-color: #1B3A6B;
    --secondary-color: #B8860B;
    --accent-color: #D4AF37;
}
```

### Profile Image
Replace the placeholder image in `index.html` (line 48):
```html
<img src="YOUR_IMAGE_URL" alt="Profile Picture">
```

Recommended: 200x200px professional headshot

## 📝 Content Updates

### Update Your Information

#### 1. Logo Text (Navigation)
- Line 16: `<span class="logo-text">Akansha</span>`

#### 2. Social Media Links
- Lines 541-545: Replace `#` with your actual URLs:
  - LinkedIn
  - ResearchGate
  - ORCID
  - Google Scholar

#### 3. Download CV Button
- Line 47: Replace `href="#"` with link to your CV PDF

## 📚 Adding More Content

### Adding Publications
Copy this template in the Publications section:
```html
<div class="publication-item">
    <h3 class="publication-title">Your Paper Title</h3>
    <p class="publication-authors">Your Name, Co-authors (Year)</p>
    <p class="publication-venue"><em>Journal/Conference Name</em></p>
    <a href="DOI_OR_LINK" class="publication-link"><i class="fas fa-link"></i> DOI</a>
</div>
```

### Adding Talks & Presentations
You can add a new section after Publications. Copy the Publications section structure and rename it to "Talks" or "Presentations".

### Adding Collaborators
Add more advisor cards in the Advisors section by copying the advisor-card div.

## 🔗 Important Links to Update

Current placeholders that need your links:
1. **CV Download** - Add your CV PDF link
2. **Social Media** - Add your professional profiles:
   - LinkedIn
   - ResearchGate
   - ORCID
   - Google Scholar

## 🚀 Deployment Steps

### Option 1: GitHub Pages (Recommended)
1. Create a GitHub repository named `akansha-portfolio` (or similar)
2. Push these three files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Go to Settings > Pages
4. Select "main" branch as source
5. Your site will be live at: `https://yourusername.github.io/akansha-portfolio`

### Option 2: Upload to Your Own Server
Simply upload the three files to your web server.

## 📱 Mobile Testing
The portfolio is fully responsive. Test on:
- Desktop (1200px+)
- Tablet (768px)
- Mobile (480px)

## ✨ Features Included

### Interactive Features
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ Scroll animations
- ✅ Scroll-to-top button
- ✅ Active link highlighting
- ✅ Hover animations

### Keyboard Shortcuts
- **Ctrl + H**: Home/Hero Section
- **Ctrl + A**: About Section
- **Ctrl + C**: Contact Section

### Print Friendly
Press `Ctrl + P` to print or save as PDF

## 🔧 Technical Details

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Dependencies
- Font Awesome 6.4.0 (CDN) - Icons
- No JavaScript frameworks required
- Pure vanilla JavaScript

## 📊 SEO Optimization

Update meta tags in `index.html` (head section):
```html
<meta name="description" content="PhD Scholar in Electrical Engineering specialized in Optimal Control and Multi-Agent Systems at IIT Delhi">
<meta name="keywords" content="PhD, Electrical Engineering, Control Theory, Multi-Agent Systems, IIT Delhi">
<meta name="author" content="Akansha Rautela">
```

## 🎯 Next Steps

1. **Add Profile Photo**: Replace placeholder image with your photo
2. **Add Social Links**: Update social media profile URLs
3. **Add CV Link**: Link to your CV PDF
4. **Deploy**: Choose hosting option and deploy
5. **Share**: Share your portfolio link with advisors, peers, and potential collaborators

## 📧 Quick Edits Checklist

- [ ] Update profile image
- [ ] Add social media links
- [ ] Add CV download link
- [ ] Verify all email addresses are correct
- [ ] Check phone numbers (if applicable)
- [ ] Review all publication links
- [ ] Test responsive design on mobile
- [ ] Deploy to hosting

## 🆘 Common Issues

### Images not loading?
- Ensure image URL is correct
- Use absolute URLs (with https://)
- Image should be publicly accessible

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors
- Ensure CSS file is linked correctly

### Links not working?
- Verify URLs include https://
- Check for typos in href attributes
- Test links in a new tab

## 📞 Contact Information

All contact information has been filled in with:
- **Professional Email**: Akansha.Rautela@ee.iitd.ac.in
- **Personal Email**: akansharautela.16@gmail.com
- **Location**: IIT Delhi, Department of Electrical Engineering

## 🎓 Academic Integrity

This portfolio showcases your genuine academic achievements. Always ensure:
- Accurate publication information
- Correct advisor/referee details
- Up-to-date contact information
- Honest representation of your work

## 📈 Keeping It Updated

Update your portfolio:
- When new publications are accepted
- When awards/recognitions are received
- When new conferences are attended
- Quarterly or as needed

---

**Your portfolio is ready to showcase your PhD research!** 🎓✨

For more information, refer to the main README.md file.
