const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const btnToBottom = $(".banner__button");
const btnToTop = $(".to-header");
const categorySection = $("#category");
const destinationSection = $("#destination");
const tripSection = $("#trip");

btnToTop.addEventListener("click", function () {
  console.log(document.body.getBoundingClientRect().top);
  window.scrollTo(0, 0);
});
btnToBottom.addEventListener("click", () => {
  console.log(document.body.scrollHeight);
  window.scrollTo(0, document.body.scrollHeight);
});

window.addEventListener("scroll", function () {
  var screenPosition = window.innerHeight / 2.2;

  var categoryPosition = categorySection.getBoundingClientRect().top;
  if (categoryPosition < screenPosition) {
    categorySection.classList.add("active");
  } else {
    categorySection.classList.remove("active");
  }

  var destinationPosition = destinationSection.getBoundingClientRect().top;
  if (destinationPosition < screenPosition) {
    destinationSection.classList.add("active");
  } else {
    destinationSection.classList.remove("active");
  }

  screenPosition2 = window.innerHeight / 2.8;
  var tripPosition = tripSection.getBoundingClientRect().top;
  if (tripPosition < screenPosition2) {
    tripSection.classList.add("active");
  } else {
    tripSection.classList.remove("active");
  }
});

//ABCXYZ
