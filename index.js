document.addEventListener("DOMContentLoaded", function () {
  fetch("./items/category.json")
    .then((response) => response.json())
    .then((categories) => {
      const firstPart = document.querySelector(".first-part");
      const secondPart = document.querySelector(".second-part");
      firstPart.innerHTML = ""; // Clear existing content
      secondPart.innerHTML = ""; // Clear existing content

      categories.forEach((category, index) => {
        const card = document.createElement("div");
        card.classList.add("category-card");

        // Corrected line below:
        card.innerHTML = `
            <img src="${category.image}" alt="${category.name}" /> 
            <p class="categories-p">${category.name}</p> 
          `;

        if (index < 3) {
          firstPart.appendChild(card);
        } else {
          secondPart.appendChild(card);
        }
      });
    })
    .catch((error) => console.error("Error loading category data:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("./items/items.json")
    .then((response) => response.json())
    .then((products) => {
      const allProductsWrappers = document.querySelectorAll(".all-products");

      // Clear existing content before appending new cards
      allProductsWrappers.forEach((wrapper) => {
        wrapper.innerHTML = "";
      });

      products.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img class="like-icon" src="${product.likeIcon}" alt="" />
            <div class="joined-products-content">
              <img class="product-img" src="${product.image}" alt="" />
              <h2 class="product-description">${product.name}</h2>
              <h2 class="product-price">${product.price}</h2>
            </div>
            <button class="product-button">Buy Now</button>
          `;

        // Distribute products into the two 'all-products' containers
        if (index < 4) {
          allProductsWrappers[0].appendChild(card);
        } else {
          allProductsWrappers[1].appendChild(card);
        }
      });
    })
    .catch((error) => console.error("Error loading product data:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  // ... (Your existing code to fetch and render regular products) ...

  fetch("./items/discounts.json")
    .then((response) => response.json())
    .then((discounts) => {
      const discountsContainer = document.querySelector(
        ".margin-bottom-discount .all-products"
      );
      discountsContainer.innerHTML = ""; // Clear existing discount products

      try {
        discounts.forEach((discount) => {
          const card = document.createElement("div");
          card.classList.add("product-card");

          card.innerHTML = `
              <img class="like-icon" src="${discount.likeIcon}" alt="" />
              <div class="joined-products-content">
                <img class="product-img" src="${discount.image}" alt="" />
                <h2 class="product-description">${discount.name}</h2>
                <h2 class="product-price">${discount.price}</h2>
              </div>
              <button class="product-button">Buy Now</button>
            `;

          discountsContainer.appendChild(card);
        });
      } catch (error) {
        console.error("Error rendering discount data:", error);
        // Optionally, display an error message to the user
      }
    })
    .catch((error) => console.error("Error loading discount data:", error));
});

// Initialize an empty cart array

// Function to add a product to the cart
function addToCart(product) {
  cart.push(product);
  console.log("Product added to cart:", product);
  // You can add code here to update the cart display on the page
}

document.addEventListener("DOMContentLoaded", function () {
  // ... (Your existing code to fetch and render regular products) ...

  // Add event listeners to "Buy Now" buttons for regular products
  const productButtons = document.querySelectorAll(
    ".all-products-wrapper .product-button"
  );
  productButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      fetch("./items/items.json")
        .then((response) => response.json())
        .then((products) => {
          addToCart(products[index]); // Add the corresponding product to the cart
        })
        .catch((error) =>
          console.error("Error adding product to cart:", error)
        );
    });
  });

  // ... (Your existing code to fetch and render discount products) ...

  // Add event listeners to "Buy Now" buttons for discount products
  const discountButtons = document.querySelectorAll(
    ".margin-bottom-discount .product-button"
  );
  discountButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      fetch("./items/discounts.json")
        .then((response) => response.json())
        .then((discounts) => {
          addToCart(discounts[index]); // Add the corresponding discount product to the cart
        })
        .catch((error) =>
          console.error("Error adding discount product to cart:", error)
        );
    });
  });
});

function addToCart(product) {
  cart.push(product);
  console.log("Product added to cart:", product);

  // Update the cart display
  const cartItemsList = document.getElementById("cart-items");
  const newItem = document.createElement("li");
  newItem.textContent = `${product.name} - ${product.price}`;
  cartItemsList.appendChild(newItem);
}

document.addEventListener("DOMContentLoaded", function () {
  // ... (Your existing code to fetch and render regular products) ...

  // Fetch and render the shopping cart items
  fetch("./shop.json")
    .then((response) => response.json())
    .then((cartItems) => {
      const productsContainer = document.querySelector(".products");
      productsContainer.innerHTML = ""; // Clear existing cart items

      cartItems.forEach((item) => {
        const cartProduct = document.createElement("div");
        cartProduct.classList.add("cart-product");

        cartProduct.innerHTML = `
            <div class="next-to-pic">
              <img src="${item.image}" alt="${item.name}" />
              <div class="joined-quantity-txt">
                <div class="product-joined-txt">
                  <h2 class="product-txt">${item.name}</h2>
                  <p class="code">${item.code}</p>
                </div>
                <div class="quantity">
                  <div class="product-counter">
                    <p>-</p>
                    <div class="number">${item.quantity}</div>
                    <p>+</p>
                  </div>
                  <div class="price-remove">
                    <span class="price">${item.price}</span>
                    <img src="./images2/Close.svg" alt="Remove" />
                  </div>
                </div>
              </div>
            </div>
          `;

        // Add a class for the third item
        if (item.code === "#63632324") {
          cartProduct.classList.add("cart-product-3");
        }

        productsContainer.appendChild(cartProduct);
      });
    })
    .catch((error) => console.error("Error loading cart items:", error));

  // ... (Your existing code to fetch and render discount products) ...
});

//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

document.addEventListener("DOMContentLoaded", function () {
  // Render main products from your preloaded 'items' array
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = ""; // Clear any existing content
  items.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <div class="mocemuloba">
          <div class="photos">
            <img src="./images/cart.png" alt="Cart Icon" />
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <p class="desc">
            ${product.name}
            ${product.screen || ""}
            ${product.storage || ""}
            ${product.connectivity || ""}
            ${product.color || ""}
            ${product.material || ""}
            ${product.model || ""}
            ${product.year || ""}
          </p>
          <p class="price">$${product.price}</p>
        </div>
        <button data-product-id="${product.id}" class="shop-now buy-now-link">
          Buy Now
        </button>
      `;
    productsContainer.appendChild(productElement);
  });

  // Render discount products from your preloaded 'discounts' array
  const discountContainer = document.getElementById("discount-products");
  discountContainer.innerHTML = "";
  discounts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <div class="mocemuloba">
          <div class="photos">
            <img src="./images/cart.png" alt="Cart Icon" />
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <p class="desc">
            ${product.name}
            ${product.screen || ""}
            ${product.storage || ""}
            ${product.connectivity || ""}
            ${product.color || ""}
            ${product.material || ""}
            ${product.model || ""}
            ${product.year || ""}
          </p>
          <p class="price">$${product.price}</p>
        </div>
        <button class="shop-now">
          <a href="${product.buy_link}">Buy Now</a>
        </button>
      `;
    discountContainer.appendChild(productElement);
  });

  // Render categories from your preloaded 'types' array
  const categoryContainer = document.getElementById("categoryContainer");
  categoryContainer.innerHTML = "";
  types.forEach((type) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    // Create and append the image and text elements
    const imgElement = document.createElement("img");
    imgElement.src = type.img;
    imgElement.alt = type.text;
    const pElement = document.createElement("p");
    pElement.textContent = type.text;
    categoryDiv.appendChild(imgElement);
    categoryDiv.appendChild(pElement);

    categoryContainer.appendChild(categoryDiv);
  });

  // Event listener for "Buy Now" buttons on main products
  document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("buy-now-link")) {
      event.preventDefault();
      const productId = event.target.getAttribute("data-product-id");
      const product = items.find((p) => p.id == productId);
      if (product) {
        // Retrieve the cart from localStorage (or create a new one)
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingIndex = cart.findIndex((p) => p.id === product.id);
        if (existingIndex >= 0) {
          cart[existingIndex].quantity += 1;
        } else {
          product.quantity = 1;
          cart.push(product);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Product added to cart:", product);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the container where cart items will be rendered
  const cartContainer = document.querySelector(".shopping-cart .products");
  // Get summary elements by their IDs (make sure these IDs exist in your HTML)
  const subtotalElem = document.getElementById("subtotal-value");
  const taxElem = document.getElementById("tax-value");
  const shippingElem = document.getElementById("shipping-value");
  const totalElem = document.getElementById("total-value");

  // Fixed values for tax and shipping
  const taxAmount = 50; // Fixed tax value
  const shippingAmount = 29; // Fixed shipping value

  // Retrieve cart data from localStorage (or use an empty array)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Function to update the order summary based on the cart
  function updateSummary() {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    let total = subtotal + taxAmount + shippingAmount;
    subtotalElem.textContent = "$" + subtotal.toFixed(2);
    taxElem.textContent = "$" + taxAmount;
    shippingElem.textContent = "$" + shippingAmount.toFixed(2);
    totalElem.textContent = "$" + total.toFixed(2);
  }

  // Function to render cart items in the .products container
  function renderCart() {
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      subtotalElem.textContent = "$0.00";
      taxElem.textContent = "$0";
      shippingElem.textContent = "$0.00";
      totalElem.textContent = "$0.00";
      return;
    }
    cart.forEach((product, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-product");
      cartItem.setAttribute("data-product-id", product.id);
      cartItem.innerHTML = `
          <div class="next-to-pic">
            <img src="${product.image}" alt="${product.name}" />
            <div class="joined-quantity-txt">
              <div class="product-joined-txt">
                <h2 class="product-txt">${product.name}</h2>
                <p class="code">#${product.id}</p>
              </div>
            </div>
          </div>
          <div class="quantity">
            <p class="decrease" data-index="${index}">-</p>
            <div class="number">${product.quantity}</div>
            <p class="increase" data-index="${index}">+</p>
          </div>
          <span class="price">$${(product.price * product.quantity).toFixed(
            2
          )}</span>
          <img src="./images2/Close.svg" alt="Remove" class="remove-item" data-index="${index}" />
        `;
      cartContainer.appendChild(cartItem);
    });
    updateSummary();
  }

  // Function to save the updated cart to localStorage and re-render the cart
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  // Attach event listeners for increment, decrement, and remove actions using event delegation
  cartContainer.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("increase")) {
      const index = target.dataset.index;
      cart[index].quantity += 1;
      saveCart();
    } else if (target.classList.contains("decrease")) {
      const index = target.dataset.index;
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        // If quantity is 1 and decrement is clicked, remove the item
        cart.splice(index, 1);
      }
      saveCart();
    } else if (target.classList.contains("remove-item")) {
      const index = target.dataset.index;
      cart.splice(index, 1);
      saveCart();
    }
  });

  // Initial render of the cart
  renderCart();
});

// Initialize cart in localStorage if it doesn't exist
let cart = JSON.parse(localStorage.getItem("cart")) || [];
localStorage.setItem("cart", JSON.stringify(cart));

// Modified addToCart function
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  const existingProduct = cart.find((item) => item.name === product.name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Update cart count in header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const cartIcon = document.querySelector(".shopping-cart");
  if (cartIcon) {
    cartIcon.setAttribute("data-count", cart.length);
  }
}

// Event delegation for Buy Now buttons
document.addEventListener("click", function (e) {
  if (e.target.closest(".product-button")) {
    const productCard = e.target.closest(".product-card");
    const product = {
      name: productCard.querySelector(".product-description").textContent,
      price: productCard.querySelector(".product-price").textContent,
      image: productCard.querySelector(".product-img").src,
      code: "#" + Math.floor(Math.random() * 100000000000000),
    };
    addToCart(product);
  }
});

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", updateCartCount);

// In your shopping cart page JS
document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const productsContainer = document.querySelector(".products");

  // Clear existing content
  productsContainer.innerHTML = "";

  // Render cart items
  cart.forEach((item) => {
    const cartItemHTML = `
            <div class="cart-product">
                <div class="next-to-pic">
                    <img src="${item.image}" alt="${item.name}" />
                    <div class="joined-quantity-txt">
                        <div class="product-joined-txt">
                            <h2 class="product-txt">${item.name}</h2>
                            <p class="code">${item.code}</p>
                        </div>
                        <div class="quantity">
                            <div class="product-counter">
                                <p class="decrement">-</p>
                                <div class="number">${item.quantity}</div>
                                <p class="increment">+</p>
                            </div>
                            <div class="price-remove">
                                <span class="price">${item.price}</span>
                                <img src="./images2/Close.svg" alt="Remove" class="remove" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    productsContainer.insertAdjacentHTML("beforeend", cartItemHTML);
  });
});

