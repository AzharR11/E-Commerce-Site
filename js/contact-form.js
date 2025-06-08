// Select the contact form
const form1 = document.querySelector("#contact-form");
// Listen for the form submission event
form1.addEventListener("submit", function  (event) {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  // Destructure form fields from the event target
  const { name, email, message } = event.target;

	// Define the API endpoint URL
  const endpoint =
    "https://d8cosi9k6d.execute-api.eu-west-1.amazonaws.com/default/contact";

  const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  // Send data to the API endpoint
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
    console.error("Error:", error);
      document.getElementById("result-text").innerText =
        "An unkown error occured.";
    });
});