document.addEventListener("DOMContentLoaded", () => {
  let observor = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inView');
        return;
      }
    })
  });

  let allElements = document.querySelectorAll('.animate');
  allElements.forEach((element) => observor.observe(element));
})

document.addEventListener("DOMContentLoaded", () => {
    let timeline = document.querySelector(".timeline");
    let containers = document.querySelectorAll(".timeline .container");

    const observor = new IntersectionObserver((entries, observor) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          containers.forEach(container => {
            console.log("viewing")
            container.classList.add("inView");
          });
          observor.unobserve(entry.target); // Stop observing after first trigger
        }
      });
    });

    IntersectionObserver.thresholds

    if (timeline) {
      observor.observe(timeline);
    }
  });

document.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY || window.pageYOffset;

  let arrowElement = document.getElementById('arrow');

  if (scrollPosition > 100) {
    console.log("SCROLL DETECTED");
    arrowElement.style.animation = 'none';
  } else {
    console.log("PAGE AT THE TOP")
    arrowElement.style.animation = '';
  }
});