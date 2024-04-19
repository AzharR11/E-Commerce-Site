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


/*
function searchProducts() {
    const searchInput = document.getElementById("search-input").value.toLowerCase().trim();
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchInput);
    });

    renderSearchResults(filteredProducts);
}

// Function to render search results
function renderSearchResults(filteredProducts) {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = ''; // Clear previous search results

    // Iterate over filtered products and create HTML elements to display them
    filteredProducts.forEach(product => {
        const searchItem = document.createElement("div");
        searchItem.classList.add("search-item");
        searchItem.textContent = product.name; // Display product name

        // Add click event listener to each search item
        searchItem.addEventListener("click", () => {
            // Redirect to the product page with the selected product's ID
            window.location.href = `product.html?id=${product.id}`;
        });

        searchResultsContainer.appendChild(searchItem);
    });

    // Show or hide the search results container based on whether there are matching items
    if (filteredProducts.length > 0) {
        searchResultsContainer.style.display = "block";
    } else {
        searchResultsContainer.style.display = "none";
    }
}

// Add event listener to the search input field
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", searchProducts);

*/
const cart = [];

// Function to generate HTML for product listings
function generateProductHTML(product) {
    return `
    <div class="product">
        <img src="images/${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price} / ${product.mileage}</p>
        <div class="product-actions">
            <input type="number" class="quantity-input" data-product-id="${product.id}" value="1" min="1">
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>    
    </div>`;
}

function generateProductHTML(product) {
    return `
    <div class="product">
        <a href="product.html?id=${product.id}"> <!-- Add link to individual product page -->
            <img src="images/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price} / ${product.mileage}</p>
        </a>
        <div class="product-actions">
            <input type="number" class="quantity-input" data-product-id="${product.id}" value="1" min="1">
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>    
    </div>`;
}

document.addEventListener("DOMContentLoaded", function() {
    // Extract the product ID from the URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // Fetch product details based on the ID
    const product = getProductById(productId);

    // Update the product details on the page
    if (product) {
        document.getElementById('product-image').innerHTML = `<img src="images/${product.image}" alt="${product.name}">`;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description; // Set product description
    }
});

// Function to fetch product details by ID (replace this with your actual data source)
function getProductById(productId) {
    // Example: Fetch product details from an array of products
    const products = [
        { id: 1, name: "Nissan Skyline GT-R (R34)", price: "£150,000", mileage: "50,000 miles" ,  image: "R34.webp" },
        { id: 2, name: "Nissan 400Z Veilside", price: "£65,000", mileage: "50,000 miles" ,  image: "400Z.jpg", description: "Officially called the FFZ400 and lovingly dubbed “Han’s 400Z”, the custom Z shares many similarities to VeilSide’s FD Mazda RX-7 driven by Han in the third Fast and Furious film. The iconic orange and black color scheme returns, and it’s even paired with the same VeilSide Andrew Forged wheels, this time in 20-inch diameter. The whole thing also rides on adjustable air suspension, ensuring the car has perpetually perfect fitment.<br><br>Looking at the body kit itself, the Z’s sheet metal has been modified significantly to give it a distinct, aggressive look. This includes new bumpers, a new diffuser, and a host of black aero bits in the form of front air curtains, fender vents, and side skirts that extend up into the rear quarter panel. There’s also a light widening applied to the car’s body, which features faux rivets and panel gaps to give the look of bolt-on over-fenders. Other nice details include fluted exhaust tips, a drag-style lip spoiler with endplates, a black hood accent similar to Nissan’s Z Customized Proto concept, and a wavy texture on the window trim inspired by the forging pattern of a katana.<br><br>Inside, the cabin features custom suede Bride seats, suede upholstery on the door cards, and a textured suede horn button on the steering wheel, all in black. There’s no word on how much power the Z makes, but we do know there will be a new exhaust and an ECU tune, which should help to boost the stock 400 hp (406 PS / 298 kW) and 350 lb-ft (475 Nm) of torque by a noticeable amount."},
        { id: 3, name: "Nissan GT-R NISMO (R35)", price: "£200,000", mileage: "50,000 miles" ,  image: "R35.webp" },
        { id: 4, name: "Nissan 350Z", price: "£30,000", mileage: "50,000 miles" ,  image: "350Z.jpg" },
        { id: 5, name: "Mazda RX-7 Veilside", price: "£90,000", mileage: "50,000 miles" ,  image: "RX7.jpg" },
        { id: 6, name: "Toyota Supra Top-Secret (MK4)", price: "£80,000", mileage: "50,000 miles", image: "SupraMK4.jpg" },
        { id: 7, name: "Honda NSX-R", price: "£45,000", mileage: "50,000 miles" ,  image: "NSX.jpg" },
        { id: 8, name: "Nissan 180SX", price: "£40,000", mileage: "50,000 miles" ,  image: "180SX.jpg" },
        { id: 9, name: "Mitsubishi EVO X", price: "£50,000", mileage: "50,000 miles" ,  image: "EVO.avif" }
    ];

    return products.find(product => product.id === parseInt(productId));
}

// Function to render product listings on the page
function renderProductListings() {
    const productContainer = document.getElementById("product-listings");
    productContainer.innerHTML = '';
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


function handleSorting() {
    const selectedAttribute = document.getElementById('sort-by').value;

    let sortedProducts;
    if (selectedAttribute === 'price-low-to-high') {
        sortedProducts = products.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (selectedAttribute === 'price-high-to-low') {
        sortedProducts = products.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (selectedAttribute === 'mileage-low-to-high') {
        sortedProducts = products.slice().sort((a, b) => parseFloat(a.mileage) - parseFloat(b.mileage));
    } else if (selectedAttribute === 'mileage-high-to-low') {
        sortedProducts = products.slice().sort((a, b) => parseFloat(b.mileage) - parseFloat(a.mileage));
    } else {
        // Default sorting option or invalid selection
        sortedProducts = products.slice();
    }

    renderProductListings(sortedProducts);
}
document.addEventListener("DOMContentLoaded", function() {
    renderProductListings(products); // Initial rendering of product listings

// Call renderProductListings function when the page loads
document.getElementById('sort-by').addEventListener('change', handleSorting);
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
    cartIcon.innerText = ` ${cart.length}`;
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
        totalPriceElement.textContent = `£${totalPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
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

const form = document.querySelector("#contact-form");
form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { name, email, message } = event.target;

	// Use your API endpoint URL you copied from the previous step
  const endpoint =
    "https://he3lqre0n0.execute-api.us-east-1.amazonaws.com/default/send-contact-email";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
	const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unkown error occured.";
    });
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

function redirectToAccountPage() {
    window.location.href = "account.html"; // Replace "login.html" with the path to your login/signup page
}

function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toggleLink = document.querySelector('.toggle-form a');
    const formTitle = document.getElementById('form-title');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        toggleLink.textContent = 'New to JDM Cars? Sign up here';
        formTitle.textContent = 'Login';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        toggleLink.textContent = 'Already have an account? Login here';
        formTitle.textContent = 'Sign Up';
    }
}

// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Fetch form data and perform login logic here
});

// Function to handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Fetch form data and perform signup logic here
});

