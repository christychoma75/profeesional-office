# Professional Office Website

A modern, responsive, and professional website for an office services business. Built with HTML5, CSS3, and Vanilla JavaScript.

## Features

### 📄 Pages
- **Home** - Hero section with call-to-action, features overview, and service previews
- **About** - Company story, mission, values, team members, and impact statistics
- **Services** - Detailed service offerings with pricing packages
- **Contact** - Contact form, business information, FAQ, and map placeholder

### ✨ Key Features
- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern Navigation** - Sticky navbar with mobile hamburger menu
- **Interactive Contact Form** - Form validation and submission handling
- **Smooth Animations** - Scroll reveal animations and counter animations
- **Professional Styling** - Clean and modern design with consistent color scheme
- **SEO Optimized** - Meta tags and semantic HTML
- **Accessibility** - Keyboard navigation and ARIA labels
- **Performance Optimized** - Lazy loading support and minimal dependencies

### 🎨 Design Elements
- Professional color scheme (Navy Blue, Red Accent, Light Blue)
- Card-based layouts for better information organization
- Hover effects and interactive elements
- Grid-based responsive layouts
- Clear typography hierarchy
- Professional imagery placeholders with emojis

## File Structure

```
professional-office/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Getting Started

### Prerequisites
No build tools or dependencies required! This is pure HTML, CSS, and JavaScript.

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Or serve using a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using Live Server in VS Code
# Install the Live Server extension and right-click index.html → Open with Live Server
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Company Information
Update the following files with your company details:

#### Footer & Contact Info
- Edit company name, address, phone, and email in `contact.html`, `about.html`, and the footer sections
- Update social media links in the footer

#### Services
- Modify service descriptions in `services.html`
- Update pricing packages and features
- Add/remove service cards as needed

#### Team Members
- Edit team member information in `about.html`
- Change avatars (currently using emoji placeholders)

### Colors & Styling
Customize the color scheme by editing CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1b3b6f;      /* Navy Blue */
    --secondary-color: #e74c3c;    /* Red */
    --accent-color: #3498db;       /* Light Blue */
    --text-color: #333;
    --light-text: #666;
    --background-color: #f8f9fa;
    --border-color: #e0e0e0;
    --white: #ffffff;
}
```

### Fonts
Change the font family in `styles.css`:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

## Features in Detail

### Navigation
- Sticky navbar that stays at the top while scrolling
- Mobile-responsive hamburger menu
- Active page indicator
- Smooth scrolling

### Hero Section
- Eye-catching gradient background
- Clear value proposition
- Call-to-action buttons

### Features Section
- Four key features with icons
- Card-based layout with hover effects
- Responsive grid

### Services
- Detailed service descriptions
- Three pricing tiers (Basic, Professional, Enterprise)
- Service benefits listed with checkmarks
- Service icons for quick identification

### About Section
- Company story and mission
- Core values presentation
- Team member profiles with roles
- Impact statistics with animated counters

### Contact
- Comprehensive contact form with validation
- Multiple contact methods (phone, email)
- Business hours display
- Frequently asked questions
- Map placeholder (ready for actual map integration)

### Footer
- Quick links
- Contact information
- Social media links
- Copyright information

## JavaScript Functionality

### Mobile Menu
- Click hamburger icon to toggle mobile menu
- Auto-close menu when a link is clicked
- Animated hamburger icon

### Form Validation
- Validates required fields
- Email format validation
- Privacy policy checkbox requirement
- Real-time validation feedback

### Animations
- Scroll reveal animations for cards
- Counter animations for statistics
- Smooth transitions throughout
- Hover effects on interactive elements

### Accessibility
- Keyboard navigation support
- Escape key to close mobile menu
- Focus states on interactive elements
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Integration Options

### Contact Form Integration
Currently, the form shows a success message. To implement actual form submission:

1. **Using Formspree:**
   - Create account at formspree.io
   - Replace `contactForm.addEventListener` with form attribute: `action="https://formspree.io/f/YOUR_FORM_ID"`

2. **Using Web3Forms:**
   - Sign up at web3forms.com
   - Add hidden input with your access key

3. **Using Your Backend:**
   - Update the form submission handler in `script.js`
   - Send data to your backend API endpoint

### Map Integration
Replace the map placeholder in `contact.html` with:

```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy">
</iframe>
```

## Performance Tips

1. **Replace Emoji Avatars**: Use actual team member photos
2. **Optimize Images**: Compress images before adding
3. **Add SEO**: Update meta descriptions and keywords
4. **Analytics**: Add Google Analytics or similar
5. **CDN**: Serve files from a CDN for faster loading
6. **Caching**: Implement browser caching headers

## SEO Optimization

- Meta description tags are included
- Semantic HTML structure
- Heading hierarchy is proper
- Alt text ready for images
- Mobile-responsive design (mobile-first indexing)

### To Further Optimize:
1. Add schema.org structured data
2. Write compelling meta descriptions
3. Create a sitemap.xml
4. Add robots.txt file
5. Submit to Google Search Console

## License

This professional office website is provided as-is for your use. Feel free to modify and customize it for your business.

## Support

For customization or issues:
1. Check the code comments for guidance
2. Review the CSS variables for color/styling changes
3. Test in different browsers
4. Use browser developer tools to debug

## Credit

Built with vanilla HTML5, CSS3, and JavaScript - no frameworks or libraries required!

---

**Last Updated:** February 2026

**Version:** 1.0
