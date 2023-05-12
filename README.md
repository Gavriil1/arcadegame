#  RHODES RESTAURANT

(Developer: Gabriel SP)

![Mockup image](assets/readmemddocs/amIresponsive/amiresponsive.png)

[Live webpage](https://gavriil1.github.io/arcadegame/index.html)

##  Table of Content

1. [Project Goals](#project-goals)

    1. [User Goals](#user-goals)

    2. [Site Owner Goals](#site-owner-goals)

2. [User Experience](#user-experience)

    1. [Target Audience](#target-audience)

    2. [User Requrements and Expectations](#user-requrements-and-expectations)

    3. [User Stories](#user-stories)

3. [Design](#design)

    1. [Design Choices](#design-choices)

    2. [Colour](#colours)

    3. [Fonts](#fonts)

    4. [Structure](#structure)

    5. [Wireframes](#wireframes)

4. [Technologies Used](#technologies-used)

    1. [Languages](#languages)

    2. [Frameworks & Tools](#frameworks-&-tools)

5. [Features](#features)

6. [Testing](#validation)

    1. [HTML Validation](#HTML-validation)

    2. [CSS Validation](#CSS-validation)

    3. [Accessibility](#accessibility)

    4. [Performance](#performance)

    5. [Device testing](#performing-tests-on-various-devices)

    6. [Browser compatibility](#browser-compatability)

    7. [Testing user stories](#testing-user-stories)

7. [Bugs](#Bugs)

8. [Deployment](#deployment)

    1. [Media](#media)
    2. [Code](#code)

9. [Credits](#credits)





##  Project Goals

###  User Goals

-   To relax after stresfull day by playing the game.

-   To challenage themselves and have fun.

-   Do something interesting on their free time


###  Site Owner Goals

-   Create high quality game to atract new customers/players

-   Create simple navigation around website to create great user experience

-   Create a game which can be played on all devices: computer, phone.

##  User Experience

###  Target Audience

- Main target audience is kids and teenagers age 8-23 years old.

###  User Stories

1. User needs to understand the rule of the game quickly 
2. User needs to have choice to play a game on keyboard or mouse.
3. User needs to have access on the game on desktop or mobile devices.
4. User needs to have an option to leave feedback to help developer to improve the game.
5. User needs to be sure that his feedback was sent.
####  Site Owner
  
1. The owner needs to create easy and ituitive interface to help user to understand quickly the rules of the game.
2. The owner needs to create a game which responsive, to help user to access it on all possible devices.
3. 404 page should be created, to help user to navigate to home page in case wrong urls was entered.
4. Contact form should be added to the website for users to send feedback.


##  Design

###  Design Choices


-   Since the game is related to war, I selected red colors for Spartan Warior, Archer and arrow. 

- Selected black color for canvas because it is also heavy color related to war.


-   I selected calm backround colour outside of canvas, to balance red and black colour of a game.

###  Fonts

During the design development, I used the the following font-family: Times New Roman


###  Structure

<!--here is the last stop.-->

The page is organized in a way that is familiar to the end user. When a user opens a landing page, they can see a classical arcade game in HTML cancas. We have quick tutorial in HTML cancas how to play a game. In addition to it we have 3 self explainatory buttons which will help user to play a game on small screens: left, right, fire.  Finaly we have footer, which give an option to a user to leave a feedback

The website is composed of four distinct pages:

-   A homepage containing a game.

-   Feedback page. This page has a form for a user to leave a feedback.

-  404 page, which helps user to navigate back to home page, in the case he entered the wrong url.

###  Wireframes

<details><summary>Home</summary>

<img src="assets\readmemddocs\wireframes\home-spartan-invader.png">

</details>

<details><summary>Feedback</summary>

<img src="assets\readmemddocs\wireframes\feedback.png">

</details>

<details><summary>404 Page</summary>

<img src="assets\readmemddocs\wireframes\404.png">

</details>

##  Technologies Used

###  Languages

- HTML

- CSS

- JavaScript

###  Frameworks & Tools

- Git

- GitHub

- Gitpod

- Visual Studio Code

- Balsamiq

- HTML Canvas


##  Features
<!-- the last save -->
The website comprises three pages and number of  functionalities.

###  Logo and Navigation Bar

- Displayed on each of the five pages.

- The hyperlink for the current page the user is viewing is emphasized.

![Logo and navbar](docs/features/logo-menu.png)
![Logo and small navbar](docs/features/hamburger-menu.png)

###  Footer

- Displayed on each of the five pages.

- Consists of four icons: Facebook, Twitter, YouTube, Instagram. Each icon is linked to a hyperlink.

User story: 9

![Footer](docs/features/footer.png)

<!-- the last save -->

###  Home Page

- Gives a description of the restaurant with a image of the dining area next to the sea. 

User stories: 3, 11

![Home Page](docs/features/home-page.png)

###  Menu

- The menu is divided into three sections: Starters, Main Courses, and Desserts.

- Each showcasing a picture of one of the items on offer. 

- Additionally, the menu includes pricing information for each item.

User stories: 2, 7

![Menu](docs/features/menu-of-the-restaurant.png)

###  Image Gallery

- Gallery section shows dishes, great view of the restaurant and user experience.

- The pictures of the restaurant are presented in a grid layout.

User Stories: 4

![Gallery](docs/features/gallery-page.png)


###  Contact Page

Contact page has three section:

a) Info Box.

b) Google Map.

c) Contact Form.

User stories: 1, 5, 6, 8, 10, 12

###  Info Box

The user is furnished with details about the restaurant such as its address, phone number, email, and the name of its proprietor.

User stories: 5, 6, 12

![Info Box](docs/features/info-box.png)




###  Contact Form

A way for users to send an email to a restaurant to book a table or leave feedback.

User stories: 8, 12

![Contact Form](docs/features/contact-form.png)

###  Map

Displays the restaurant's location using an embedded Google Map.

User stories: 1, 10

![Map](docs/features/map.png)

###  404 Page

This page helps the user navigate to the home, menu, gallery, and contact pages when the user mistakenly enters the wrong URL.

User story: 13

![page404](docs/features/404page.png)

##  Validation

###  HTML Validation

We utilized the W3C Markup Validation Service to validate the HTML of our website. The Home and 404 pages passed validation with no errors. However, the
feedback page shows a warning. Since this line of code  is taken from EmailJs API for a form to work, I leave everything as it is

<details><summary>Home</summary>

<img src="assets\readmemddocs\html-validator\html-validation-home-page.png">

</details>

<details><summary>Feedback</summary>

<img src="assets\readmemddocs\html-validator\html-feedback-validator.png">

</details>


<details><summary>404-Page</summary>


<img src="assets\readmemddocs\html-validator\html-404-validator.png">

</details>

###  CSS Validation

The CSS of the website was validated using the W3C Jigsaw CSS Validation Service, which yielded no errors.

<details><summary>whole page</summary>

CSS Home page validation: No Errors
<img src="assets\readmemddocs\css-validation\css-validation-home-page.png">

</details>

<details><summary>style.css</summary>

Upon examination, no CSS errors were detected in the CSS.style document.

<img src="assets\readmemddocs\css-validation\css-validation-style.css.png">

</details>

###  Accessibility

To ensure the website met high accessibility standards, the WAVE WebAIM web accessibility evaluation tool was utilized.

<details><summary>Home</summary>

On this page, we have identified 0 errors and 1 alert. 

<img src="assets\readmemddocs\accessiblity-validation\home-page-accessibility-evaluation.png">
</details>

<details><summary>Feedback</summary>

On this page, we have identified 0 errors and 1 alert. 

<img src="assets\readmemddocs\accessiblity-validation\feedback-pabe-accessiblity-eval.png">

</details>

<details><summary>404 Page</summary>

TOn this page, we have identified 0 errors and 3 alert. 

<img src="assets\readmemddocs\accessiblity-validation\404-accessiblity-validation.png">

</details>


###  Performance

The performance of the website was tested using Google Lighthouse.
The site received high score for Performance, Accessibility and Best Practices

<details><summary>Home</summary>



Screenshot of Desktop performance of Home page in Google Lighthouse.

<img src="assets\readmemddocs\performance\home-desktop-Perfm.png">

Screenshot of Mobile performance of Home page in Google Lighthouse.

<img src="assets\readmemddocs\performance\home-mobile-perf.png">

</details>



<details><summary>Feedback</summary>

Screenshot of Desktop performance of Contact page in Google Lighthouse.

<img src="assets\readmemddocs\performance\feedback-desktop-perf.png">

Screenshot of Mobile performance of Contact page in Google Lighthouse.

<img src="assets\readmemddocs\performance\feedback-mobile-perf.png">

</details>

<details><summary>404 Page</summary>

Screenshot of Desktop performance of 404 page in Google Lighthouse.

<img src="assets\readmemddocs\performance\404-mobile-perf.png">

Screenshot of Mobile performance of 404 page in Google Lighthouse.

<img src="assets\readmemddocs\performance\home-mobile-perf.png">

</details>

###  Performing tests on various devices

Testing of the website was conducted on the following devices:

- Latitude 5520

- Redmi Note 10

- Samsung Tablet A10.1

Furthermore, the website underwent testing using the Device Toggling feature of Google Chrome Developer Tools, which includes all available device options.

###  Browser compatability

The following browsers were used to test the website:

- Google Chrome

- Mozilla Firefox

- Microsoft Egde

###  Testing user stories

1. As a new visitor, I would like to easily find the restaurant's location.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Map | Navigate to the Contact Us page, locate the Google Map | Finding a map that displays the whereabouts of the restaurant. | Works as expected |


<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-1-1.png">


</details>

2. As a first-time customer, I want to know the pricing options available at the restaurant.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Menu | Navigate to the Menu page | See the prices for each menu option | Works as expected |

<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-1-2.png">

</details>

3. As a first time user, I want to know more about the restaurant

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Home | Navigate to the Home page and locate restaurant descprition | Find view of the restaurant and its description | Works as expected |


<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-1-3.png">

</details>

4. As a first-time visitor, I want to have an idea of what to expect during my visit to the restaurant.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Gallery | Navigate to the Gallery page | Find pictures of the food, beautiful panoramas, and customer experiences. | Works as expected |


<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-1-4.png">

</details>



5. I want to be informed about the opening hours as a returning user.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Info Box| Contact page -> Infor Box -> Opening hours  | See opening hours | Works as expected |

<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-2-1.png">

</details>

6. As a returning user, I want to find a phone number to call for reservation

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Info Box | Contact Page -> Info Box-> Search for Phone number | See phone number | Works as expected |

<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-2-2.png">

</details>

7. As a returning user, I want to see the menu

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Menu | Navigate to the menu page | Read the menu | Works as expected |

<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-2-3.png">

</details>

8. I want to provide feedback, suggestions, or a message to the restaurant's staff as a returning user.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact Form | Please go to the Contact Us Page and find the contact form. Complete the form with your information and send it.| Data submited via contact form | Works as expectd |

<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-2-4.png">

</details>

9. I want to find the restaurant on social media .

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer  | On any page scroll to the bottom | Click on social media links | Works as expected |

<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-2-5.png">

</details>

10. As a returning user, I want to get directions to the restaurant

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Map | Contact Page -> Google Map ->  click on directions link | View the restaurant's directions on Google Maps.| Works as expected |

<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-2-6.png">

</details>


11. As the site owner, I want users to access the site and learn more about the restaurant nt

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Home Page| Navigate to Home Page | View the restaurant's panorama and read its description. | Works as expected |

<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-2-7.png">

</details>

12. As the site owner, I want users to find our contact details to contact us .

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact Form | Contact Page -> Contact Form -> Enter text -> Submit | Data submited via contact form | Works as expectd |
| Info Box | Contact page -> Infor Box -> Find Phone and Email | Find the phone number, Email  | Works as expected |


<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-2-8.png">

<img src="docs/user-story-testing/US-2-9.png">
</details>

13. As the site owner, I want users to be redirected to the 404 page so that they can navigate back to the pages shown in the navigation bar

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| 404 Page | user Enters wrong URL | User sees 404 page. On it he sees navigation bar on website and select the page he needs. | Works as expectd |

<details><summary>Screenshots</summary>

<img src="docs/user-story-testing/US-2-10.png">

</details>

## Bugs

| **Bug** | **Fix** |
| ----------- | ----------- |
| Up/Down buttoms did not work | Fixed it by changing onClick to onmousedown|
| After going to inspect bottoms stopped working again | Fixed it, by adding settimeout function to unSendKey function |
|  Spartans was moving out of the screen. |  Fixed the issue by adding Canvas width condiation keycodes.a.pressed && archer.placement.x >= 0 |



##  Deployment

## Deployment
These steps were followed to deploy the website using GitHub Pages:
1. Go to the Settings tab within the GitHub repository.
2. Choose Pages from the menu located on the left hand side.
3. Under "Build and deployment", under "Source", select GitHub Actions.
4. After the webpage refreshes automaticaly you will see text: "Your site is live at https://gavriil1.github.io/arcadegame/"

    Please check the following link for more information: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Follow these steps to fork the repository:
1. Visit the GitHub repository.
2. Click on "Fork button" in upper right hand corner

    Please check the following link for more information: https://docs.github.com/en/get-started/quickstart/fork-a-repo

Follow these steps to clone the repository:
1. Go to the GitHub repository 
2. Find the "Code" button located above the file list and click on it.
3. Choose whether you prefer to clone via HTTPS, SSH, or Github CLI, and then click on the copy button to copy the URL to your clipboard.
4. Open Git Bash
5. Navigate to the directory where you would like to clone the directory and set it as the current working directory.
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Hit the Enter key to create your local clone.

    Please check the following link for more information: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

## Credits

###  Media

I have two images: 
1. ancient-greek-spartan-warrior-6839912.png
2. cartoon-martial-arts-character-archery_4042629.png

Both of them are downloaded from https://id.pngtree.com/

###  Code

In order of apearance:

- Spartan Invader: [Udemy Course](https://www.udemy.com/course/space-invaders-with-javascript-and-html-canvas/)
- Contact/Feedback Form: [w3schools](https://www.w3schools.com/howto/howto_css_contact_form.asp) 
- API and JS function Sending Email from Contatct Form: [EmailJs](https://www.emailjs.com/docs/tutorial/creating-contact-form/)
