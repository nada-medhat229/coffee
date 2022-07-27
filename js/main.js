let bars =document.querySelector(".navbar-toggler .fa-bars")
document.querySelector(".navbar-toggler .fa-bars").onclick = () => {
  console.log("yes");
  bars.style.top = "10%"
};
let cartItem = document.querySelector(".cart-item-container");
document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};
