const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000
  }
];

const productDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");

function loadProducts() {

  products.forEach(product => {

    productDiv.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>

        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

function addToCart(id) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function displayCart() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartDiv.innerHTML = "";

  cart.forEach(item => {

    cartDiv.innerHTML += `
      <p>
        ${item.name} - ₹${item.price}
      </p>
    `;
  });
}

loadProducts();
displayCart();