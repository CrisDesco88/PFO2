const games = [
    {
        title: 'Elden Ring',
        image: 'img/elden-ring-photo.jpg',
        description: 'Uno de los juegos más completos que jugué en mi vida, historia, mundo abierto, arte, dificultad épicamente logradas.'
    },
    {
        title: 'Elder Scroll 5: Skyrim',
        image: 'img/skyrim.jpg',
        description: 'Fué el juego que me hizo descubrir el mundo abierto, cientos de horas gastadas en side-quests.'
    },
    {
        title: 'Stalker: Call of Pripyat',
        image: 'img/stalker-photo.jpg',
        description: 'Juego adictivo en el que tenes que sobrevivir en zona hostil llena de radiación, anomalías, mutantes y soldados.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('[data-carousel]');
    const slidesContainer = carousel.querySelector('[data-slides]');
    const prevButton = carousel.parentElement.querySelector('[data-carousel-button="prev"]');
    const nextButton = carousel.parentElement.querySelector('[data-carousel-button="next"]');

    let currentSlideIndex = 0;

    function createSlide(game) {
        const slide = document.createElement('li');
        slide.classList.add('juego'); // Add the 'juego' class for consistent styling

        slide.innerHTML = `
            <h3>${game.title}</h3>
            <img src="${game.image}" alt="Poster ${game.title}">
            <p>${game.description}</p>
        `;
        return slide;
    }

    function populateCarousel() {
        games.forEach(game => {
            const slide = createSlide(game);
            slidesContainer.appendChild(slide);
        });
    }

    function updateCarousel() {
        const slideWidth = slidesContainer.offsetWidth;
        slidesContainer.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
    }

    function goToNextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % games.length;
        updateCarousel();
    }

    function goToPrevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + games.length) % games.length;
        updateCarousel();
    }

    populateCarousel();
    updateCarousel(); // Initial carousel update

    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);
});