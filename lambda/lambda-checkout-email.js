const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });

exports.handler = async function (event) {
  console.log('EVENT: ', event);

  // Extract the properties from the event body
  const { fullName, senderEmail, mobileNumber, deliveryAddress, deliveryAddress2, cityTown, zipPostcode, cart} = JSON.parse(event.body);

  let totalPrice = 0;
  cart.forEach(item => {
   totalPrice += parseFloat(item.price.replace('£', '').replace(',', '')) * item.quantity;
  })

  // Construct the email body with order details
  let emailBody = `Here are your order details:\n\
    
  Delivery Address:\n
  ${deliveryAddress}
  ${deliveryAddress2}
  ${cityTown}
  ${zipPostcode}\n\n
  Cart Items:\n`;

  cart.forEach(item => {
    emailBody += `- (${item.quantity}x) ${item.name}: ${item.price}\n`;
  });

  emailBody += `\nTotal: £${totalPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

  const params = {
    Destination: {
      ToAddresses: ["jdmcarscontact11@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: emailBody,
        },
      },
      Subject: {
        Data: `Order Details for ${fullName}`,
      },
    },
    Source: "jdmcarscontact11@gmail.com",
  };

  try {
    await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Order details email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send order details email" }),
    };
  }
};
