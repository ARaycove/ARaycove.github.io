document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector('.banner');
    let squaresArray = [];
    for (let row = 0; row < 100; row++) {
        for (let col = 0; col < 40; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.top = `${col * 0.4}vh`;
            square.style.left = `${row * 1}%`;
            square.style.transform = `translate(${Math.random() * 1 - 0.5}%, ${Math.random() * 1 - 0.5}vh)`;
            squaresArray.push(square);
        }
    }
    squaresArray.sort(() => Math.random() - 0.5);
    squaresArray.forEach(square => {
        banner.appendChild(square);
    });
});
window.addEventListener('scroll', () => {
    let delay = 0.0075;
    document.querySelectorAll('.square').forEach(square => {
        square.style.transformOrigin = 'center';
        square.style.transform += `translateY(200vh) rotate(${Math.random() * 360}deg)`;
        square.style.transition = `transform 2s ease-out ${delay}s`;
        square.addEventListener('transitionend', () => {
            square.remove();
        });
        delay += 0.0075;
    });
});