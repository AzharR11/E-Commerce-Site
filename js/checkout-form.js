// Select the checkout form
const form1 = document.querySelector("#checkout-form"); // Update the selector to target the correct form ID
// Listen for the form submission event
form1.addEventListener("submit", function (event) {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  // Retrieve form field values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const address = document.getElementById("address").value;
  const address2 = document.getElementById("address2").value;
  const city = document.getElementById("city").value;
  const postcode = document.getElementById("postcode").value;
  const cartItems = cart;
  
  // Define the API endpoint URL
  const endpoint =
    "https://d8cosi9k6d.execute-api.eu-west-1.amazonaws.com/default/order";

  const body = JSON.stringify({
    fullName: name,
    senderEmail: email,
    mobileNumber: number,
    deliveryAddress: address,
    deliveryAddress2: address2,
    cityTown: city,
    zipPostcode: postcode,
    cart: cartItems 
  });
  const requestOptions = {
    method: "POST",
    body,
  };

  // Send data to API endpoint
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
        "An unknown error occurred.";
    });
});

// Event listener for form field validation
document.addEventListener("DOMContentLoaded", function() {
  // Select form fields
  const cvvInput = document.getElementById("cvv");
  const expiryDateInput = document.getElementById("expiry-date");
  const cardNumberInput = document.getElementById("card-number");

  // Regex pattern for CVV (3 digits)
  const cvvPattern = /^\d{3}$/;

  // Regex pattern for expiry date (MM/YY format)
  const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

  // Regex pattern for card number (0000 0000 0000 0000 format)
  const cardNumberPattern = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;

  // Event listener for CVV input
  cvvInput.addEventListener("input", function(event) {
    const cvv = event.target.value;
    if (!cvvPattern.test(cvv)) {
      cvvInput.setCustomValidity("CVV must be a 3-digit number.");
    } else {
      cvvInput.setCustomValidity("");
    }
  });

  // Event listener for expiry date input
  expiryDateInput.addEventListener("input", function(event) {
    const expiryDate = event.target.value;
    if (!expiryDatePattern.test(expiryDate)) {
      expiryDateInput.setCustomValidity("Expiry date must be in MM/YY format.");
    } else {
      expiryDateInput.setCustomValidity("");
    }
  });

  // Event listener for card number input
  cardNumberInput.addEventListener("input", function(event) {
    const cardNumber = event.target.value;
    const normalizedCardNumber = cardNumber.replace(/\s/g, ''); // Remove spaces for validation

    if (!cardNumberPattern.test(normalizedCardNumber)) {
      cardNumberInput.setCustomValidity("Card number must be in 0000 0000 0000 0000 format.");
    } else {
      cardNumberInput.setCustomValidity("");
    }
  });
});
