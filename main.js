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
// const observer = new IntersectionObserver(
//   (entries) => {
//     Array.from(entries).forEach((entry) => {
//       if (entry.intersectionRatio >= 1) {
//         entry.target.classList.add('fade-off');
//       }
//     });
//   },
//   {
//     threshold: [0, 0.5, 1]
//   }
// );

// Array.from(document.querySelectorAll('.fade-in')).forEach((element) => {
//   observer.observe(element);
// });

window.sr = ScrollReveal({ reset: true });
sr.reveal('.fade-in', { duration: 1000 });
