# E-Commerce-Site
[Link to Website](https://azr11.com/)

![Image Alt text](https://github.com/AzharR11/E-Commerce-Site/blob/main/README%20files/E-Commerce-Mockup.jpg?raw=true)

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
## AWS Architecture

![Image Alt text](https://github.com/AzharR11/E-Commerce-Site/blob/main/README%20files/E-Commerce-Site.png?raw=true)

---
## GitHub setup

* Repo has been created on github now it needs to be cloned on the local system.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/2ea3ce71-4301-4f3a-b794-05970a4aca9f)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/14bac0ba-26c2-4a9f-a088-b718de38fc89)

## Resource deployment for site hosting

* The first step is to create a CloudFormation stack utilising the created YAML template, this will create and configure the necessary resources.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/db304ac8-bb46-4f1d-bcfe-fa2ad8e00cf8)

* The name of the bucket can be configured at the time of stack creation, this was made possible because of the parameters section added in the YAML template.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/6513b187-a2d7-402e-9216-28ad236ceaef)

* Once the stack has been created the CNAME's from the created SSL certificate need to be added manually into the created hosted zone in order to verify and issue the certificate.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/1f179bf1-1d74-4187-926c-36a7acb39105)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/28457a4c-c6dd-48f0-a28b-cd9e290d0dd5)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/d79b013c-94fd-4f04-ad6d-a6743c43ff31)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/7fc52497-11c7-4d76-8300-9c6225b1b698)

* The registered domain name must also hve the same NS as the ones in the created hosted zone.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/5dc63023-55b7-474a-bcc1-b1a055bedbd3)

## change screenshot

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/64beabec-ce7b-4af0-89a3-1a5c9687a54b)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/ec80af5d-b68c-423b-8546-40443f093597)

* Once this step is done the certificate should be issued for use.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/a55108f2-841f-47c4-9107-4cec20d1da62)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/1e535230-813e-4dc8-9160-a457242a77e1)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/7a2408c1-526d-4fa7-985a-be32aa67d8c7)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/db343709-f179-4e74-bc9e-da7f35abfeaa)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/ac1cd2ff-f22c-42b3-9d34-b2ff5cb4ba94)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/56fa02e0-6d91-4dc9-ac6f-68b3fa3f843a)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/80c34671-abd8-4953-a7a0-ebc1d78f5d74)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/a1c7e83a-6ecd-480c-ac63-582c0a3f7b98)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/e37576a9-7866-4ddd-aa9c-00d3063e585e)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/8b5f695e-99ae-4a0b-b58f-313340b7b215)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/c7a6c0a8-651e-4e15-87b9-2ed8ef988611)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/65799c53-50b3-468f-a95f-cbb8221abf5e)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/ebdd8b45-1a52-4b8c-a516-a7b4b865a575)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/2bfbe778-1c91-404d-956e-89a69e11fe68)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/105280d7-7bf5-4215-abc1-2e007157ebfa)


## Deployment 
* The first step is to create a CloudFormation stack utilising the created YAML template, this will create and configure the necessary resources.

