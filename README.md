# Personal Portfolio Website

## 📋 Project Overview
This is a personal portfolio website built as part of a Junior Frontend Developer assessment for a Rwandan tech company. The portfolio demonstrates technical proficiency in HTML5, CSS3, and JavaScript while showcasing real academic projects and problem-solving abilities.

## 🎯 Project Purpose
- Demonstrate technical foundation in web development
- Showcase growth as a developer
- Present real academic projects
- Display problem-solving ability using JavaScript
- Evaluate employability and UI engineering skills

## 🛠️ Technologies Used
- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with Flexbox, Grid, and responsive design
- **JavaScript (ES6)** - DOM manipulation, form validation, and calculator logic
- **Git & GitHub** - Version control and project hosting

## 📁 Project Structure
```
portfolio/
│
├── index.html              # Main HTML file with all sections
├── css/
│   └── styles.css          # All styles including responsive design
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── images/            # Profile and project images
│   └── cv/                # CV PDF file
└── README.md              # Project documentation
```

## ✨ Features Implemented

### Required Sections
1. **Hero Section (Landing)**
   - Profile picture with fallback
   - Name and professional role
   - Tagline and call-to-action button

2. **About Me**
   - Personal background
   - Academic program and year
   - Career goals
   - Background information

3. **Technical Skills**
   - Visual skill cards with icons
   - Animated progress bars
   - Skill level indicators
   - Responsive grid layout

4. **Projects Section**
   - 3+ real projects with:
     - Project title and description
     - Problem solved
     - Technologies used (tags)
     - Project screenshots with fallback
     - GitHub/Demo links

5. **Interactive GPA Calculator**
   - Student GPA Calculator implementation
   - Dynamic course addition/removal
   - Input validation (0-100 marks)
   - GPA calculation with classification
   - Grading system reference table
   - Reset functionality

6. **Downloadable CV Section**
   - HTML CV preview
   - Download button for PDF
   - Structured CV information

7. **Contact Section**
   - Contact information (Email, Phone, LinkedIn, GitHub)
   - Styled contact form with validation
   - Real-time field validation
   - Success message display

### JavaScript Functionality
✅ **Form Validation** - Contact form with real-time validation  
✅ **DOM Manipulation** - Dynamic course addition/removal in calculator  
✅ **Calculator Logic** - GPA calculation with grade point conversion  
✅ **Additional Features**:
   - Dark/Light theme toggle with localStorage
   - Dynamic year in footer
   - Mobile menu toggle animation
   - Smooth scroll navigation
   - Skill bar animations on scroll
   - Fade-in animations

### Responsive Design
- **Mobile** (< 480px) - Single column, optimized spacing
- **Tablet** (481px - 768px) - Adjusted grid layouts
- **Desktop** (> 768px) - Full multi-column layouts
- Fluid typography and spacing
- Mobile-first approach
- Hamburger menu for mobile navigation

### Design Principles Applied
✅ Consistency - Unified color scheme and spacing  
✅ Spacing - CSS custom properties for consistent gaps  
✅ Alignment - Flexbox and Grid for proper layout  
✅ Typography - Clear hierarchy and readable fonts  
✅ Color Discipline - Defined color palette with dark/light themes

## 🚀 How to Run the Project

### Option 1: Direct File Opening
1. Clone or download the repository
2. Navigate to the project folder
3. Open `index.html` in a web browser

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code Live Server
# Right-click on index.html and select "Open with Live Server"
```

Then open `http://localhost:8000` in your browser.

## 📝 Customization Guide

### Update Personal Information
1. **Profile Picture**: Replace `assets/images/profile.jpg` with your photo
2. **Name & Details**: Edit the Hero section in `index.html`
3. **Projects**: Update project cards with your real projects
4. **Contact Info**: Update email, phone, LinkedIn, GitHub links
5. **CV**: Replace `assets/cv/CV_Grace_Ishimwe.pdf` with your CV

