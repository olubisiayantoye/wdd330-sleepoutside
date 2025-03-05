import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function addProductToCart(product) {
  let cart = getLocalStorage("so-cart") || []; // Get existing cart or initialize an empty array
  cart.push(product); // Add new product to cart
  setLocalStorage("so-cart", cart); // Save updated cart
}


// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);



  