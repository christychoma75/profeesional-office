// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Mobile Menu Toggle
hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navLinks?.classList.contains('active')) {
            if (index === 0) {
                span.style.transform = 'rotate(45deg) translate(8px, 8px)';
            } else if (index === 1) {
                span.style.opacity = '0';
            } else if (index === 2) {
                span.style.transform = 'rotate(-45deg) translate(7px, -7px)';
            }
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Close mobile menu when a link is clicked
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks?.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();

// Contact Form Handling (with Netlify Forms support)
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Get form data for client-side validation
        const formData = new FormData(contactForm);
        
        // Validate form
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const privacy = formData.get('privacy');
        
        // Reset message
        formMessage.textContent = '';
        formMessage.classList.remove('success', 'error');
        
        if (!name || !email || !message) {
            showFormMessage('Please fill in all required fields', 'error');
            e.preventDefault();
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            e.preventDefault();
            return;
        }
        
        if (!privacy) {
            showFormMessage('Please agree to the privacy policy and terms of service', 'error');
            e.preventDefault();
            return;
        }
        
        // If validation passes, show success message and let Netlify submit
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Show success message
        setTimeout(() => {
            showFormMessage('Thank you for your message! We will get back to you shortly.', 'success');
        }, 500);
    });
}

// Form message helper
function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.classList.add(type);
    }
}

// Email validation
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation for elements
function revealElements() {
    const elements = document.querySelectorAll('.feature-card, .service-item, .team-member, .pricing-card, .faq-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize reveal animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealElements);
} else {
    revealElements();
}

// Stats counter animation
function animateCounters() {
    const statItems = document.querySelectorAll('.stat-item h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                animateCounter(entry.target);
                entry.target.dataset.animated = 'true';
            }
        });
    }, {
        threshold: 0.5
    });
    
    statItems.forEach(item => {
        observer.observe(item);
    });
}

function animateCounter(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    const suffix = text.replace(/[0-9]/g, '');
    
    if (isNaN(number)) return;
    
    let current = 0;
    const increment = Math.ceil(number / 30);
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        element.textContent = current + suffix;
    }, 30);
}

// Initialize counter animations
animateCounters();

// Add active class to current page
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

highlightCurrentPage();

// Handle form input validation in real-time
const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'email') {
            if (input.value && !isValidEmail(input.value)) {
                input.style.borderColor = '#e74c3c';
            } else {
                input.style.borderColor = '#e0e0e0';
            }
        } else if (input.value === '') {
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });
});

// Print friendly styles
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});

// Prevent form spam with submission throttling
let lastSubmissionTime = 0;
const THROTTLE_TIME = 2000; // 2 seconds

function canSubmitForm() {
    const now = Date.now();
    if (now - lastSubmissionTime >= THROTTLE_TIME) {
        lastSubmissionTime = now;
        return true;
    }
    return false;
}

// Update form submission to use throttling
if (contactForm) {
    const originalHandler = contactForm.onsubmit;
    contactForm.addEventListener('submit', (e) => {
        if (!canSubmitForm()) {
            e.preventDefault();
            showFormMessage('Please wait before submitting again', 'error');
        }
    });
}

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape' && navLinks?.classList.contains('active')) {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    }
});

// Performance optimization - lazy load images if any
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console message
console.log('%c Professional Office Website', 'font-size: 24px; font-weight: bold; color: #1b3b6f;');
console.log('%cBuilt with HTML5, CSS3, and Vanilla JavaScript', 'font-size: 14px; color: #3498db;');
