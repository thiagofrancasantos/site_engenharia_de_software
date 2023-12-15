document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 50;

  sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
          document.querySelector('nav a[href="#' + section.id + '"]').classList.add('active');
      } else {
          document.querySelector('nav a[href="#' + section.id + '"]').classList.remove('active');
      }
  });
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});