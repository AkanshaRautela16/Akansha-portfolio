// ============================================
// AKANSHA RAUTELA - PhD PORTFOLIO
// JavaScript Functionality
// ============================================

// ============================================
// MOBILE MENU TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Update last updated date
    updateLastModifiedDate();

    // Initialize intersection observer for scroll animations
    initializeScrollAnimations();

    // Add active nav link on scroll
    handleNavLinkActive();
});

// ============================================
// UPDATE LAST MODIFIED DATE
// ============================================

function updateLastModifiedDate() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdatedElement.textContent = currentDate.toLocaleDateString('en-US', options);
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe research cards
    const researchCards = document.querySelectorAll('.research-card');
    researchCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        observer.observe(item);
    });

    // Observe publication items
    const publicationItems = document.querySelectorAll('.publication-item');
    publicationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        observer.observe(item);
    });

    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        observer.observe(category);
    });

    // Observe award items
    const awardItems = document.querySelectorAll('.award-item');
    awardItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        observer.observe(item);
    });
}

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

function handleNavLinkActive() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// SMOOTH SCROLL BEHAVIOR (Fallback)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scrollToTop';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background-color: #1B3A6B;
        color: #D4AF37;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    document.body.appendChild(scrollButton);

    // Show button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effects
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
    });

    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createScrollToTopButton);
} else {
    createScrollToTopButton();
}

// ============================================
// PUBLICATION LINK ANIMATION
// ============================================

function addPublicationLinkAnimations() {
    const publicationLinks = document.querySelectorAll('.publication-link');
    
    publicationLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(360deg)';
                icon.style.transition = 'transform 0.6s ease';
            }
        });
    });
}

// Call after DOM loads
document.addEventListener('DOMContentLoaded', addPublicationLinkAnimations);

// ============================================
// SKILL TAG COUNTER
// ============================================

function animateSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.05}s`;
        tag.classList.add('animate-in');
    });
}

document.addEventListener('DOMContentLoaded', animateSkillTags);

// ============================================
// TIMELINE ANIMATION
// ============================================

function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                timelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)';
        item.style.transition = `all 0.5s ease-out`;
        timelineObserver.observe(item);
    });
}

document.addEventListener('DOMContentLoaded', animateTimeline);

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth number counter for statistics (if needed)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCount = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    };
    
    updateCount();
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Press 'H' to scroll to hero section
    if (e.key === 'h' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Press 'A' to scroll to about section
    if (e.key === 'a' && e.ctrlKey) {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Press 'C' to scroll to contact section
    if (e.key === 'c' && e.ctrlKey) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ============================================
// PRINT STYLESHEET SUPPORT
// ============================================

function addPrintStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media print {
            .navbar,
            .hamburger,
            #scrollToTop {
                display: none !important;
            }
            
            body {
                background-color: white;
                color: black;
            }
            
            .hero {
                background: none;
                color: black;
                padding: 2rem 0;
            }
            
            section {
                page-break-inside: avoid;
            }
            
            a {
                color: #1B3A6B;
                text-decoration: underline;
            }
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', addPrintStyles);

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================

console.log('%cWelcome to Akansha Rautela\'s Portfolio! 👋', 'font-size: 16px; font-weight: bold; color: #1B3A6B;');
console.log('%cFeel free to explore and get in touch!', 'font-size: 12px; color: #B8860B;');
console.log('%cKeyboard Shortcuts:', 'font-weight: bold;');
console.log('%cCtrl + H: Home | Ctrl + A: About | Ctrl + C: Contact', 'font-size: 11px;');
