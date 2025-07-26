const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('section-visible');
    }
  });
});

const container = document.querySelector('.scroll-container');
const content = container.querySelector('.scroll-content');
const thumb = container.querySelector('.thumb');

content.addEventListener('scroll', () => {
  const scrollHeight = content.scrollHeight - content.clientHeight;
  const scrollTop = content.scrollTop;
  const thumbHeight = Math.max((content.clientHeight / content.scrollHeight) * container.clientHeight, 30);
  const thumbPosition = (scrollTop / scrollHeight) * (container.clientHeight - thumbHeight);

  thumb.style.height = thumbHeight + 'px';
  thumb.style.transform = `translateY(${thumbPosition}px)`;
});
