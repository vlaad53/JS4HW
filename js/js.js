// Завдання 1
const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

const resizeImage = _.debounce((value) => {
  image.style.width = `${value * 3}px`;
}, 150);

slider.addEventListener("input", (e) => {
  resizeImage(e.target.value);
});

// Завдання 2
const box = document.querySelector("#box");

const moveBox = _.debounce((x, y) => {
  box.style.left = `${x - 25}px`;
  box.style.top = `${y - 25}px`; 
}, 100);

document.addEventListener("mousemove", (e) => {
  moveBox(e.clientX, e.clientY);
});