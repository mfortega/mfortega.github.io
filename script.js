
(function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const dotsContainer = document.getElementById('pageDots');
    let currentIdx = 0;
    const totalSlides = slides.length;

    function updateSlides() {
        slides.forEach((s, i) => {
            s.classList.toggle('active', i === currentIdx);
        });
        rebuildDots();
    }

    function rebuildDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'dot' + (i === currentIdx ? ' active-dot' : '');
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                currentIdx = parseInt(e.target.getAttribute('data-index'));
                updateSlides();
            });
            dotsContainer.appendChild(dot);
        }
    }

    prevBtn.addEventListener('click', () => {
        currentIdx = (currentIdx - 1 + totalSlides) % totalSlides;
        updateSlides();
    });

    nextBtn.addEventListener('click', () => {
        currentIdx = (currentIdx + 1) % totalSlides;
        updateSlides();
    });

    // teclado
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextBtn.click();
        }
    });

    // iniciar
    updateSlides();
})();
