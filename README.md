# 👩‍🎓 Akansha Rautela - PhD Portfolio

A professional, elegant online portfolio website designed specifically for PhD researchers and academics. Built with modern HTML5, CSS3, and vanilla JavaScript.

## 🎨 Design Features

### Color Scheme (Professional Academic)
- **Primary Color**: Navy Blue (`#1B3A6B`) - Trust, professionalism, and academia
- **Secondary Color**: Gold/Burgundy (`#B8860B`) - Elegance and distinction
- **Accent Color**: Gold (`#D4AF37`) - Highlights and emphasis
- **Background**: White and Light Gray (`#F8F9FA`) - Clarity and focus

This color palette is carefully chosen to reflect academic excellence and professional achievement, perfect for PhD holders.

### Sections Included
1. **Hero Section** - Professional introduction with profile image
2. **About Section** - Personal and research background
3. **Research Areas** - Key research focus areas with icons
4. **Publications** - Academic publications with links
5. **Education** - Timeline of academic qualifications
6. **Experience** - Professional and research experience
7. **Skills & Expertise** - Research methods and technical skills
8. **Awards & Recognition** - Honors, certifications, and fellowships
9. **Contact Section** - Multiple contact methods
10. **Social Links** - Links to professional networks

### Interactive Features
- ✨ Smooth scroll animations
- 📱 Fully responsive mobile design
- 🎯 Mobile hamburger menu
- ⬆️ Scroll-to-top button
- ⌨️ Keyboard shortcuts (Ctrl+H, Ctrl+A, Ctrl+C)
- 🎭 Hover animations and transitions
- 🔗 Smooth navigation with active link highlighting
- 📄 Print-friendly stylesheet

## 🚀 Getting Started

### File Structure
```
Akansha-portfolio/
├── index.html       # Main HTML file
├── styles.css       # Styling and layout
├── script.js        # Interactive functionality
└── README.md        # This file
```

### Quick Setup
1. Open `index.html` in your web browser
2. For live editing, use a local server (e.g., `python -m http.server` or VS Code Live Server)

## 📝 Customization Guide

### 1. **Personal Information**
Replace the placeholder text in `index.html`:
- Change "Akansha Rautela" with your name
- Update profile subtitle and description
- Replace "Your Research Field" with your actual PhD discipline

### 2. **Profile Image**
```html
<img src="https://via.placeholder.com/200" alt="Profile Picture">
```
Replace the placeholder URL with your actual profile image:
- Recommended size: 200x200 pixels
- Recommended format: JPG or PNG
- Recommended to use a professional headshot

### 3. **Research Areas**
Update the research cards in the "Research Areas" section:
```html
<div class="research-card">
    <i class="fas fa-microscope"></i>
    <h3>Your Research Area</h3>
    <p>Description of your research focus and methodologies.</p>
</div>
```

### 4. **Publications**
Add your publications in the "Publications" section:
```html
<div class="publication-item">
    <h3 class="publication-title">Your Paper Title</h3>
    <p class="publication-authors">Your Name, Co-authors (Year)</p>
    <p class="publication-venue"><em>Journal/Conference Name</em></p>
    <a href="your-paper-url" class="publication-link"><i class="fas fa-link"></i> View Paper</a>
</div>
```

### 5. **Education Timeline**
Update your education history:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>PhD in Computer Science</h3>
        <p class="university">University of Example, Country</p>
        <p class="duration">2020 - 2024</p>
        <p class="thesis">Thesis: Your Research Focus Title</p>
    </div>
</div>
```

### 6. **Professional Experience**
Update your experience entries:
```html
<div class="experience-item">
    <div class="experience-header">
        <h3>Position Title</h3>
        <span class="experience-period">Year - Present</span>
    </div>
    <p class="experience-organization">Organization Name</p>
    <p class="experience-description">
        Your responsibilities and key achievements...
    </p>
</div>
```

### 7. **Skills**
Update your skills categories:
```html
<div class="skill-category">
    <h3>Research Methods</h3>
    <div class="skill-tags">
        <span class="skill-tag">Your Skill 1</span>
        <span class="skill-tag">Your Skill 2</span>
    </div>
