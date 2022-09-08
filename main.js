// Scroll to section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

function myFunction() {
  var x = document.querySelector('.nav-wrapper');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

// fade in

// window.sr = ScrollReveal({ reset: true });
// sr.reveal('.fade-in', { duration: 1000 });
