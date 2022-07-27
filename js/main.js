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
