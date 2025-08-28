
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
function submitForm(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const statusDiv = document.getElementById('formStatus');
    
    // Validate form (additional validation if needed)
    if (!name || !email || !subject || !message) {
        statusDiv.innerHTML = '<p class="error">Please fill in all fields.</p>';
        return false;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    setTimeout(() => {
        // For actual implementation, use Fetch API to submit to your backend
        // Example:
        // fetch('your-form-handler', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, subject, message })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     statusDiv.innerHTML = '<p class="success">Thank you! Your message has been sent.</p>';
        //     document.getElementById('contactForm').reset();
        // })
        // .catch(error => {
        //     statusDiv.innerHTML = '<p class="error">There was an error sending your message. Please try again.</p>';
        // })
        // .finally(() => {
        //     submitBtn.innerHTML = originalBtnText;
        //     submitBtn.disabled = false;
        // });
        
        // Success message (demo)
        statusDiv.innerHTML = '<p class="success">Thank you! Your message has been sent.</p>';
        document.getElementById('contactForm').reset();
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        
    }, 2000);
    
    return false;
}