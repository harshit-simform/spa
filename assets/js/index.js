const aboutSection = document.querySelector("#about");
const animatedElement = document.querySelectorAll(".bar");
const tabcontent = document.querySelectorAll(".tab-contents");
const sliderCards = document.querySelectorAll(".card");
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
  console.log(e.target);
  const removeClass = toggleTabs.children;
  const targetElement = e.target;
  console.log(targetElement.children.length);
  // console();
  if (e.target.children.length === 0) {
    // console.log(e.target.innerText);
    for (let element of removeClass) {
      element.classList.remove("active-link");
    }
    tabcontent.forEach((element) => {
      // console.log(element);
      element.classList.remove("active-tab");
    });
    document
      .getElementById(`${e.target.innerText.toLowerCase()}`)
      .classList.add("active-tab");
    e.target.classList.add("active-link");
  } else {
    return;
  }
});
// let counter = 0;
// ////////////////////////////////// will be removed
// function cardSlider(value) {
//   console.log(sliderCards.length);
//   if (counter == sliderCards.length) {
//     counter = 0;
//   }
//   if (value == "next") {
//     sliderCards[counter].classList.remove("active-card");
//     counter++;
//     console.log(counter);
//     sliderCards[counter].classList.add("active-card");
//   } else {
//     sliderCards[counter].classList.remove("active-card");
//     counter--;
//     sliderCards[counter].classList.add("active-card");
//   }
// }

let sliderNumber = 0;

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
  sliderCards[sliderNumber].classList.remove("active-card");
  sliderNumber--;
  if (sliderNumber < 0) {
    sliderNumber = sliderCards.length - 1;
  }
  sliderCards[sliderNumber].classList.add("active-card");
});

nextButton.addEventListener("click", () => {
  sliderCards[sliderNumber].classList.remove("active-card");
  sliderNumber++;
  if (sliderNumber >= sliderCards.length) {
    console.log("in herer");
    sliderNumber = 0;
  }
  console.log(sliderNumber);
  sliderCards[sliderNumber].classList.add("active-card");
});
