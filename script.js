const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const list = document.getElementById('sliderList');
const container = document.querySelector('.container');

nextBtn.onclick = () => {
    const items = document.querySelectorAll('.item');

    // Add "next" class and force reflow to allow animation
    container.classList.remove('prev');
    container.classList.add('next');
    void container.offsetWidth; // Force reflow

    list.appendChild(items[0]);

    // Remove class after animation duration (so it resets for next click)
    setTimeout(() => {
        container.classList.remove('next');
    }, 600); // Slightly more than animation time
};

prevBtn.onclick = () => {
    const items = document.querySelectorAll('.item');

    container.classList.remove('next');
    container.classList.add('prev');
    void container.offsetWidth;

    list.prepend(items[items.length - 1]);

    setTimeout(() => {
        container.classList.remove('prev');
    }, 600);
}; 