</div>
```

### 8. **Awards**
Add your awards and recognitions:
```html
<div class="award-item">
    <i class="fas fa-trophy"></i>
    <h4>Award Name</h4>
    <p>Awarding Organization - Year</p>
</div>
```

### 9. **Contact Information**
Update contact details:
```html
<a href="mailto:your.email@example.com" class="contact-link">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</a>
```

### 10. **Social Links**
Update social media links:
```html
<a href="https://linkedin.com/in/your-profile" class="social-icon" title="LinkedIn">
    <i class="fab fa-linkedin"></i>
</a>
```

## 🎨 Changing Colors

If you want to modify the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1B3A6B;        /* Navy Blue */
    --secondary-color: #B8860B;      /* Gold/Burgundy */
    --accent-color: #D4AF37;         /* Gold */
    --dark-text: #2C3E50;
    --light-text: #ECF0F1;
    --light-bg: #F8F9FA;
    --white: #FFFFFF;
}
```

## 🔗 Icon Library

The portfolio uses **Font Awesome 6.4.0** icons. Common icons used:
- `fa-microscope` - Research
- `fa-flask` - Experiments
- `fa-chart-line` - Analysis
- `fa-trophy` - Awards
- `fa-star` - Recognition
- `fa-medal` - Achievements
- `fa-envelope` - Email
- `fa-phone` - Phone
- `fa-map-marker-alt` - Location
- `fa-linkedin` - LinkedIn
- `fa-github` - GitHub
- `fa-twitter` - Twitter

Browse more at: https://fontawesome.com/icons

## ⌨️ Keyboard Shortcuts

- **Ctrl + H** - Scroll to Home (Hero section)
- **Ctrl + A** - Scroll to About section
- **Ctrl + C** - Scroll to Contact section

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1200px and above)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small Mobile (below 480px)

## 🖨️ Print Functionality

The portfolio is print-friendly. Simply press `Ctrl + P` to:
- Print to PDF
- Print on paper
- Navbar is automatically hidden in print view

## 🚀 Deployment Options

### Option 1: GitHub Pages
1. Push your files to a GitHub repository
2. Go to Settings > Pages
3. Select "main" branch as source
4. Your site will be live at: `https://yourusername.github.io/repo-name`

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on each push

### Option 3: Vercel
1. Import your GitHub repository
2. Deploy with one click

### Option 4: Any Web Hosting
Upload the three files (index.html, styles.css, script.js) to your hosting provider.

## 📊 SEO & Meta Tags

Update the meta tags in `index.html` for better SEO:
```html
<meta name="description" content="Your professional PhD portfolio">
<meta name="keywords" content="PhD, researcher, academic, your-name">
<meta name="author" content="Your Name">
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This portfolio template is free to use for personal and professional purposes.

## 💡 Tips for Best Results

1. **Professional Photo**: Use a high-quality headshot (white or professional background)
2. **Content Accuracy**: Keep information current and accurate
3. **Link Verification**: Test all external links (papers, social profiles)
4. **Mobile Testing**: Preview on mobile devices before publishing
5. **Consistency**: Maintain consistent formatting and tone throughout
6. **Regular Updates**: Keep publications and experience sections updated

## 🆘 Troubleshooting

### Images not showing?
- Check the image URL is correct
- Ensure the image file is accessible
- Use absolute URLs for external images

### Styles not applying?
- Clear browser cache (Ctrl + Shift + Delete)
- Ensure CSS file is linked correctly in HTML
- Check for CSS errors in browser console

### Links not working?
- Verify URLs are complete (include https://)
- Test links in a new tab
- Check for typos in href attributes

### Mobile menu not showing?
- Ensure JavaScript is enabled
- Check browser console for errors
- Try a different browser

## 📧 Support

For issues or questions, refer to the HTML comments in each section for guidance.

---

**Happy Portfolio Building!** 🎓✨

Last Updated: 2024
