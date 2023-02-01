const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.color = '#ffff99';
  });

  link.addEventListener('mouseleave', function() {
    this.style.color = '#ffd700';
  });
});
