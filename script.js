window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  
  if (window.scrollY > 50) {
    header.style.backdropFilter = 'blur(10px)';
    header.style.background = 'rgba(235, 246, 255, 0.9)';
  } else {
    header.style.backdropFilter = 'none';
    header.style.background = 'rgb(235, 246, 255)';
  }
});
