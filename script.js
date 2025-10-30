/* ==========================================================================
   Wine Education Platform Brochure - JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSolutionsToggle();
    initPricingToggle();
    initModal();
    initFormHandling();
    initScrollAnimations();
    initSmoothScrolling();
});

/* ==========================================================================
   Navigation
   ========================================================================== */

function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && hamburger) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu && hamburger) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}

/* ==========================================================================
   Solutions Toggle
   ========================================================================== */

function initSolutionsToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const solutionContents = document.querySelectorAll('.solution-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSolution = this.getAttribute('data-solution');
            
            // Update active button
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            solutionContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetSolution) {
                    content.classList.add('active');
                }
            });
        });
    });
}

/* ==========================================================================
   Pricing Toggle
   ========================================================================== */

function initPricingToggle() {
    const pricingButtons = document.querySelectorAll('.pricing-toggle-btn');
    const pricingContents = document.querySelectorAll('.pricing-content');

    pricingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPricing = this.getAttribute('data-pricing');
            
            // Update active button
            pricingButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            pricingContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetPricing + '-pricing') {
                    content.classList.add('active');
                }
            });
        });
    });
}

/* ==========================================================================
   Modal Functionality
   ========================================================================== */

function initModal() {
    const modal = document.getElementById('demo-modal');
    const demoBtn = document.getElementById('demo-btn');
    const caseStudyBtn = document.getElementById('case-study-btn');
    const closeBtn = document.querySelector('.close');

    // Open modal for demo request
    if (demoBtn && modal) {
        demoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Case study download (could be expanded to actual download)
    if (caseStudyBtn) {
        caseStudyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Track the download request
            trackEvent('case_study_download');
            
            // Show success message or trigger actual download
            showNotification('Case study download started! Check your downloads folder.');
        });
    }

    // Close modal
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

/* ==========================================================================
   Form Handling
   ========================================================================== */

function initFormHandling() {
    const demoForm = document.querySelector('.demo-form');
    
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(demoForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Validate required fields
            if (!validateForm(data)) {
                return;
            }
            
            // Show loading state
            const submitBtn = demoForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Scheduling...';
            submitBtn.disabled = true;
            
            // Simulate API call (replace with actual implementation)
            setTimeout(() => {
                // Success handling
                showNotification('Demo scheduled successfully! We\'ll contact you within 24 hours.');
                
                // Reset form
                demoForm.reset();
                
                // Close modal
                const modal = document.getElementById('demo-modal');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Track conversion
                trackEvent('demo_scheduled', data);
                
            }, 2000);
        });
    }
}

function validateForm(data) {
    const requiredFields = ['org-name', 'contact-name', 'email', 'org-type'];
    const missingFields = [];
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            missingFields.push(field);
        }
    });
    
    if (missingFields.length > 0) {
        showNotification('Please fill in all required fields.', 'error');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

/* ==========================================================================
   Notifications
   ========================================================================== */

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 3000;
                max-width: 400px;
                padding: 16px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }
            .notification--success {
                background: #10B981;
                color: white;
            }
            .notification--error {
                background: #EF4444;
                color: white;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
            }
            .notification-message {
                flex: 1;
                font-weight: 500;
            }
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                font-size: 20px;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

/* ==========================================================================
   Scroll Animations
   ========================================================================== */

function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.05, // Trigger earlier (was 0.1)
        rootMargin: '0px 0px -20px 0px' // Reduced from -50px for earlier triggering
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animateElements = document.querySelectorAll(`
        .problem-card,
        .solution-item,
        .case-study-details > div,
        .feature-item,
        .target-item,
        .pricing-card,
        .testimonial,
        .stat
    `);

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)'; // Reduced from 30px for subtler effect
        el.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`; // Faster: 0.4s duration, 0.05s stagger
        observer.observe(el);
    });
    
    // Add CSS for animation
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(animationStyles);
}

/* ==========================================================================
   Smooth Scrolling
   ========================================================================== */

function initSmoothScrolling() {
    // Handle anchor links with smooth scrolling
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just a hash
            if (href === '#') {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==========================================================================
   Analytics and Tracking
   ========================================================================== */

function trackEvent(eventName, data = {}) {
    // Google Analytics 4 tracking (replace with your measurement ID)
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            custom_parameter_1: data.orgType || '',
            custom_parameter_2: data.members || '',
            custom_parameter_3: data.timeline || ''
        });
    }
    
    // Console log for development
    console.log('Event tracked:', eventName, data);
    
    // Facebook Pixel tracking (if implemented)
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, data);
    }
}

/* ==========================================================================
   Performance Optimizations
   ========================================================================== */

// Lazy load images when they come into viewport
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);

/* ==========================================================================
   Utility Functions
   ========================================================================== */

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Format phone numbers as user types
function formatPhoneNumber(input) {
    const phoneNumber = input.value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) {
        input.value = phoneNumber;
    } else if (phoneNumberLength < 7) {
        input.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
        input.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
}

// Add phone formatting to phone input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    }
});

/* ==========================================================================
   Error Handling and Fallbacks
   ========================================================================== */

// Global error handler
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // In production, you might want to send errors to a logging service
    // trackEvent('javascript_error', { message: e.message, stack: e.error.stack });
});

// Handle offline/online status
window.addEventListener('online', function() {
    showNotification('Connection restored!', 'success');
});

window.addEventListener('offline', function() {
    showNotification('No internet connection detected.', 'error');
});

/* ==========================================================================
   Development Helpers
   ========================================================================== */

// Only in development - remove for production
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Add some development helpers
    console.log('Wine Education Platform Brochure - Development Mode');
    
    // Add keyboard shortcuts for testing
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to open demo modal
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const modal = document.getElementById('demo-modal');
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
    });
}