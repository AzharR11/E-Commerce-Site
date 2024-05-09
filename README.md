# E-Commerce-Site
[Link to Website](https://azr11.com/)

![Image Alt text]https://github.com/AzharR11/E-Commerce-Site/blob/main/README%20files/mockup2.png?raw=true

---
## Description 
### Purpose 
The primary goal of this project was to develop a static e-commerce website hosted entirely on AWS, offering users a comprehensive shopping experience. The website allows users to browse products, search for items, view individual product pages, add items to their cart, and securely complete their purchases through a streamlined checkout process. Additionally, users have the option to create accounts, log in securely. For any inquiries or requests, users can conveniently contact the store via a contact form integrated into the website.

### Technologies
#### Website
The e-commerce website is carefully crafted using HTML, CSS, and JavaScript to offer users a seamless and immersive shopping experience. HTML serves as the backbone, structuring the website's layout and content with precision and clarity, while CSS steps in to stylize every element, ensuring a visually appealing presentation.

JavaScript enhances the user experience by powering dynamic functionalities such as scroll effects, slideshow transitions, search functionality, product rendering, user account management, checkout processes, basket rendering, and the contact form. Together, these technologies create a modern, user-centric e-commerce platform that captivates users and delivers a smooth and engaging browsing experience.

#### AWS
My objective was to optimize the deployment process by implementing robust automation solutions, thus I opted for CloudFormation. The initial stack was designed to configure essential hosting services required for the website, encompassing an S3 bucket for static web hosting, CloudFront for content delivery acceleration, ACM for SSL certificate management, and Route 53 for efficient custom domain routing. Upon the creation of this stack, the website was primed for hosting.

Next, I automated the file upload process using DevOps CI/CD practices to enhance efficiency. I established a cloned repository on my system linked to GitHub for version control. To automate continuous deployment, I created another CloudFormation script configuring CodePipeline. Leveraging my GitHub repository as the pipeline source, any changes made to the code on my system were seamlessly pushed to GitHub, triggering the pipeline to automatically deploy these changes to the designated S3 bucket.

During development, I observed the need for manual invalidations in CloudFront to clear cached content. To automate this, I created a Python Lambda function triggered by S3 events. Whenever new content was detected in the S3 bucket, the function generated a CloudFront cache invalidation, ensuring up-to-date content delivery.

Moreover, I implemented interactive forms on the website, including a user-friendly contact form. SES played a pivotal role in managing email communication, complemented by Lambda functions that processed form data and initiated appropriate actions based on the input received. API Gateway facilitated seamless communication between the forms and Lambda functions, ensuring efficient data exchange and task execution.

For user authentication and management, I seamlessly integrated Cognito, enabling users to navigate the website securely through hassle-free sign-in and sign-up processes. Each Lambda function was meticulously assigned suitable IAM roles, ensuring secure execution and data protection throughout the platform's operation.

---
## AWS Architecture![Uploading E-Commerce-Site.png…]()

![E-Commerce-Site](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/f192b6e8-53db-484f-86b8-618f9f7add9e)

---
## Deployment 
* The first step is to create a CloudFormation stack utilising the created YAML template, this will create and configure the necessary resources.