// aqedan axaliaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".products");

  cartContainer.addEventListener("click", function (event) {
    const target = event.target;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (target.classList.contains("increment")) {
      const index = target.dataset.index;
      cart[index].quantity += 1;
      saveCart(cart);
    } else if (target.classList.contains("decrement")) {
      const index = target.dataset.index;
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      saveCart(cart);
    } else if (target.classList.contains("remove")) {
      const index = target.dataset.index;
      cart.splice(index, 1);
      saveCart(cart);
    }
  });
});

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(cart);
  updateSummary(cart);
}

document.addEventListener("click", function (e) {
  if (e.target.closest(".product-button")) {
    const productCard = e.target.closest(".product-card");
    const priceText = productCard.querySelector(".product-price").textContent;
    const price = parseFloat(priceText.replace("$", ""));

    const product = {
      name: productCard.querySelector(".product-description").textContent,
      price: price,
      image: productCard.querySelector(".product-img").src,
      code: "#" + Math.floor(Math.random() * 100000000000000),
    };
    addToCart(product);
  }
});

function renderCart(cart) {
  const cartContainer = document.querySelector(".products");
  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const totalPrice = (item.price * item.quantity).toFixed(2);
    const cartItem = `
        <div class="cart-product">
          <div class="next-to-pic">
            <img src="${item.image}" alt="${item.name}" />
            <div class="joined-quantity-txt">
              <div class="product-joined-txt">
                <h2 class="product-txt">${item.name}</h2>
                <p class="code">${item.code}</p>
              </div>
              <div class="quantity">
                <div class="product-counter">
                  <p class="decrement" data-index="${index}">-</p>
                  <div class="number">${item.quantity}</div>
                  <p class="increment" data-index="${index}">+</p>
                </div>
                <div class="price-remove">
                  <span class="price">$${totalPrice}</span>
                  <img src="./images2/Close.svg" alt="Remove" class="remove" data-index="${index}" />
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    cartContainer.insertAdjacentHTML("beforeend", cartItem);
  });
}

function updateSummary(cart) {
  const subtotalElem = document.querySelector(".subtotal");
  const taxElem = document.querySelector(".tax");
  const shippingElem = document.querySelector(".shipping");
  const totalElem = document.querySelector(".total");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = 50;
  const shipping = 29;
  const total = subtotal + tax + shipping;

  subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
  taxElem.textContent = `$${tax.toFixed(2)}`;
  shippingElem.textContent = `$${shipping.toFixed(2)}`;
  totalElem.textContent = `$${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".product-counter").forEach((counter) => {
    const minusBtn = counter.children[0];
    const quantityDisplay = counter.children[1];
    const plusBtn = counter.children[2];
    const priceElement = counter
      .closest(".cart-product")
      .querySelector(".price");
    const basePrice = parseFloat(priceElement.textContent.replace("$", ""));

    function updatePrice(quantity) {
      priceElement.textContent = "$" + (basePrice * quantity).toFixed(2);
    }

    minusBtn.addEventListener("click", function () {
      let quantity = parseInt(quantityDisplay.textContent);
      if (quantity > 1) {
        quantity -= 1;
        quantityDisplay.textContent = quantity;
        updatePrice(quantity);
      }
    });

    plusBtn.addEventListener("click", function () {
      let quantity = parseInt(quantityDisplay.textContent);
      quantity += 1;
      quantityDisplay.textContent = quantity;
      updatePrice(quantity);
    });
  });
});

// Add this RIGHT AFTER your existing cart update logic
function refreshPrices() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const subtotal = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );
  document.querySelector(
    ".total-prices-header-gap .subtotal:last-child"
  ).textContent = `$${subtotal + 79}`;
}
// Add this line INSIDE EVERY FUNCTION that modifies the cart
// Like in addToCart(), removeFromCart(), etc.
refreshPrices(); // ← Add this
