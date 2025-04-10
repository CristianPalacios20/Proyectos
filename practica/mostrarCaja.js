const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3 // El % del elemento que debe estar visible para activarse
});

const caja = document.querySelector('.caja-animada');
observer.observe(caja);
