# Generation Diamond

Click [here](https://generation-diamond.herokuapp.com/) to see the project live.

## 1. Instructions

1. Clone or download this repository.
2. Cd into the repository from the terminal.
3. Input the command `npm install` to install all the packages needed.
4. Follow the steps under "How to setup Emailjs and Mailgun" to properly setup the Contact form.
5. Input `npm start` to start the app.

## 2. How to setup Mailgun and Emailjs

The Contact form uses [Mailgun](https://www.mailgun.com/) and [Emailjs](http://www.emailjs.com/) to send emails to a designated email address. You will need to setup an account for both (they both have a free plan available for testing) and then edit the .env file provided in the repository with the info requested.

### 2.1. Mailgun

1. First, create a Mailgun account and verify it.
2. Then, login and open your domain from your dashboard (you will only have one for a testing account).
3. On the domain page, under Overview, add the email address where you would like to receive emails under "Authorized Recepients". On the same email address, you will get an email that will prompt you to authorize Mailgun to send the emails there.
4. Get the domain name from the Domain page and the Private API key under Settings > API Security. You will need them when setting up Emailjs.

### 2.2 Emailjs

1. Head to the Emailjs website and create an account.
2. Under Email Services, click on "Add new service" and select Mailgun.
3. Fill out the form as follows:

   - Name: leave it as is;
   - Service ID: leave it as is;
   - API Key: insert here the Mailgun Private API key;
   - Domain: insert here the domain name from Mailgun.

4. Then, go to Email Templates and click on "Create new template" (you can have up to 2 with a testing account);
5. From here, you can create your own template for the emails sent through the form. Example:

   - Subject: Email for Generation Diamond;
   - Content:
     > Hi,
     > You have received a message from {{firstName}} {{lastName}} on your website Generation Diamond:
     > "{{message}}"
     > Sender: {{firstName}} {{lastName}}
     > Email: {{senderEmail}}
     > Phone: {{phone}}
     > Agrees to receive marketing and promotional material: {{agreement}}.

   * To email: [write here the email you authorized as receiver on Mailgun]
   * From name (optional): {{firstName}} {{lastName}}

6. Finally, save the template

### 2.3 .env file

An empty .env file is already provided. You can edit it using:

- The User ID from Emailjs (found under Account > API KEYS > User ID )
- The name of the dedicated template you created
- The email address that will receive all the emails
