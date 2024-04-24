const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });

exports.handler = async function (event) {
  console.log('EVENT: ', event);

  // Extract the properties from the event body
  const { name, email, number, address, address2, city, postcode } = JSON.parse(event.body);

  // Construct the email body with order details
  const emailBody = `Here are your order details:\n\
    
    Delivery Address:\n
    Address Line 1: ${address}
    Address Line 2: ${address2}
    City: ${city}
    Postcode: ${postcode}`;

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
        Data: `Order Details for ${name}`,
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
