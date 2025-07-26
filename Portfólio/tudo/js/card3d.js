const projetos3D = document.querySelector('.projetos-3d');
let isMouseDown = false;
let startX;
let scrollLeft;

projetos3D.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - projetos3D.offsetLeft;
    scrollLeft = projetos3D.scrollLeft;
    projetos3D.style.cursor = 'grabbing';  
});

projetos3D.addEventListener('mouseleave', () => {
    isMouseDown = false;
    projetos3D.style.cursor = 'grab';  
});

projetos3D.addEventListener('mouseup', () => {
    isMouseDown = false;
    projetos3D.style.cursor = 'grab';  
});

projetos3D.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();

    const x = e.pageX - projetos3D.offsetLeft;
    const walk = (x - startX) * 2;  
    projetos3D.scrollLeft = scrollLeft - walk;

    if (projetos3D.scrollLeft < 0) {
        projetos3D.scrollLeft = 0;
    }
    const maxScroll = projetos3D.scrollWidth - projetos3D.clientWidth;
    if (projetos3D.scrollLeft > maxScroll) {
        projetos3D.scrollLeft = maxScroll;
    }
});
