document.addEventListener('scroll', function() {
  let element = document.querySelector('.animate');
  let elementPosition = element.getBoundingClientRect().top;
  let viewportHeight = window.innerHeight;

  let scrollPosition = window.scrollY || window.pageYOffset;

  let arrowElement = document.getElementById('arrow');

  if (scrollPosition > 100) {
    console.log ("SCROLL DETECTED");
    arrowElement.style.animation = 'none';
  } else {
    console.log("PAGE AT THE TOP")
    arrowElement.style.animation = '';
  }

  if (elementPosition < viewportHeight) {
      element.classList.add('visible');
  } else {
      element.classList.remove('visible');
  }
});