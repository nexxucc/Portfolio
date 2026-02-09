// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme or system preference
function getTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return prefersDark.matches ? 'dark' : 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme
setTheme(getTheme());

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// ===== Navigation =====
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== Mobile Menu =====
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

document.querySelectorAll('.mobile-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe fade-up elements
document.querySelectorAll('.fade-up, .stagger-children').forEach(el => {
    observer.observe(el);
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.theme-toggle)');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===== Card Tilt Effect =====
document.querySelectorAll('.bento-card, .project-card, .skill-category, .contact-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== Parallax Scroll Effect =====
const parallaxElements = [
    { element: document.querySelector('.hero-content'), speed: 0.2 },
    { element: document.querySelector('.hero-image'), speed: 0.4 },
    { element: document.querySelector('.bento-grid'), speed: 0.05 },
    { element: document.querySelector('.projects-grid'), speed: 0.05 }
];

// Add specific classes to section titles for parallax targeting if needed
document.querySelectorAll('.section-title').forEach(title => {
    parallaxElements.push({ element: title, speed: 0.1 });
});

function updateParallax() {
    // Disable on mobile for performance and layout stability
    if (window.innerWidth <= 768) return;

    const scrollY = window.scrollY;

    parallaxElements.forEach(({ element, speed }) => {
        if (element) {
            // Calculate distance from top of viewport
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const viewportHeight = window.innerHeight;

            // Check if element is in viewport (or close to it)
            if (rect.top < viewportHeight && rect.bottom > 0) {
                // Calculate offset based on scroll position relative to element start
                const offset = (scrollY - elementTop + viewportHeight / 2) * speed * -1;

                // Apply transform only if not hovered (to avoid conflict with tilt)
                // Or apply to a wrapper. For simplicity, we apply directly but use translate3d
                // We need to be careful with existing transforms. 
                // Since cards have their own transform on hover, we won't apply this to individual cards, 
                // but to the GRID container which doesn't have hover effects.
                if (!element.classList.contains('project-card') && !element.classList.contains('bento-card')) {
                    element.style.transform = `translate3d(0, ${offset}px, 0)`;
                }
            }
        }
    });
}

// Throttled scroll event for parallax
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax();
            ticking = false;
        });
        ticking = true;
    }
});

// ===== Mobile Nav Toggle Animation =====
const style = document.createElement('style');
style.textContent = `
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(4px, 4px);
    }
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(4px, -4px);
    }
`;
document.head.appendChild(style);

// ===== Console =====
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold;');
console.log('%cLooking for an AI Developer?', 'font-size: 14px;');
console.log('%cvanshatarch@gmail.com', 'font-size: 12px; color: #888;');
