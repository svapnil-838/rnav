// script.js
const card = document.getElementById('eventCard');

card.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    // Calculate mouse position relative to center of card
    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;
    
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});