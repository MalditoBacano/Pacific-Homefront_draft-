// ===================================
// Pacific Homefront - Main JavaScript
// Interactive Features & Form Handling
// ===================================

// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animateElements = document.querySelectorAll('.serve-card, .service-item, .testimonial-card, .area-badge');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            userType: document.getElementById('userType').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Disable submit button
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            // Store lead in localStorage for demo purposes
            // In production, you would send this to your backend API
            const leads = JSON.parse(localStorage.getItem('pacificHomefrontLeads') || '[]');
            leads.push(formData);
            localStorage.setItem('pacificHomefrontLeads', JSON.stringify(leads));

            // Log to console for demo
            console.log('New lead captured:', formData);
            console.log('Total leads:', leads.length);

            // Show success message
            formSuccess.classList.add('show');
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.classList.remove('show');
            }, 5000);

            // Track conversion (Google Analytics example - add your tracking ID)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'generate_lead', {
                    'event_category': 'engagement',
                    'event_label': formData.userType
                });
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Sorry, there was an error submitting your form. Please try again or call us directly.');
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Real-time form validation
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = '#ef4444';
        } else {
            emailInput.style.borderColor = '#10b981';
        }
    });

    phoneInput.addEventListener('input', (e) => {
        // Format phone number as user types
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        e.target.value = value;
    });
}

// ===================================
// Dynamic Stats Counter Animation
// ===================================
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Trigger counter animation when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (number && !isNaN(number)) {
                    stat.textContent = '0';
                    animateCounter(stat, number);
                }
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const hero = document.querySelector('.hero');
if (hero) {
    heroObserver.observe(hero);
}

// ===================================
// Lead Tracking & Analytics
// ===================================
const trackPageView = () => {
    const pageData = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        userAgent: navigator.userAgent
    };

    console.log('Page view tracked:', pageData);

    // Track with Google Analytics (if installed)
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: window.location.pathname
        });
    }
};

// Track initial page view
trackPageView();

// ===================================
// CTA Button Click Tracking
// ===================================
const ctaButtons = document.querySelectorAll('.btn-hero, .btn-primary');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('CTA clicked:', btn.textContent);

        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': btn.textContent.trim()
            });
        }
    });
});

// ===================================
// Service Card Click Tracking
// ===================================
const serviceCards = document.querySelectorAll('.serve-card, .service-item');
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3')?.textContent || 'Unknown Service';
        console.log('Service card clicked:', title);

        if (typeof gtag !== 'undefined') {
            gtag('event', 'view_item', {
                'event_category': 'Service Interest',
                'event_label': title
            });
        }
    });
});

// ===================================
// Scroll Progress Indicator (Optional)
// ===================================
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
        z-index: 10000;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Uncomment to enable scroll progress bar
// createScrollProgress();

// ===================================
// Performance Monitoring
// ===================================
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);

        // Track performance metrics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                'name': 'load',
                'value': pageLoadTime,
                'event_category': 'Performance'
            });
        }
    }
});

// ===================================
// Accessibility Enhancements
// ===================================
// Add keyboard navigation for service cards
serviceCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            card.click();
        }
    });
});

// ===================================
// Lead Export Function (for demo/testing)
// ===================================
window.exportLeads = () => {
    const leads = JSON.parse(localStorage.getItem('pacificHomefrontLeads') || '[]');
    const dataStr = JSON.stringify(leads, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `leads-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    console.log(`Exported ${leads.length} leads`);
};

// Console message for developers
console.log('%c Pacific Homefront Website ', 'background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); color: white; font-size: 20px; padding: 10px;');
console.log('%c Modern, Fast, SEO-Optimized ', 'color: #2563eb; font-size: 14px;');
console.log('To export captured leads (demo), run: exportLeads()');
