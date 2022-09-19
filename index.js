const toggleBtn = document.querySelector(".mode__btn");
const body = document.querySelector("body");
const card = document.querySelectorAll(".card");
const title = document.querySelector(".titles__main");
const followers = document.querySelector(".titles__followers");
const card__numbers = document.querySelectorAll(".card__followers span");
const overview__title = document.querySelector(".overview__title");
const ovcard = document.querySelectorAll(".ovcard");
const ovcard__numbers = document.querySelectorAll(".ovcard h3");
const ovcard__title = document.querySelectorAll(".ovcard__title p");

const themeSwitcher = () => {
  toggler.classList.toggle("toggle");

  mode_name.classList.toggle("desaturated-text");

  toggleBtn.classList.toggle("mode-light");

  body.classList.toggle("bg-white");

  card.forEach((card) => {
    card.classList.toggle("card-bg-white");
  });

  title.classList.toggle("black-text");

  followers.classList.toggle("desaturated-text");

  card__numbers.forEach((number) => {
    number.classList.toggle("black-text");
  });

  overview__title.classList.toggle("black-text");

  ovcard.forEach((card) => {
    card.classList.toggle("card-bg-white");
  });

  ovcard__numbers.forEach((number) => {
    number.classList.toggle("black-text");
  });

  ovcard__title.forEach((title) => {
    title.classList.toggle("desaturated-text");
  });
};

toggleBtn.addEventListener("click", () => {
  themeSwitcher();
});
