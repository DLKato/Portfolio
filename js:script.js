// Toggle mobile navigation menu
document.getElementById('nav-toggle').addEventListener('click', function () {
  var navList = document.querySelector('nav ul');
  if (navList) {
    navList.classList.toggle('open');
  }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(function(link) {
  link.addEventListener('click', function () {
    var navList = document.querySelector('nav ul');
    if (navList) {
      navList.classList.remove('open');
    }
  });
});