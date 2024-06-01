document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "art-images/art1.jpg",
        "art-images/art2.jpg",
        "art-images/art3.jpg",
        "art-images/art4.jpg",
        "art-images/art5.jpg"
    ];

    function randomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function updateHeroSection() {
        const heroSection = document.getElementById('hero-section');
        const randomImgSrc = randomImage();
        heroSection.style.backgroundImage = `url(${randomImgSrc})`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
    }

    updateHeroSection();
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
    
// Animation Initialization
// This addresses the recommendation for advanced animations and transitions
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .slide-in').forEach(element => {
    observer.observe(element);
});
});


