let navbar = document.querySelector(".navigationBar");

document.querySelector("#menuButton").onclick = () => {
  navbar.classList.toggle("active");
  searchBox.classList.remove("active");
  cartContainer.classList.remove("active");
};

let searchBox = document.querySelector(".searchBar");

document.querySelector("#searchButton").onclick = () => {
  searchBox.classList.toggle("active");
  navbar.classList.remove("active");
  cartContainer.classList.remove("active");
};

let cartContainer = document.querySelector(".cart-container");

document.querySelector("#cartButton").onclick = () => {
  cartContainer.classList.toggle("active");
  navbar.classList.remove("active");
  searchBox.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchBox.classList.remove("active");
  cartContainer.classList.remove("active");
};

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    alert("On it! Task being done 😊");
  });
});

const slider = document.querySelector(".image-slider");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");

const images = ["welcome.jpg", "slider1.jpg", "slider2.jpg", "slider3.jpg"];

const headings = [
  "Welcome to the Pokémon World 🌍 – Your Adventure Begins Here! 🚀✨",
  "Explore our Pokémon Trading Cards emporium, showcasing an exclusive collection of vintage cards",
  "Our inventory features not only Trading Cards but also Pokémon miniatures.",
  "Take your pick from the diverse range of cards we have available.",
];

let sliderIndex = 0;

function slide(sliderIndex) {
  slider.style.backgroundImage = `url(images/${images[sliderIndex]})`;
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 550);

  heading.innerText = headings[sliderIndex];
}

leftArrow.addEventListener("click", () => {
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = images.length - 1;
  }
  slide(sliderIndex);
});

rightArrow.addEventListener("click", () => {
  sliderIndex++;
  if (sliderIndex > images.length - 1) {
    sliderIndex = 0;
  }
  slide(sliderIndex);
});
