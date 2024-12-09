document.querySelectorAll('.pic').forEach((carousel) => {
    const images = carousel.querySelector('.pic_img');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    let currentIndex = 0;
    const totalImages = images.querySelectorAll('img').length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        images.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });
});

