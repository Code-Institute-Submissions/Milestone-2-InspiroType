# Table of Contents
* About
    * Why This Project?
* UX
    * User Stories
    * Research
    * Style Rationale
    * Wireframes
* Features
    * Functionality
    * Existing Features
    * Features Left To Implement
* Technologies Used
    * Version Control
* Testing
    * Automated Testing
    * Responsive Testing
    * Additional Testing
    * HTML And CSS Validation
    * Bugs 
* Deployment
   
* Acknowledgements

## Features

### Existing Features

*Quotes Submission Page - Users can submit suggestions
*Words Per Minute Calculation - Gives users their current typing speed
*Easy/Hard Modes - Users can progress to using punctuation and capital letters


### Features left to Implement

*Incorrect warning - I want the user input area to turn red when a wrong character is entered
*Quote Counter - To let the user know how many quotes they have typed
*Replace Alerts with Modals that are styled in keeping with the site.


## Technologies Used

* HTML

* CSS

* Bootstrap

* JavaScript

* jQuery

* Google Fonts

* Font Awesome

* Jasmine


### Version Control

* Git

* GitHub


## Testing

### Automated Testing
Due to time constraints I didn’t have time to extensively test my App but I set up the site infrastructure  to allow me to do this in the future.
I also tried to break my tests and found everything was working as hoped.


### Responsive Testing
I used Google Chrome's Development tools to test for responsiveness across different screen sizes.
Although this game is designed for large screen and a physical keyboard, it worked on all devices I tested it on.


### Additional Testing
I sent the game to a number of friends / students for further feedback.

I tested the Email Submission form regularly throughout the process to make sure it was working ok. 


### Code Validation

* Validated the HTML code with W3C and no error found.
* Validated the CSS code with W3C and no error found.


### Bugs // Problems

* Words Typed Not Clearing - I noticed that the number of words typed was accumulating after each round and so I had to reset the quotesCompletedThisRound  in the gameComplete function.
	
* Same Quote Twice -  I want to implement a function that doesn’t allow the same quote appear twice in the same round.



## Deployment

This project is hosted using GitHub pages, deployed from the master branch. The site will update automatically upon new commits to the master branch. To deploy the project correctly on GitHub pages, the landing site must he named index.html

If you want run the project locally you need to clone the repository directly into your editor by writing to the terminal the following: git clone https://jmurrii.github.io/Milestone-2-InspiroType/


## Credits

* I studied these three tutorials before embarking on my project
* I also was helped by Aaron Sinnott in my mentor sessions which gave me good guidance and helped me with some good ideas.


https://www.youtube.com/watch?v=Hp29rMkw3pc&t=3230s

https://www.youtube.com/watch?v=R-7eQIHRszQ&t=295s

https://www.youtube.com/watch?v=Yw-SYSG-028&t=1664s


## Disclaimer
This project is for educational purposes only.
