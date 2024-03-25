const products = [
    { id: 1, name: "Nissan Skyline GT-R (R34)", price: "£150,000", mileage: "50,000 miles" ,  image: "R34.webp" },
    { id: 2, name: "Nissan 400Z Veilside", price: "£65,000", mileage: "50,000 miles" ,  image: "400Z.jpg" },
    { id: 3, name: "Nissan GT-R NISMO (R35)", price: "£200,000", mileage: "50,000 miles" ,  image: "R35.webp" },
    { id: 4, name: "Nissan 350Z", price: "£30,000", mileage: "50,000 miles" ,  image: "350Z.jpg" },
    { id: 5, name: "Mazda RX-7 Veilside", price: "£90,000", mileage: "50,000 miles" ,  image: "RX7.jpg" },
    { id: 6, name: "Toyota Supra Top-Secret (MK4)", price: "£80,000", mileage: "50,000 miles", image: "SupraMK4.jpg" },
    { id: 7, name: "Honda NSX-R", price: "£45,000", mileage: "50,000 miles" ,  image: "NSX.jpg" },
    { id: 8, name: "Nissan 180SX", price: "£40,000", mileage: "50,000 miles" ,  image: "180SX.jpg" },
    { id: 9, name: "Mitsubishi EVO X", price: "£50,000", mileage: "50,000 miles" ,  image: "EVO.avif" }
];

const cart = [];

// Function to generate HTML for product listings
function generateProductHTML(product) {
    return `
    <div class="product">
        <img src="Images/${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price} / ${product.mileage}</p>
        <div class="product-actions">
            <input type="number" class="quantity-input" data-product-id="${product.id}" value="1" min="1">
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>    
    </div>`;
}

// Function to render product listings on the page
function renderProductListings() {
    const productContainer = document.getElementById("product-listings");
    
    // Iterate over products in groups of 3
    for (let i = 0; i < products.length; i += 3) {
        // Create a div for each row
        const row = document.createElement("div");
        row.classList.add("product-row");

        // Add three products to the row
        for (let j = i; j < i + 3 && j < products.length; j++) {
            const product = products[j];
            const productHTML = generateProductHTML(product);
            row.innerHTML += productHTML;
        }

        // Append the row to the product container
        productContainer.appendChild(row);
    }
}
// Call renderProductListings function when the page loads
document.addEventListener("DOMContentLoaded", function() {
    renderProductListings();
});

// Function to handle adding product to cart (to be implemented)
function addToCart(productId) {
    // Find the product by ID
    const product = products.find(p => p.id === productId);
    
    // Get the quantity selected by the user
    const quantity = parseInt(document.querySelector(`[data-product-id="${productId}"]`).value);

    // Add the product to the cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
        cart.push({ ...product, quantity: 1 });
    }
    saveCartToLocalStorage();

    // Update the UI to reflect the changes in the cart
    updateCartUI();

    // Show an alert indicating the product has been added to cart
    alert(`${product.name} (${quantity}x) has been added to cart`);
}
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart data from localStorage and populate the cart
function loadCartFromLocalStorage() {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart.length = 0; // Clear current cart
        cart.push(...storedCart); // Populate cart with stored cart data
    }
}
// Function to update the UI to reflect the changes in the cart
function updateCartUI() {
    // Get the cart icon element
    const cartIcon = document.getElementById('cart-icon');
    // Update the number of items in the cart
    cartIcon.innerText = `🛒 ${cart.length}`;
    updateOrderSummary();
    updateTotalPrice();
}
document.addEventListener("DOMContentLoaded", function() {
    loadCartFromLocalStorage();
    updateCartUI();
})
function displayCartItems() {
    // Retrieve cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart'));

    // Check if cart data exists
    if (storedCart && storedCart.length > 0) {
        // Clear previous items in the order summary
        const orderItemsContainer = document.getElementById('orderItems');
        orderItemsContainer.innerHTML = '';

        const itemCounts = {};
        let totalPrice = 0;

        storedCart.forEach(item => {
            itemCounts[item.name] = (itemCounts[item.name] || 0) + item.quantity;
            totalPrice += parseFloat(item.price.replace('£', '').replace(',', '')) * item.quantity;
        });

        // Add each item from the stored cart data to the order summary
        for (const itemName in itemCounts) {
            const itemQuantity = itemCounts[itemName];
            const item = storedCart.find(item => item.name === itemName); // Get any item with the same name to extract price
            
            const itemHTML = `
            <div class="order-item">
                <span>${itemName}</span>
                <span>x${itemQuantity}</span>
                <span>${item.price}</span>
                <input type="number" class="item-quantity" value="${itemQuantity}" min="1">
                <button class="remove-item-btn" onclick="removeItem('${itemName}')">Remove</button>
            </div>`;
            orderItemsContainer.innerHTML += itemHTML;
        }

        // Update total price based on stored cart data
        const totalPriceElement = document.getElementById('totalPrice');
        totalPriceElement.textContent = `£${totalPrice.toFixed(2)}`;
    }
}
// Call the function to display cart items when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});

function removeItem(itemName) {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = storedCart.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCartItems();
}

// Function to update item quantity in cart
function updateItemQuantity(itemName, newQuantity) {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = storedCart.map(item => {
        if (item.name === itemName) {
            return { ...item, quantity: newQuantity };
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCartItems();
}
document.addEventListener('input', function(event) {
    if (event.target.classList.contains('item-quantity')) {
        const itemName = event.target.parentElement.querySelector('span:first-child').textContent;
        const newQuantity = parseInt(event.target.value);
        updateItemQuantity(itemName, newQuantity);
    }
});
// Function to redirect to the checkout page
function redirectToCheckout() {
    const totalPrice = calculateTotalPrice();
    window.location.href = `checkout.html?total=${totalPrice}`; // Redirect to checkout page with total price as query parameter
}
function calculateTotalPrice() {
    let totalPrice = 0;
    for (const product of cart) {
        totalPrice += parseFloat(product.price.replace('£', '').replace(',', ''));
        // Assuming the price is in the format '£X,XXX.XX', so we remove the pound sign and comma, then parse it as a float
    }
    return totalPrice.toFixed(2); // Round to 2 decimal places
}
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.textContent = `£${calculateTotalPrice()}`; // Update the content of the total price element
    }
}
function showCartDropdown() {
    const cartDropdown = document.getElementById('cartDropdown');
    // Clear previous content
    cartDropdown.innerHTML = '';

    // Count the quantity of each unique item in the cart
    const itemCounts = {};
    cart.forEach(item => {
        itemCounts[item.name] = (itemCounts[item.name] || 0) + 1;
    });

    // Populate dropdown with item quantities
    for (const itemName in itemCounts) {
        const quantity = itemCounts[itemName];
        const itemElement = document.createElement('div');
        itemElement.textContent = `${itemName} - x${quantity}`;
        cartDropdown.appendChild(itemElement);
    }

    // Calculate total price
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += parseFloat(item.price) * itemCounts[item.name];
    });

    // Display total price
    const totalElement = document.createElement('div');
    totalElement.textContent = `Total Price: £${totalPrice.toFixed(2)}`;
    cartDropdown.appendChild(totalElement);

    // Show dropdown by adding a class
    cartDropdown.classList.add('show');
}
function hideCartDropdown() {
    const cartDropdown = document.getElementById('cartDropdown');
    // Hide dropdown by removing the 'show' class
    cartDropdown.classList.remove('show');
}

