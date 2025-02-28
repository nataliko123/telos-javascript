// // index.js

// // Fetch products data from products.json
// fetch("products.json")
//   .then((response) => response.json())
//   .then((products) => {
//     // Find the container element in the HTML where categories will be displayed
//     const categoriesContainer = document.querySelector(".categories-container");

//     // Loop through each product and create category elements
//     products.forEach((product) => {
//       const categoryElement = document.createElement("div");
//       categoryElement.classList.add("category-item");

//       // Create an image element
//       const categoryImage = document.createElement("img");
//       categoryImage.src = product.image;
//       categoryImage.alt = `${product.category} image`;
//       categoryElement.appendChild(categoryImage);

//       // Create a description text element
//       const categoryText = document.createElement("p");
//       categoryText.textContent = product.description;
//       categoryElement.appendChild(categoryText);

//       // Append the category element to the container
//       categoriesContainer.appendChild(categoryElement);
//     });
//   })
//   .catch((error) => {
//     console.error("Error loading products:", error);
//   });

// index.js

document.addEventListener("DOMContentLoaded", function () {
  fetch("./products.json")
    .then((response) => response.json())
    .then((categories) => {
      const categoryWrapper = document.querySelector(".categories");
      categoryWrapper.innerHTML = ""; // Clear existing content

      categories.forEach((category) => {
        const card = document.createElement("div");
        card.classList.add("category-card");

        card.innerHTML = `
            // <img src="${category.image}" alt="${category.category}" />
            // <p>${category.category}</p>
            <img src="${category.image}"/>
            <p class="categories-p">${category.name}</p>
          `;

        categoryWrapper.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading category data:", error));
});
