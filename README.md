# Tokenizer New Website

[Demo link](https://tokn-web.herokuapp.com/)

### How to run local development server
```
npm run dev
```

### Design
To see design, look [here](https://www.figma.com/file/AMa06q8Y1tEQ1llGmaRp8J/Tokenizer-Homepage)
### Learn
- [Next.js](https://nextjs.org/docs/getting-started)
- [Tailwind CSS](https://tailwindcss.com/)

## Deploying to AWS Using Serverless

Another way of deploying NextJS apps, it's as a lambda package on AWS, using [Serverless](https://www.serverless.com/) Framework,
which is a framework that helps you in deploying Lambda functions on AWS. It's very straight forward, and without any
difficult or additional configuration.

### Steps for deploying to AWS Lambda

#### 🔷 Part 1
For deploying it to AWS, you just need to make sure you have a valid AWS account, and your Access and Secret keys stored in
your computer as environment variables, you can to it by:
```shell script
export AWS_ACCESS_KEY_ID=<your-aws-access-key-id>
export AWS_SECRET_ACCESS_KEY=<your-aws-secret-access-key>
```

If you don't have an Amazon account, or haven't set the AWS credentials so far, you can take a look over this guide
[AWS - Credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)

#### 🔷 Part 2

After this, you need to [Install Serverless Framework](https://www.serverless.com/framework/docs/providers/aws/guide/installation/)

#### 🔷 Part 3

Then, having Serverless framework installed on your machine, you just need to create a file named [serverless.yml](./serverless.yml)
on the root path of your NextJS App, but be aware that this file is already created in this repo, we are just
mentioning this in the case you want to add it to another project. So if you are using this repo, which already 
has the [serverless.yml](./serverless.yml) file, you don't need to create one.

If you have created a new one, you just need to add the following content in the file:
```yaml
# serverless.yml

# name of your application
myNextApplication:
  component: "@sls-next/serverless-component"

```

You can also edit the [serverless.yml](./serverless.yml) to add a specific domain, or configure additional settings, you can take
a look over them in this [Guide](https://www.serverless.com/blog/serverless-nextjs).

#### 🔷 Part 4

Execute the following command in the root path of the repo, to deploy it to your AWS account:

```shell script
serverless
```

#### 🔷 How does Serverless works in the background

We are currently using the [@sls-next/serverless-component]() for deploying our NextJS to Lambda on AWS account.
In the background, this component is not using CloudFormation to deploy, because it makes the deployment faster,
and bassically what happens, is that Serverless framework will build your NextJS application, will pack it and
save it to a new S3 bucket, a NodeJS lambda function will be created to host that packed application, and finally 
AWS Cloudfront will create a CDN distribution pointing to your application.

If you have also configured a domain, Route53 and ACM will be used to manage the DNS records and SSL certificates.
