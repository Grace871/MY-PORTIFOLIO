// ===================================
// DOM Elements
// ===================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('theme-toggle');
const gpaForm = document.getElementById('gpa-calculator-form');
const addCourseBtn = document.getElementById('add-course');
const resetCalculatorBtn = document.getElementById('reset-calculator');
const coursesContainer = document.getElementById('courses-container');
const gpaResultDiv = document.getElementById('gpa-result');
const contactForm = document.getElementById('contact-form');
const currentYearSpan = document.getElementById('current-year');

// ===================================
// Mobile Menu Toggle
// ===================================
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navLinks.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translateY(10px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });
});

// ===================================
// Dark/Light Theme Toggle
// ===================================
if (themeToggle) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Update button icon
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// ===================================
// Dynamic Year in Footer
// ===================================
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// ===================================
// Skill Progress Bar Animation
// ===================================
const observeSkillBars = () => {
    const skillBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-progress');
                progressBar.style.width = `${targetWidth}%`;
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
};

// Initialize skill bars animation
document.addEventListener('DOMContentLoaded', observeSkillBars);

// ===================================
// GPA Calculator Functions
// ===================================

// Function to convert marks to grade points
function getGradePoints(marks) {
    if (marks >= 90) return 4.0;
    if (marks >= 80) return 3.5;
    if (marks >= 70) return 3.0;
    if (marks >= 60) return 2.5;
    if (marks >= 50) return 2.0;
    return 0.0;
}

// Function to get classification based on GPA
function getClassification(gpa) {
    if (gpa >= 3.7) return 'First Class Honours';
    if (gpa >= 3.0) return 'Second Class Honours (Upper Division)';
    if (gpa >= 2.5) return 'Second Class Honours (Lower Division)';
    if (gpa >= 2.0) return 'Pass';
    return 'Fail';
}

// Add new course input
if (addCourseBtn) {
    addCourseBtn.addEventListener('click', () => {
        const courseInput = document.createElement('div');
        courseInput.className = 'course-input';
        courseInput.innerHTML = `
            <input type="text" class="course-name" placeholder="Course Name" required>
            <input type="number" class="course-marks" placeholder="Marks (0-100)" min="0" max="100" required>
            <button type="button" class="remove-course" aria-label="Remove course">×</button>
        `;
        
        coursesContainer.appendChild(courseInput);
        
        // Add event listener to the new remove button
        const removeBtn = courseInput.querySelector('.remove-course');
        removeBtn.addEventListener('click', () => {
            if (coursesContainer.children.length > 1) {
                courseInput.remove();
            } else {
                alert('You must have at least one course!');
            }
        });
    });
}

// Remove course functionality for initial course
coursesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-course')) {
        if (coursesContainer.children.length > 1) {
            e.target.parentElement.remove();
        } else {
            alert('You must have at least one course!');
        }
    }
});

// Calculate GPA
if (gpaForm) {
    gpaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const courseInputs = document.querySelectorAll('.course-input');
        let totalPoints = 0;
        let totalCourses = 0;
        let isValid = true;

        courseInputs.forEach(courseInput => {
            const courseName = courseInput.querySelector('.course-name').value.trim();
            const courseMarks = parseFloat(courseInput.querySelector('.course-marks').value);

            // Validation
            if (!courseName) {
                alert('Please enter a course name!');
                isValid = false;
                return;
            }

            if (isNaN(courseMarks) || courseMarks < 0 || courseMarks > 100) {
                alert('Please enter valid marks between 0 and 100!');
                isValid = false;
                return;
            }

            totalPoints += getGradePoints(courseMarks);
            totalCourses++;
        });

        if (!isValid || totalCourses === 0) {
            return;
        }

        // Calculate GPA
        const gpa = (totalPoints / totalCourses).toFixed(2);
        const classification = getClassification(parseFloat(gpa));

        // Display results
        document.getElementById('gpa-value').textContent = gpa;
        document.getElementById('gpa-classification').textContent = classification;
        gpaResultDiv.classList.remove('hidden');

        // Scroll to results
        gpaResultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Reset calculator
if (resetCalculatorBtn) {
    resetCalculatorBtn.addEventListener('click', () => {
        gpaForm.reset();
        gpaResultDiv.classList.add('hidden');
        
        // Keep only one course input
        const courseInputs = document.querySelectorAll('.course-input');
        courseInputs.forEach((input, index) => {
            if (index > 0) {
                input.remove();
            }
        });
    });
}

// ===================================
// Contact Form Validation & Handling
// ===================================
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(error => error.textContent = '');

        let isValid = true;

        // Validate name
        if (name.length < 2) {
            document.getElementById('name-error').textContent = 'Name must be at least 2 characters';
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate subject
        if (subject.length < 5) {
            document.getElementById('subject-error').textContent = 'Subject must be at least 5 characters';
            isValid = false;
        }

        // Validate message
        if (message.length < 10) {
            document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
            isValid = false;
        }

        // If valid, show success message
        if (isValid) {
            document.getElementById('form-success').classList.remove('hidden');
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('form-success').classList.add('hidden');
            }, 5000);

            // In a real application, you would send this data to a server
            console.log('Form Data:', { name, email, subject, message });
        }
    });

    // Real-time validation
    const validateField = (field, errorElement, validationFn, errorMsg) => {
        field.addEventListener('blur', () => {
            if (!validationFn(field.value.trim())) {
                errorElement.textContent = errorMsg;
            } else {
                errorElement.textContent = '';
            }
        });
    };

    validateField(
        document.getElementById('name'),
        document.getElementById('name-error'),
        (value) => value.length >= 2,
        'Name must be at least 2 characters'
    );

    validateField(
        document.getElementById('email'),
        document.getElementById('email-error'),
        (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        'Please enter a valid email address'
    );

    validateField(
        document.getElementById('subject'),
        document.getElementById('subject-error'),
        (value) => value.length >= 5,
        'Subject must be at least 5 characters'
    );

    validateField(
        document.getElementById('message'),
        document.getElementById('message-error'),
        (value) => value.length >= 10,
        'Message must be at least 10 characters'
    );
}

// ===================================
// Smooth Scroll Enhancement
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Fade-in Animation on Scroll
// ===================================
const observeFadeIn = () => {
    const elements = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
};

document.addEventListener('DOMContentLoaded', observeFadeIn);

// ===================================
// Console Message
// ===================================
console.log('%c👋 Welcome to my Portfolio!', 'color: #4a90e2; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #667eea; font-size: 14px;');
console.log('%cFeel free to explore the code!', 'color: #51cf66; font-size: 14px;');
