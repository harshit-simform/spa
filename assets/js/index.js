const aboutSection = document.querySelector("#about");
const animatedElement = document.querySelectorAll(".bar");
const tabcontent = document.querySelectorAll(".tab-contents");
const options = {
  rootMargin: "0px",
  threshold: 0.5,
};
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animatedElement.forEach((element) => {
        const animateClass = element.previousElementSibling.innerText;
        element.children[0].classList.add(`${animateClass.toLowerCase()}`);
      });
    } else {
      animatedElement.forEach((element) => {
        const animateClass = element.previousElementSibling.innerText;
        element.children[0].classList.remove(`${animateClass.toLowerCase()}`);
      });
    }
  });
};
const observer = new IntersectionObserver(callback, options);

observer.observe(aboutSection);

const toggleTabs = document.querySelector(".tab-titles");
toggleTabs.addEventListener("click", (e) => {
  const removeClass = toggleTabs.children;
  console.log(removeClass);
  for (let element of removeClass) {
    element.classList.remove("active-link");
  }
  tabcontent.forEach((element) => {
    console.log(element);
    element.classList.remove("active-tab");
  });
  document
    .getElementById(`${e.target.innerText.toLowerCase()}`)
    .classList.add("active-tab");
  e.target.classList.add("active-link");
});
