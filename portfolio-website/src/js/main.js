
const themeSwitch = document.getElementById('theme-switch');
const html = document.documentElement;

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
themeSwitch.checked = savedTheme === 'light';



// Typing effect
new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 2000,
    startDelay: 1000
});

// Scroll reveal animations
ScrollReveal().reveal('.project-card', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

// 3D tilt effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rotateX = (y - rect.height / 2) / 10;
        const rotateY = (x - rect.width / 2) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

// Animate skill bars when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = level;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.project-card', {
        delay: 200,
        distance: '50px',
        duration: 800,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        interval: 200,
        origin: 'bottom',
        reset: false
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const parallax = document.querySelector('.parallax-section');
        const scrolled = window.pageYOffset;
        parallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
});

/* filepath: /c:/Users/ADMIN/Desktop/Projects/Portfolio/portfolio-website/src/js/projects.js */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.project-card', {
        delay: 200,
        distance: '50px',
        duration: 800,
        origin: 'bottom',
        interval: 200,
        scale: 0.9,
        viewFactor: 0.2,
        cleanup: true
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const parallax = document.querySelector('.parallax-section');
        const scrolled = window.pageYOffset;
        parallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
});
