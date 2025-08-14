const toggleButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
window.addEventListener('DOMContentLoaded', () => {
  const homeContent = document.querySelector('.home-content');
  homeContent.style.animationPlayState = 'running';
});
window.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  content.style.animation = 'slideDownFadeIn 1s ease forwards';
});
