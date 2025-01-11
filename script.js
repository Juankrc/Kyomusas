 

  const carousel = document.querySelector('.service-cards');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let currentIndex = 0;
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth; // Solo el ancho de la tarjeta
  const cardMargin = parseInt(getComputedStyle(cards[0]).marginRight); // Incluye el margen
  const cardTotalWidth = cardWidth + cardMargin; // Ancho total con margen
  const visibleCards = Math.floor(carousel.parentElement.offsetWidth / cardTotalWidth); // Tarjetas visibles
  
  nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - visibleCards) {
      currentIndex++;
      carousel.style.transform = `translateX(-${currentIndex * cardTotalWidth}px)`;
    }
  });
  
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      carousel.style.transform = `translateX(-${currentIndex * cardTotalWidth}px)`;
    }
  });
  