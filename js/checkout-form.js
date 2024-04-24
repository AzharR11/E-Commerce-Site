const form1 = document.querySelector("#checkout-form"); // Update the selector to target the correct form ID
form1.addEventListener("submit", function (event) {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  // Retrieve form field values
  const { name, email, number, address, address2, city, postcode } = event.target;

  // Use your API endpoint URL you copied from the previous step
  const endpoint =
    "https://6fno0qpx3d.execute-api.us-east-1.amazonaws.com/default/checkout-email";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
  const body = JSON.stringify({
    fullName: name.value,
    senderEmail: email.value,
    mobileNumber: number.value,
    deliveryAddress: address.value,
    deliveryAddress2: address2.value,
    cityTown: city.value,
    zipPostcode: postcode.value
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