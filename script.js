// Animated background
function createBackgroundElements() {
    const container = document.getElementById('background-animation');
    const elementCount = 10;

    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.style.left = Math.random() * 100 + 'vw';
        element.style.animationDelay = Math.random() * 2 + 's';
        element.style.opacity = Math.random();
        container.appendChild(element);
    }
}

// Scroll animation
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createBackgroundElements();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});