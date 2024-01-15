document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
  });
});