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

