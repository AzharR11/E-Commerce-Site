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

const products = [
    { id: 1, name: "Nissan Skyline GT-R (R34)", price: "£150,000", mileage: "43,253 miles" ,  image: "R34.webp" },
    { id: 2, name: "Nissan 400Z Veilside", price: "£65,000", mileage: "3,680 miles" ,  image: "400Z.jpg" },
    { id: 3, name: "Nissan GT-R NISMO (R35)", price: "£200,000", mileage: "0 miles" ,  image: "R35.webp" },
    { id: 4, name: "Nissan 350Z", price: "£30,000", mileage: "76,271 miles" ,  image: "350Z.jpg" },
    { id: 5, name: "Mazda RX-7 Veilside", price: "£90,000", mileage: "54,231 miles" ,  image: "RX7.jpg" },
    { id: 6, name: "Toyota Supra Top-Secret (MK4)", price: "£80,000", mileage: "79,260 miles", image: "SupraMK4.jpg" },
    { id: 7, name: "Honda NSX-R", price: "£45,000", mileage: "32,492 miles" ,  image: "NSX.jpg" },
    { id: 8, name: "Nissan 180SX", price: "£40,000", mileage: "102,280 miles" ,  image: "180SX.jpg" },
    { id: 9, name: "Mitsubishi Lancer EVO X", price: "£50,000", mileage: "80,239 miles" ,  image: "EVO.avif" }
];

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
        document.getElementById('product-stats').innerHTML = `${product.price} / ${product.mileage}`;
        document.getElementById('product-description').textContent = product.description; // Set product description

        const productActions = document.getElementById('product-actions');
        productActions.innerHTML = `
            <input type="number" class="quantity-input" data-product-id="${product.id}" value="1" min="1">
            <button class="add-to-cart-btn">Add to Cart</button>
        `;

        // Add event listener to the "Add to Cart" button
        const addToCartBtn = productActions.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', function() {
            addToCart(product.id);
        });
    }
});

