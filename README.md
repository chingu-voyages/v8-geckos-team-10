# Project Chingu: Voyage 8 - Team Geckos 10
Project Chingu is a free collaboration community for developers, designers, and data scientists. Their objective is to bring developers all over the world to work together in professional-like scenarios by choosing and completing a tangible product that can be shared with the community. To learn more about Chingu, click [here](https://chingu.io/). 

## Meet the Team
<img src="https://avatars2.githubusercontent.com/u/28880016?s=460&v=4" width="100">    Sonia Gorla (Italy) - Based in TX || [Github](https://github.com/Sonjya00) || [Linkedin](https://www.linkedin.com/in/soniagorla)

<img src="https://avatars0.githubusercontent.com/u/14873941?s=460&v=4" width="100">    Jeremy Huppe (USA) - Based in UT || [Github](https://github.com/jhuppe) || [Linkedin](https://www.linkedin.com/in/jeremyhuppe/)

<img src="https://avatars0.githubusercontent.com/u/29741090?s=460&v=4" width="100">    Sebastian Duranona (Ecuador) - Based in NE || [Github](https://github.com/SebasDuranona) || [Linkedin](https://www.linkedin.com/in/sebastian-duranona-46bb87185/)

## Meet the Project: Generation Diamond

Generation Diamond is a young non-profit based in Omaha, Nebraska. Their main objective is to provide young adults that have gone through the legal system a way to reenter society and avoid common pitfalls that may cause them to fall back into criminal activities. As a group, we chose this project because we believed it would be a great oportunity to utilize some of the knowledge we had. We also wanted to produce a tangible product that would benefit society.

Click [here](https://generation-diamond.herokuapp.com/) to see the project live.

## Instructions

1. Clone or download this repository.
2. Cd into the repository from the terminal.
3. Input the command `npm install` to install all the packages needed.
4. Follow the steps under "How to setup Emailjs and Mailgun" to properly setup the Contact form.
5. Input `npm start` to start the app.

### How to setup Mailgun and Emailjs

The Contact form uses [Mailgun](https://www.mailgun.com/) and [Emailjs](http://www.emailjs.com/) to send emails to a designated email address. You will need to setup an account for both (they both have a free plan available for testing) and then edit the .env file provided in the repository with the info requested.

#### Mailgun

1. First, create a Mailgun account and verify it.
2. Then, login and open your domain from your dashboard (you will only have one for a testing account).
3. On the domain page, under Overview, add the email address where you would like to receive emails under "Authorized Recepients". On the same email address, you will get an email that will prompt you to authorize Mailgun to send the emails there.
4. Get the domain name from the Domain page and the Private API key under Settings > API Security. You will need them when setting up Emailjs.

#### Emailjs

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
     >
     > You have received a message from {{firstName}} {{lastName}} on your website Generation Diamond:
     >
     > "{{message}}"
     >
     > Sender: {{firstName}} {{lastName}}
     >
     > Email: {{senderEmail}}
     >
     > Phone: {{phone}}
     >
     > Agrees to receive marketing and promotional material: {{agreement}}.

   * To email: [write here the email you authorized as receiver on Mailgun]
   * From name (optional): {{firstName}} {{lastName}}

6. Finally, save the template

#### .env file

An empty .env file is already provided. You can edit it using:

- The User ID from Emailjs (found under Account > API KEYS > User ID )
- The name of the dedicated template you created
- The email address that will receive all the emails
