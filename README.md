# E-Commerce-Site
[Link to Website](https://azr11.com/)

![Image Alt text](https://github.com/AzharR11/E-Commerce-Site/blob/main/README%20files/E-Commerce-Mockup.jpg?raw=true)

---

# Table of Contents
1. [Description](#Description)
2. [Example2](#example2)
3. [Third Example](#third-example)
4. [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)

---
## Description 
### Purpose 
The primary goal of this project was to develop a static e-commerce website hosted entirely on AWS, offering users a comprehensive shopping experience. The website allows users to browse products, search for items, view individual product pages, add items to their cart, and securely complete their purchases through a streamlined checkout process. Additionally, users have the option to create accounts and log in securely. For any inquiries or requests, users can conveniently contact the store via a contact form integrated into the website.

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

* Repo has been created on GitHub now it needs to be cloned on the local system.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/2ea3ce71-4301-4f3a-b794-05970a4aca9f)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/14bac0ba-26c2-4a9f-a088-b718de38fc89)

---
## Website Hosting Creation

* The first step is to create a CloudFormation stack utilising the created YAML template, this will create and configure the necessary resources.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/db304ac8-bb46-4f1d-bcfe-fa2ad8e00cf8)

* The name of the bucket can be configured at the time of stack creation, this was made possible because of the parameters section added in the YAML template.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/6513b187-a2d7-402e-9216-28ad236ceaef)

* Once the stack has been created the CNAME's from the created SSL certificate need to be added manually into the created hosted zone in order to verify and issue the certificate.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/1f179bf1-1d74-4187-926c-36a7acb39105)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/28457a4c-c6dd-48f0-a28b-cd9e290d0dd5)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/d79b013c-94fd-4f04-ad6d-a6743c43ff31)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/7fc52497-11c7-4d76-8300-9c6225b1b698)

* The registered domain name must also have the same NS as the ones in the created hosted zone.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/5dc63023-55b7-474a-bcc1-b1a055bedbd3)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/64beabec-ce7b-4af0-89a3-1a5c9687a54b)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/ec80af5d-b68c-423b-8546-40443f093597)

* Once this step is done the certificate should be issued for use.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/a55108f2-841f-47c4-9107-4cec20d1da62)

* The S3 bucket has also been created and we can see that it has been configured correctly with the S3 bucket policy.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/1e535230-813e-4dc8-9160-a457242a77e1)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/7a2408c1-526d-4fa7-985a-be32aa67d8c7)

* Now the CloudFormation stack creation has been completed successfully along with the creation of all the specified resources.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/a1c7e83a-6ecd-480c-ac63-582c0a3f7b98)

* The CloudFront distribution has also been configured correctly to point to the created S3 bucket, utilising the custom domain names and the created SSL certificate.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/e37576a9-7866-4ddd-aa9c-00d3063e585e)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/8b5f695e-99ae-4a0b-b58f-313340b7b215)

---
## CodePipeline Creation

The connection to the GitHub account and repo needs to be authorised before use.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/56fa02e0-6d91-4dc9-ac6f-68b3fa3f843a)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/80c34671-abd8-4953-a7a0-ebc1d78f5d74)

* Once this is done another CloudFormation stack is created to provision the CodePipeline that will be used throughout the development of the site.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/65799c53-50b3-468f-a95f-cbb8221abf5e)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/cddb31fa-dac8-49f8-a4e7-249b78e67f66)

* The stack has successfully been completed, as a result, the CodePipeline has been created with the correct configuration, using the repo as part of the source stage and the previously provisioned S3 bucket as part of the deployment stage.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/ebdd8b45-1a52-4b8c-a516-a7b4b865a575)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/2bfbe778-1c91-404d-956e-89a69e11fe68)

* The content which is pushed from the local system to GitHub is automatically deployed to the specified S3 Bucket.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/105280d7-7bf5-4215-abc1-2e007157ebfa)

---

## IAM Setup

* Before the forms can work properly, an IAM Policy and Role will need to be created.
* The policy will define the appropriate permissions
  
![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/083532e9-116e-4e4a-9163-e811c1a6bb49)

* Once the policy has been created it will need to be added to a new role

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/1cbc31cc-422b-43af-a524-5fee57978847)

* This will allow SES to work alongside the Lambda functions

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/a290bba6-26b4-42fc-88d7-c269dd312220)

---

## SES Setup

* For the forms on the site to work, SES will need to be set up. The custom domain name and the company's email address have been verified.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/f0c22993-5d24-4c48-a2ab-63777eae07be)

---

## Lambda Creation

### CloudFront Invalidations

* To eliminate the need for manual invalidations each time changes are deployed to the site, a Lambda function will be used.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/fb0230f8-085a-4b97-84cb-f2b2d6d8a127)

* By creating an S3 event notification as a trigger, each time the S3 bucket detects new content, the Lambda function will automatically be run.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/66a3c9d6-23b1-45ff-9de8-a719859d26a4)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/f55dc9f0-0294-4a94-8c15-60270833f22d)

### Contact Form

* This function is used to send a contact email containing the user's input to the company's email address.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/bb9f9028-74a8-43e9-a955-e3e7d9eb8173)

* API gateway is used as a trigger so that the content captured within the site's form can interact with the Lambda function which will handle the emails.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/542e73bd-f5eb-4c4e-b0cb-8917a308884c)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/33c95744-e803-4cab-8dc4-5c131e72f5a5)

### Checkout Form

* This function handles the checkout receipt and confirmation for the end user, containing their inputted information as well as their order summary.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/01eda6a4-3292-4d73-b37a-2ce293518cdc)

* API gateway is used as a trigger so that the content captured within the site's form can interact with the Lambda function which will handle the emails.

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/f2e223e2-445e-48f5-af62-9dd6af56b2ed)

![image](https://github.com/AzharR11/E-Commerce-Site/assets/51958831/5aa5e9c1-a9d1-49c1-9d7c-5cbbe96e85e3)
