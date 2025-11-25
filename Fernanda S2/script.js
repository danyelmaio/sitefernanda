// CONFIGURAÇÕES
const textToType = "Eu Te Amo Eternamente."; // Mude o título aqui
const titleElement = document.getElementById('typing-title');
let charIndex = 0;

// 1. EFEITO DE DIGITAÇÃO
function typeWriter() {
    if (charIndex < textToType.length) {
        titleElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 90); // Velocidade um pouco mais rápida
    }
}

// 2. ROTAÇÃO DAS FOTOS (Desktop)
function rotatePhotos() {
    const photos = document.querySelectorAll('.photo-container');
    photos.forEach(photo => {
        const randomAngle = (Math.random() * 8 - 4).toFixed(1); // Mais variação de rotação
        photo.style.setProperty('--rotation', randomAngle + 'deg');
    });
}

// 3. ANIMAÇÃO DE SCROLL
const animateElements = document.querySelectorAll(".animate-fade-in, .animate-slide-up");
function checkScrollAnimation() {
    const triggerBottom = window.innerHeight * 0.9; 
    animateElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

// 4. GERADOR DE CORAÇÕES FLUTUANTES
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-background');
    const numHearts = 30; // Mais corações para um efeito mais cheio

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.transform = `rotate(45deg) scale(${Math.random() * 0.5 + 0.5})`; // Tamanhos variados
        heart.style.animationDuration = Math.random() * 15 + 10 + 's'; // Duração da animação
        heart.style.animationDelay = Math.random() * 8 + 's'; // Atraso para aparecerem
        
        heartsContainer.appendChild(heart);
    }
}

// INICIALIZAR
window.addEventListener('load', () => {
    typeWriter();
    rotatePhotos();
    checkScrollAnimation();
    createHearts(); // Chamar a função para criar corações
});
window.addEventListener('scroll', checkScrollAnimation);