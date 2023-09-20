document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector('.banner');
    for (let i = 0; i < 400; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      banner.appendChild(square);
    }
  });
window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
      let squares = document.querySelectorAll('.square');
      squares.forEach((square, index) => {
        setTimeout(() => {
          square.style.animation = `spinFall ${Math.random()*5}s forwards`;
        }, index * 500); // Adjust time as needed to stagger the animations
      });
    }
  });