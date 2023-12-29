# Play-Rock, Paper, Scissors

The Play-Rock, Paper, Scissors project is an interactive JavaScript driven game site, designed to bring the popular childhood game 'rock paper scissors' to a digital platform. The site is a great way to pass some time and play a fun game.

![Responsive site on different devices](/assets/readme-images/responsive.png)

The above screen shot was generated in [Am I Responsive Site](https://ui.dev/amiresponsive) which shows the responsiveness of the site. It demonstrates how the site changes when using different devices. Using media queries ensured the website never lost its structural integrity across the variety of devices.

## UX

### Site Purpose

The purpose of the Play-Rock, Paper, Scissors website is to bring a previously in-person game to a digital platform. It provides entertainment to the visitor as a way to pass time. It allows a single player to play the game, whereas in person this is not possible.

### Site Goal

The goal of the website is to provide a fully functioning rock, paper, scissors game where users can play versus a computer and the winner is determined by getting the score best out of 7.

### Audience

The target audience for this site is online users looking to pass the time. Typically, the users will be below 20 and will enjoy gameplay.

### Design

The Play-Rock, Paper, Scissors website follows a simple design that is user friendly. The colour scheme comprises of mainly two colours:

- shade of black: #000000
- shade of white for the font: #FFFFFF

The typography used for the website was found on Google fonts and imported from here. Font name is: Saira

![Fontstyle for project](/assets/readme-images/font-family.png)

## Features: Existing

The Play-Rock, Paper, Scissors website is a simple one page design, which allows the game area to stand out. The design is left quite simple, as it is believed the users will be young and will therefore benefit from a straightforward design that is to the point. The simple design allows the game to stand out and doesn’t distract the users from the site experience.

The header section is a black background with large text on it. The text is coloured white. The header text also works as a home button and refreshes the page.

![Screenshot of header](/assets/readme-images/header-screenshot.png)

The ‘take a chance’ section of the site is where the user picks their choice of either rock paper or scissors. They have been created by button functions which are operated by a click. They have been styled with CSS to match the theme of the site: black buttons with white text.

As a user plays the game, the ‘your choice’ and ‘computers choice’ section changes and is populated with rock, paper or scissors, dependant on the user's choice. This is achieved using JavaScript.

![Screenshot of buttons](/assets/readme-images/take-a-chance-buttons.png)

The game area section is made up of a score counter which tallies up the users’ score and the computers’ score, showing who is the winner of each round. The image changes to match the user and computers’ choices of rock, paper or scissors. The images are of hands to resemble the in-person game. The images have a bright coloured background which stands out on the black and white site.

![Screenshot of game area before a go](/assets/readme-images/game-area1.png)

![Screenshot of game area after a go](/assets/readme-images/game-area2.png)

The winner announcement box is a feature that comes up when someone wins the game. The winner is determined by scoring the best out of 7. There is a message for if the player wins and if the computer wins.

![Screenshot of winner announcement](/assets/readme-images/winners-message-box.png)

The footer section was designed for users to locate all the linked social media accounts. The aim of this is to get users looking at all the socials to potentially share the game with friends and hear about new updates coming soon. The footer was made to match the header theme: white writing and black background.

![Screenshot of footer section](/assets/readme-images/footer.png)

## Features: Future

A future development will be the FAVICON feature as this will improve user experience for visitors navigating between different tabs.

Another future feature is a high score menu this would create competition and give users a reason to return to the site to try and top the scoreboard.

Finally, the site assumes all users know how to play the rules and therefore might discourage those who don’t know how to play from using the site. Therefore a future development is a ‘How to Play’ section to resolve this limitation.

## Testing and Bugs/solutions

### Manual Testing

Manual testing was carried out on the deployed website in two browsers, chrome, and safari. All the features displayed as designed across both. For example, all the fonts showed up as expected, the links worked and opened in new tabs as expected, and all the images loaded in place as expected.

The responsiveness of the site was checked from 280px which is for a Galaxy Fold, up to tablet and desktop size. The site looks good in all formats, and nothing is lost on any of the screens.

The javascript worked as desired generating a random image for computers choice and the selected image for players choice. It declared the correct winner and updated the scores as required.

The lighthouse report came back with great results and have give me no reason to be alarmed.

![Screenshot of lighthouse report](/assets/readme-images/lighthouse-report.png)



### Validator Testing

![Screenshot of html validator](/assets/readme-images/html-validator.png)

<https://validator.w3.org/>

There was an open section tag with no close which was bringing a failure up. I closed the tag and now the code for this site was run through the validator testing website where there are no issues, and it passed the code.

![Screenshot of css validator](/assets/readme-images/css-validator.png)

<https://jigsaw.w3.org/css-validator/>

The style.css sheet was run through the css jigsaw validator, resulting in one error where a space was put between a value and the px unit. The space was removed which corrected the issue and the page now passes with no errors.

![Screenshot of jshint validator](/assets/readme-images/jshint-test.png)

<https://jshint.com/>

The JavaScript code was tested on the js hint site where it had some warnings, but no complete errors and the java script works as desired.

## Unfixed Bugs

As far as I am aware, there are no unfixed bugs.

## Deployment

The website was coded in codeanywhere which provides a preview of the site. Once it was ready, the site was deployed GitHub pages - where a live version is available.

The steps to achieve this were:

-	From my GitHub repository go to the settings tab.
-	In this tab you will find the source section drop-down menu you have to select the Master Branch.
-	When the Master Branch is selected you will see that the page will automatically refresh. A ribbon display will be there to indicate the deployment was a success.
-	The link to my live site can be found here – [Play-Rock, Paper, Scissors](https://ste-abraham.github.io/play-rps/)

## Credits

- Wildcard selector piece of code from Love running project.
- A lot of the code I took inspiration from my first project DA Plating Jigs
- Icons for footer the same process was followed love running project.
- Font awesome for icons.
- Google fonts for font.
- A lot of inspiration from love maths walkthrough project and was using course materials.
- All images are taken from google images creative common license tool.
- The following github respository was used to help with the javascript section.
<https://github.com/kubowania/rock-paper-scissors-x3/blob/main/rock-paper-scissors-examples/rock-paper-scissors-example-1/app.js>