### Update Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #4a90e2;    /* Main brand color */
    --secondary-color: #667eea;   /* Accent color */
    --accent-color: #51cf66;      /* Highlight color */
}
```

## 🤖 AI Usage Declaration

### What I Asked AI
- **Debugging Help**: 
  - CSS Flexbox alignment issues
  - JavaScript event listener troubleshooting
  - Responsive design breakpoint suggestions

- **Concept Explanation**:
  - Understanding CSS Grid vs Flexbox best practices
  - JavaScript IntersectionObserver API usage
  - localStorage implementation for theme persistence

- **Git Commands**:
  - Basic Git workflow (add, commit, push)
  - Creating and managing branches
  - Resolving merge conflicts

### What I Implemented Myself
- ✅ Complete HTML structure and semantic markup
- ✅ All CSS styling and responsive design
- ✅ GPA Calculator logic and validation
- ✅ Contact form validation system
- ✅ Theme toggle functionality
- ✅ Mobile navigation menu
- ✅ All DOM manipulation code
- ✅ Project structure and organization

### What I Modified from AI Suggestions
- 📝 Adapted generic CSS reset to match project needs
- 📝 Customized color scheme for personal branding
- 📝 Modified calculator grading system for Rwandan standards
- 📝 Enhanced form validation with custom error messages
- 📝 Adjusted responsive breakpoints based on testing

### My Original Contributions
- 🎨 Custom design and layout choices
- 🎨 Project content and descriptions
- 🎨 Skills selection and progress percentages
- 🎨 Color palette and theme design
- 🎨 Animation timing and transitions

## 📚 Learning Outcomes

Through this project, I have demonstrated proficiency in:
- Semantic HTML5 structure and accessibility
- Advanced CSS layout techniques (Flexbox, Grid, Box Model)
- Responsive design with media queries
- JavaScript DOM manipulation and event handling
- Form validation and user input processing
- Git version control workflow
- Project organization and documentation

## 🔧 Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Testing
Tested on:
- Desktop: 1920x1080, 1366x768
- Tablet: iPad (768x1024)
- Mobile: iPhone 12 (390x844), Samsung Galaxy S21 (360x800)

## 🐛 Known Issues
- CV download requires actual PDF file in `assets/cv/` folder
- Project images need to be added to `assets/images/` folder
- Contact form doesn't submit to backend (frontend only)

## 📞 Contact Information
- **Name**: Grace Ishimwe
- **Email**: grace.ishimwe@example.com
- **Phone**: +250 788 123 456
- **LinkedIn**: [linkedin.com/in/graceishimwe](https://linkedin.com/in/graceishimwe)
- **GitHub**: [github.com/graceishimwe](https://github.com/graceishimwe)

## 📄 License
This project is created for educational purposes as part of a frontend development assessment.

## 🙏 Acknowledgments
- Built following industry best practices
- Inspired by modern portfolio designs
- Developed for Rwandan tech company assessment

---

**Date Created**: February 2026  
**Last Updated**: February 2026  
**Version**: 1.0.0

---

### 📋 Assignment Checklist

- [x] Proper project structure (HTML, CSS, JS, assets folders)
- [x] Hero section with profile and CTA
- [x] About Me section with background and goals
- [x] Technical Skills with visual layout
- [x] 3+ Projects with complete information
- [x] Interactive GPA Calculator with validation
- [x] CV Section with download option
- [x] Contact section with form validation
- [x] Responsive design (mobile, tablet, desktop)
- [x] Form validation implementation
- [x] DOM manipulation
- [x] Additional JavaScript interactions (theme toggle, mobile menu, dynamic year)
- [x] Semantic HTML5
- [x] Advanced CSS (Flexbox, Grid, Media Queries)
- [x] Clean folder architecture
- [x] Git workflow
- [x] README with AI usage declaration
- [x] Professional presentation

**Status**: ✅ Complete and ready for submission
"# MY-PORTIFOLIO" 
