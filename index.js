document.addEventListener("DOMContentLoaded", () => {
  let observor = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inView');
        return;
      }
    });
  },
  {
    rootMargin: "0px 0px -250px 0px"
  }
  );

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
    },
    {
      rootMargin: "0px 0px -200px 0px"
    }
  );
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

let isToggled = false
function openNav() {
  let line1 = document.getElementsByClassName("line1")[0]
  let line2 = document.getElementsByClassName("line2")[0]
  let navbar = document.getElementsByClassName("navbar")[0]

  if (!isToggled) {
    line1.style.transform = "rotate(45deg) translateX(6px)"
    line2.style.transform = "rotate(-45deg) translateX(6px)"
    isToggled = true
  } else {
    line1.style.transform = ""
    line2.style.transform = ""
    isToggled = false
  }

  navbar.classList.toggle('active-menu');
}