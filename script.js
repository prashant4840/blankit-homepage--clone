// const searchInput = document.getElementById("searchInput");
// const products = document.querySelectorAll(".product");
// const cartCount = document.getElementById("cartCount");
// const cartTotal = document.getElementById("cartTotal");

// let cart = {};

// searchInput.addEventListener("input", function() {
//     let searchValue = searchInput.value.toLowerCase();

//     products.forEach(function(product) {
//         let productName = product.dataset.name.toLowerCase();

//         if (productName.includes(searchValue)) {
//             product.style.display = "";
//         } else {
//             product.style.display = "none";
//         }
//     });
// });

// products.forEach(function(product) {
//     let name = product.dataset.name;
//     let price = Number(product.querySelector("b").textContent.replace("₹", ""));
//     let button = product.querySelector("button");

//     button.addEventListener("click", function() {
//         if (cart[name]) {
//             cart[name].quantity++;
//         } else {
//             cart[name] = {
//                 price: price,
//                 quantity: 1
//             };
//         }

//         updateCart();
//         button.textContent = "Added (" + cart[name].quantity + ")";
//     });
// });

// function updateCart() {
//     let totalItems = 0;
//     let totalPrice = 0;

//     for (let name in cart) {
//         totalItems += cart[name].quantity;
//         totalPrice += cart[name].price * cart[name].quantity;
//     }

//     cartCount.textContent = totalItems;
//     cartTotal.textContent = totalPrice;
// }