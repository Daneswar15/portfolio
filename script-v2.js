// Smooth navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for scroll animations
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

// Apply animations to elements
document.querySelectorAll('.skill-group, .timeline-item, .education-card, .contact-method').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Floating cards interaction
document.querySelectorAll('.floating-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrollY = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
        shape.style.transform = `translateY(${scrollY * (0.5 + index * 0.1)}px)`;
    });
});

// Add cursor effect on click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'radial-gradient(circle, rgba(0, 212, 255, 0.5), transparent)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    ripple.style.animation = 'rippleAnimation 0.6s ease-out forwards';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
});

// Add ripple animation keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleAnimation {
        from {
            width: 0;
            height: 0;
            opacity: 1;
        }
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll behavior enhancement
window.addEventListener('wheel', (e) => {
    const delta = e.deltaY;
    if (delta !== 0) {
        // Smooth scroll is already handled by CSS, this is just for additional effects
    }
}, { passive: true });

// Text animation on hover
document.querySelectorAll('.job-highlights li').forEach((li, index) => {
    li.style.animation = `slideIn 0.3s ease forwards`;
    li.style.animationDelay = `${index * 0.05}s`;
});

// Add dynamic gradient animation
const style2 = document.createElement('style');
style2.textContent = `
    @keyframes gradientShift {
        0%, 100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style2);

// Mouse follow effect (optional - subtle)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Prevent smooth scroll on buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Performance optimization - throttle scroll events
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Update animations here
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Log when page is fully loaded
window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully! 🚀');
});
