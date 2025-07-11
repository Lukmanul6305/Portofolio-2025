// 1. Fungsi untuk Menu Hamburger (Mobile)
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

const typingEffect = () => {
    const typingText = document.querySelector('.typing-text');
    const roles = ["Fullstack Developer", "Frontend Developer", "Backend Developer"];
    let roleIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typingText.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        if (typingText) {
            setTimeout(type, 500);
        }
    });
}


navSlide();
typingEffect();

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});

//animasi
const animatedElements = document.querySelectorAll('.animate');

const scrollObserver = () => {
  animatedElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('show');
    } else {
      el.classList.remove('show'); // opsional jika ingin muncul hanya sekali bisa dihapus
    }
  });
};

window.addEventListener('scroll', scrollObserver);
window.addEventListener('load', scrollObserver);
