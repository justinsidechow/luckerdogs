# luckerdogs - [https://luckerdogs.com](https://luckerdogs.com)

## Overview

A website to simulate real life events with the odds and video animations presented to put those numbers into perspective. It is difficult to make decisions statistically if one is not used to using such methods. Especially on decisions that require quick calculations. Therefore, this website is meant to help people visualize those statistical choices with a trial and error "gambling" effect to entice them to make better statistical choices with how often they get their guesses wrong on certain tasks.

Coin Toss would be the first visualization simulation as it is an easy example to understand. More game simulations to come in the future as the project grows.

## Languages/Frameworks/Tools

used for this project were:

**Frontend**

- Javascript
- React
- Redux
- Material-UI
- Axios
- JSON
- HTML
- CSS

**Backend**

- Python
- Django
- Postgresql
- Docker
- Nginx
- Certbot
- LetsEncrpyt
- Google SMTP
- AWS Lightsail

## User

- Users are able to register their account to record their game data. The authentication is done through Django's token based authentication with Djoser as the base template for the User Model. Django APIs talk to the frontend through Axios/JSON made with React/Material-UI with their states stored in the Redux Store to maintain frontend variables.

## User Register

![Register](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/register.gif)

- Users use Email, Username, and Password to register for the account. Toasty will notify them if there is an error or if they did it correctly. The Registration will check if the email format is correct or if the passwords are not matching. Django will then send an activation email to the user's email to activate their account.

## User Activation

![Activation](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/activation.gif)

- Users are given a unique UID/Token combo link to activate their account. If the user requires another activation link, they can try to login their account with their selected password and will be sent a new activation link.

## User Login

![Login](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/login.gif)

- Users then are able to login after activating their account and can continue to the games which will have their odds of luckiness recorded. When they logged in they are given a new session based token stored in the cookie which will notify the backend its them.

## User Logout

![Logout](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/logout.gif)

- Users can log out which will delete their session based token and also blacklist their token so it cannot be reused. When the user logs in, they will be given a new one.

## User Password Reset Email

![Password Reset Email](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/passwordreset.gif)

- If the user forgot their password and requires a reset, the user can click on the password reset link to input their email address which will send them a password reset link to their email.

## User Password Reset Confirm

![Password Reset Confirm](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/passwordresetconfirm.gif)

- The user can then click on the unique UID/Token link to reset their password by inputting a new password.

## Games - Coin Toss

- Once the user logs in they are able to play the games to test out their luck. Here all the calculations are done in the backend and the coin toss API will only calculate two options, which is "heads" or "tails". This is to prevent cheating and only the user with their session based token is able to access/modify their own data through those two options. When the user clicks on either button, they will PUT their coin toss data with their "coinTossChoice" with "heads" or "tails". The backend then does the calculation and the frontend does a GET on the new data and returns back a "trueHeads", "falseHeads", "trueTails", or "falseTails" to notify the user if they got it wrong or right. The video will show them visually if they got them right or wrong and makes the transition a lot more enjoyable as they are waiting to see where the coin lands. If the player continues to try their luck, they will be able to see that they are generally not going to be lucky the more they play as the law of small numbers will leave them behind and their score will regress back to the mean.

- Hopefully then the statistical light bulb will flash on and tell them that they are not actually lucky over the long term in a game that is designed to be 50/50. More games in the future like blackjack where their winning chance is 42.22% and losing is 49.10%. Which means the more you play blackjack, you will lose. That's a game extension for the future.

![trueHeads](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/trueHeads.gif)

- trueHeads

![falseHeads](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/falseHeads.gif)

- falseHeads

![trueTails](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/trueTails.gif)

- trueTails

![falseTails](https://raw.githubusercontent.com/justinsidechow/luckerdogs/master/readmegifs/falseTails.gif)

- falseTails

## Server Hosting

- The website is hosted on AWS Lightsail which Docker, Nginx, Certbot, and Postgresql keep the instance running and data persistent. I chose to use AWS Lightsail for this project as it will most likely not get a lot of traffic and so a $5 per month hosting is enough for this. Docker will keep this project easy to maintain as it would only need to rebuild the instance with all the requirement files accounted for so "docker-compose build" can build the entire project in one line. "./init-letsencrypt.sh" to certify the website with its SSL certification and "docker-compose up --detach" to keep it running as long as it needs. The docker-compose files have "restart: unless-stopped" so if by the off chance it does go off, it will reset.

## Credits

Huge credit to [VeryAcademy](https://github.com/veryacademy) and their Youtube Channel, [https://www.youtube.com/c/veryacademy](https://www.youtube.com/c/veryacademy), SaaSitive at [https://saasitive.com/django-react/boilerplate/](https://saasitive.com/django-react/boilerplate/), and Michael Herman at [testdriven.io](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/).

Their guides on Django, React, Postgresql, Nginx, and Docker paved the backbone for this project and this would not have been possible without their impeccable guides.