// Function to fetch product details by ID (replace this with your actual data source)
function getProductById(productId) {
    // Example: Fetch product details from an array of products
    const products = [
        { id: 1, name: "Nissan Skyline GT-R (R34)", price: "£150,000", mileage: "43,253 miles" ,  image: "R34.webp", description: "The R34 Skyline GT-R was introduced in January 1999, featuring several improvements over its predecessor. Notably, it was shorter and had a reduced front overhang. The valve covers were painted glossy red, distinguishing it from previous models. One significant addition to the R34 GT-R was the inclusion of a 5.8 LCD multifunction display on the dashboard, providing various live readings of engine and vehicle statistics. The V·Spec model expanded on this with additional features like intake and exhaust gas temperatures. Responding to customer feedback about the R33's size, Nissan made the R34 GT-R shorter. Both the V·Spec and standard models came equipped with the ATTESA E-TS Pro system and an Active LSD at the rear, with the V·Spec boasting firmer suspension and lower ground clearance. Similar to previous generations, Nissan introduced an R34 V·Spec N1 model, a homologation special sold without certain amenities like air conditioning and audio equipment. A limited number were produced, primarily for racing teams and tuning garages. In October 2000, Nissan unveiled the V·Spec II, offering increased suspension stiffness and larger rear brake rotors. The V·Spec II N1 variant featured similar enhancements, along with a carbon fiber bonnet. In May 2001, the M·Spec variant debuted, featuring Ripple control dampers, revised suspension, and a leather interior with heated front seats. In February 2002, Nissan released the final production models of the R34 GT-R: the Skyline GT-R V·Spec II Nür and the Skyline GT-R M·Spec Nür, named after the Nürburgring racetrack. These models featured an improved RB26DETT engine, upgraded turbochargers, and distinctive interior trim. Overall, the R34 Skyline GT-R represented a culmination of Nissan's engineering prowess, delivering enhanced performance and driving experience compared to its predecessors." },
        { id: 2, name: "Nissan 400Z Veilside", price: "£65,000", mileage: "3,680 miles" ,  image: "400Z.jpg", description: "Officially called the FFZ400 and lovingly dubbed “Han’s 400Z”, the custom Z shares many similarities to VeilSide’s FD Mazda RX-7 driven by Han in the third Fast and Furious film. The iconic orange and black color scheme returns, and it’s even paired with the same VeilSide Andrew Forged wheels, this time in 20-inch diameter. The whole thing also rides on adjustable air suspension, ensuring the car has perpetually perfect fitment.\nLooking at the body kit itself, the Z’s sheet metal has been modified significantly to give it a distinct, aggressive look. This includes new bumpers, a new diffuser, and a host of black aero bits in the form of front air curtains, fender vents, and side skirts that extend up into the rear quarter panel. There’s also a light widening applied to the car’s body, which features faux rivets and panel gaps to give the look of bolt-on over-fenders. Other nice details include fluted exhaust tips, a drag-style lip spoiler with endplates, a black hood accent similar to Nissan’s Z Customized Proto concept, and a wavy texture on the window trim inspired by the forging pattern of a katana.\nInside, the cabin features custom suede Bride seats, suede upholstery on the door cards, and a textured suede horn button on the steering wheel, all in black. There’s no word on how much power the Z makes, but we do know there will be a new exhaust and an ECU tune, which should help to boost the stock 400 hp (406 PS / 298 kW) and 350 lb-ft (475 Nm) of torque by a noticeable amount."},
        { id: 3, name: "Nissan GT-R NISMO (R35)", price: "£200,000", mileage: "0 miles" ,  image: "R35.webp", description: "The Nissan GT-R Nismo Edition 2024 stands as the pinnacle of performance and innovation, a true testament to Nissan's engineering prowess. This formidable machine pushes the boundaries of automotive technology, combining raw power with precision engineering to deliver an exhilarating driving experience. At the heart of the GT-R Nismo Edition beats a twin-turbocharged 3.8-liter V6 engine, meticulously tuned by Nismo engineers to unleash an astounding output of over 600 horsepower. With lightning-fast acceleration and relentless torque delivery, this powerhouse propels the GT-R from 0 to 60 mph in mere seconds, effortlessly conquering both straightaways and corners with unmatched agility. Every aspect of the GT-R Nismo Edition is honed for performance, from its aerodynamic bodywork to its track-tuned suspension system. The carbon-fiber rear wing and aggressive front splitter not only enhance downforce but also contribute to the car's striking appearance, commanding attention wherever it roams. Meanwhile, the precision-tuned suspension, lightweight forged wheels, and high-performance tires ensure razor-sharp handling and uncompromising grip, allowing drivers to push the limits with confidence. Step inside the cockpit, and you'll find a driver-focused environment designed to elevate the driving experience to new heights. Premium materials, ergonomic design, and cutting-edge technology converge to create a space where driver and machine become one. From the carbon-fiber-trimmed dashboard to the Alcantara-wrapped steering wheel, every detail exudes sophistication and performance. But the GT-R Nismo Edition is not just a track-focused beast—it's also a master of refinement and comfort. With its luxurious interior appointments, advanced infotainment system, and driver-assistance features, it offers a level of comfort and convenience befitting a grand tourer, making it equally at home on long journeys as it is on the race track." },
        { id: 4, name: "Nissan 350Z", price: "£30,000", mileage: "76,271 miles" ,  image: "350Z.jpg", description: "The Nissan 350Z, a modern-day classic, represents the pinnacle of Japanese sports car engineering. With its striking design, exhilarating performance, and spirited driving dynamics, the 350Z has captured the hearts of automotive enthusiasts around the globe. Under the hood lies a potent V6 engine, delivering a symphony of power and torque that propels the 350Z with effortless grace. Its responsive throttle response and seamless power delivery make every journey an exhilarating experience, whether navigating city streets or tearing up the track. From its sleek, aerodynamic exterior to its driver-focused interior, the 350Z exudes a sense of purposeful aggression. The muscular lines, pronounced wheel arches, and distinctive profile turn heads wherever it goes, while the low-slung stance and wide track hint at its performance capabilities. Inside the cockpit, the driver is greeted by a sporty and refined environment, where every detail is meticulously crafted for maximum comfort and control. From the supportive bucket seats to the intuitive controls and advanced infotainment system, the 350Z puts the driver at the center of the action. But the true magic of the Nissan 350Z lies in its dynamic performance on the road. With precise handling, sharp steering, and nimble agility, it effortlessly carves through corners and hugs the road with confidence-inspiring stability. Whether you're pushing it to its limits on the track or enjoying a spirited drive on your favorite winding road, the 350Z delivers an unforgettable driving experience every time."},
        { id: 5, name: "Mazda RX-7 Veilside", price: "£90,000", mileage: "54,231 miles" ,  image: "RX7.jpg", description:"The Mazda RX-7 Veilside is a legendary icon in the realm of Japanese sports cars, renowned for its sleek design and exhilarating performance. Born from the collaboration between Mazda's engineering prowess and the innovative styling of Veilside, this iconic vehicle embodies the spirit of automotive excellence. At the heart of the RX-7 Veilside lies a rotary engine, delivering power with a distinctively smooth and responsive throttle response. This lightweight powerplant, combined with a finely-tuned chassis, offers an unparalleled driving experience, whether carving through winding mountain roads or dominating the racetrack.Visually, the RX-7 Veilside captivates with its aggressive yet elegant styling. From the sweeping curves of its bodywork to the aerodynamic enhancements crafted by Veilside, every aspect of its design exudes a sense of speed and precision. The signature widebody kit, sculpted hood vents, and distinctive rear wing not only enhance its performance but also make a bold statement on the road. Step inside the cockpit, and you're greeted by a driver-centric interior that seamlessly blends form and function. High-quality materials, ergonomic controls, and advanced technology create an immersive driving environment, putting you in complete command of the road ahead. Whether you're a seasoned enthusiast or simply appreciate automotive excellence, the Mazda RX-7 Veilside is a true masterpiece that continues to inspire admiration and awe among car enthusiasts worldwide."},
        { id: 6, name: "Toyota Supra Top-Secret (MK4)", price: "£80,000", mileage: "79,260 miles", image: "SupraMK4.jpg", description: "The Top Secret Modified Toyota Supra with a V12 Engine stands as a true testament to automotive ingenuity and performance prowess. Born from the vision of Top Secret's skilled engineers and craftsmen, this iconic sports car transcends conventional boundaries, delivering an unmatched driving experience that pushes the limits of what's possible on the road. At the heart of this beast lies a potent V12 engine, meticulously crafted and fine-tuned to deliver exhilarating power and torque across the entire rev range. With its symphonic exhaust note and relentless acceleration, the V12 engine transforms the Supra into a high-performance machine that commands attention and respect wherever it goes. Externally, the Top Secret Modified Supra exudes an aura of aggressive sophistication. From its sleek, aerodynamic body lines to its wide stance and muscular proportions, every aspect of its design is carefully engineered to maximize performance and aerodynamic efficiency. With bespoke carbon fiber components, lightweight alloy wheels, and a menacing stance, it's a sight to behold both on the road and at the track. Step inside the cockpit, and you're greeted by a driver-focused environment that blends luxury with performance. Premium materials, exquisite craftsmanship, and cutting-edge technology create an atmosphere of refinement and control, while racing-inspired elements remind you of the Supra's track-ready pedigree. But it's on the road where the Top Secret Modified Supra truly comes alive. With its precise handling, razor-sharp steering, and agile dynamics, it carves through corners with unparalleled precision and poise. Whether attacking a mountain pass or tearing up the racetrack, the Supra's performance capabilities are nothing short of breathtaking, offering an adrenaline-fueled driving experience that leaves a lasting impression on all who dare to tame it."},
        { id: 7, name: "Honda NSX-R", price: "£45,000", mileage: "32,492 miles" ,  image: "NSX.jpg", description: "The 1992 Honda NSX Type R epitomizes the essence of Japanese automotive engineering excellence, representing the pinnacle of performance and precision in the supercar realm. Born from Honda's relentless pursuit of perfection, this iconic sports car combines cutting-edge technology with motorsport-inspired design to deliver an exhilarating driving experience like no other. Under the sleek and aerodynamic exterior lies a heart of pure performance: a high-revving, naturally aspirated V6 engine meticulously tuned by Honda's finest engineers. With its lightweight construction, advanced variable valve timing, and race-derived internals, the NSX Type R unleashes a symphony of power and agility that propels it to new heights of performance. From the moment you lay eyes on it, the NSX Type R captivates with its timeless design and unmistakable presence. With its low-slung profile, aggressive aerodynamics, and iconic pop-up headlights, every curve and contour is crafted to maximize both form and function, ensuring optimal performance and aerodynamic efficiency. Step inside the cockpit, and you're greeted by a driver-centric interior designed to immerse you in the driving experience. With its minimalist layout, lightweight materials, and ergonomic controls, every aspect of the cabin is engineered to enhance connectivity between man and machine, placing you firmly in control of the exhilarating performance at your fingertips. But it's on the open road where the NSX Type R truly shines. With its razor-sharp handling, responsive steering, and confidence-inspiring grip, it dances through corners with surgical precision, delivering a level of agility and responsiveness that few cars can match. Whether carving through mountain passes or tearing up the track, the NSX Type R excels at pushing the limits of performance while providing a thrilling and engaging driving experience." },
        { id: 8, name: "Nissan 180SX", price: "£40,000", mileage: "102,280 miles" ,  image: "180SX.jpg", description: "The Nissan 180SX, a legendary icon in the world of drifting and Japanese sports cars, is revered for its sleek silhouette, agile handling, and turbocharged power. Born from Nissan's lineage of performance-oriented vehicles, the 180SX embodies the spirit of excitement and adrenaline that defines the golden era of Japanese automotive culture. At the heart of the 180SX lies a potent turbocharged engine, delivering a rush of power that propels it effortlessly down the road. With its lightweight chassis and rear-wheel-drive configuration, the 180SX offers a thrilling driving experience, whether on the open road or the race track. Its nimble handling and precise steering make it a favorite among enthusiasts, allowing drivers to confidently tackle corners and drift with ease. Visually, the 180SX captivates with its timeless design and unmistakable presence. Characterized by its sleek lines, distinctive pop-up headlights, and iconic rear wing, the 180SX exudes a sense of purpose and performance that commands attention wherever it goes. From the aggressive front fascia to the sculpted rear end, every detail is meticulously crafted to enhance aerodynamics and aesthetics. Step inside the cockpit, and you'll find a driver-focused interior designed to maximize control and comfort. With its sporty bucket seats, ergonomic controls, and intuitive layout, the 180SX puts the driver at the center of the action, creating a cockpit that feels like an extension of the driver's own body. From spirited canyon runs to spirited drift sessions, the 180SX offers an immersive driving experience that leaves a lasting impression on anyone who has the pleasure of behind the wheel." },
        { id: 9, name: "Mitsubishi Lancer EVO X", price: "£50,000", mileage: "80,239 miles" ,  image: "EVO.avif", description: "The Mitsubishi Lancer Evolution X, often affectionately referred to as the 'Evo X,' is the culmination of Mitsubishi's rally-bred heritage and high-performance engineering. Renowned for its fierce turbocharged power, precise handling, and aggressive styling, the Evo X stands as a testament to Mitsubishi's unwavering commitment to automotive excellence. Under the hood lies a potent turbocharged engine, delivering exhilarating performance that pushes the boundaries of what's possible on both the road and the track. With its advanced all-wheel-drive system and sophisticated suspension setup, the Evo X offers unmatched traction and cornering prowess, allowing drivers to tackle twisty roads and challenging conditions with confidence and precision. Visually, the Evo X commands attention with its bold and aggressive styling cues. From its muscular stance and distinctive hood scoop to its iconic rear wing and menacing front grille, every aspect of the Evo X's design is crafted to enhance aerodynamics and performance. With its sleek lines and aerodynamic profile, the Evo X exudes a sense of purpose and performance that sets it apart from the competition. Step inside the cockpit, and you'll find a driver-focused interior that puts you squarely in control. With its supportive bucket seats, ergonomic controls, and intuitive layout, the Evo X provides a cockpit that feels like an extension of the driver's own body. From spirited drives on winding roads to adrenaline-fueled track days, the Evo X delivers an immersive driving experience that leaves a lasting impression on anyone lucky enough to experience it. But the Evo X is more than just a high-performance machine; it's a symbol of Mitsubishi's racing heritage and dedication to pushing the limits of automotive engineering. With its combination of turbocharged power, precise handling, and unmistakable style, the Evo X continues to captivate enthusiasts around the world and solidify its place as one of the most iconic sports cars of its generation." }
    ];

    const product = products.find(product => product.id === parseInt(productId));

    // Wrap the description with <p> tags and replace '\n' characters with '<br>' tags
    if (product.description) {
        product.description = product.description.replace(/\n/g, "<br/>");
    }

    return product;
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





