const habilidades3D = document.querySelector('.habilidades-3d');
let isMouseDown = false;
let startX;
let scrollLeft;

habilidades3D.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - habilidades3D.offsetLeft;
    scrollLeft = habilidades3D.scrollLeft;
    habilidades3D.style.cursor = 'grabbing';
});

habilidades3D.addEventListener('mouseleave', () => {
    isMouseDown = false;
    habilidades3D.style.cursor = 'grab';
});

habilidades3D.addEventListener('mouseup', () => {
    isMouseDown = false;
    habilidades3D.style.cursor = 'grab';
});

habilidades3D.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();

    const x = e.pageX - habilidades3D.offsetLeft;
    const walk = (x - startX) * 2;
    habilidades3D.scrollLeft = scrollLeft - walk;

    if (habilidades3D.scrollLeft < 0) {
        habilidades3D.scrollLeft = 0;
    }
    const maxScroll = habilidades3D.scrollWidth - habilidades3D.clientWidth;
    if (habilidades3D.scrollLeft > maxScroll) {
        habilidades3D.scrollLeft = maxScroll;
    }
});
``