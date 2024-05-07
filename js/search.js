// Function to render search results
function renderSearchResults(filteredProducts, searchInput) {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = ''; // Clear previous search results

    // Iterate over filtered products and create HTML elements to display them
    filteredProducts.forEach(product => {
        const searchItem = document.createElement("div");
        searchItem.classList.add("search-item");

        // Highlight matching text
        const name = product.name.toLowerCase();
        const index = name.indexOf(searchInput.toLowerCase());
        const highlightedName = `${product.name.slice(0, index)}<span class="highlight">${product.name.slice(index, index + searchInput.length)}</span>${product.name.slice(index + searchInput.length)}`;

        // Display product name with matching text highlighted
        searchItem.innerHTML = highlightedName;

        // Add click event listener to each search item
        searchItem.addEventListener("click", () => {
            // Redirect to the product page with the selected product's ID
            window.location.href = `product.html?id=${product.id}`;
        });

        searchResultsContainer.appendChild(searchItem);
    });

    // Toggle visibility of search results container based on whether there are matching items
    searchResultsContainer.style.display = filteredProducts.length > 0 ? "block" : "none";
}

// Function to close search results
function closeSearchResults() {
    const searchResultsContainer = document.getElementById("search-results");
    const nav = document.querySelector("nav");
    searchResultsContainer.style.display = "none";
    nav.classList.remove("hidden"); // Show navigation links when search results are closed
}

// Function to perform search
function searchProducts() {
    const searchInput = document.getElementById("search-input").value.toLowerCase().trim();
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchInput);
    });

    renderSearchResults(filteredProducts, searchInput); // Pass searchInput to renderSearchResults

    // Toggle class to hide/show navigation links when search results are displayed
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden", filteredProducts.length > 0);
}

// Add event listener to the search input field
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", searchProducts);

// Add event listener to close search results when any other part of the page is clicked
document.addEventListener("click", (event) => {
    const searchContainer = document.querySelector(".search-container");
    if (!event.target.closest(".search-container")) {
        closeSearchResults();
    }
});

// Add event listener to close search results when the search text is deleted
searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
        closeSearchResults();
    }
});

// Add event listener to close search results when the page is scrolled
window.addEventListener("scroll", closeSearchResults);
