# Portfolio

### _By Kody Gordon_
### _Pizza Parlor_

## Technologies
* HTML
* CSS
* Javascript
* jQuery
* Github
* Visual Studio Code

## Description
This website was built to allow user to order a pizza online!

## Setup/Installation Requirement
* [Portfolio](https://github.com/kody7mm/)
* [Project Page](https://github.com/kody7mm/parlor)
* To download, then view or edit a local copy yourself, follow the instructions below:  

  * Clone the repository to a local directory using the command-line tool `git` ([how to install git](https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-and-github)).  
    `$ cd ~/[directory]/[path]/[of]/[choice]/`  
    `$ git clone https://github.com/kody7mm/parlor.git`  
  
  * Navigate to the top level of the project directory.  
    `$ cd parlor/`   

  * To view the site locally, open the file called `index.html` in your default browser.  
    `$ open index.html`  

## Specs
Describe: Pizza() 
Test: Creates pizza object before size and topping choices are applied 
Code: let userPizza = new Pizza(); Expect: (Pizza.toEqual(Pizza{ [],}));

Describe: Pizza.prototype.calculateSize 
Test: It will add up total cost of a pizza based on what size the user chooses. 
Code: pizza.calculateSize(); 
Expect: (Pizza.pizzaPrice["large"].toEqual([totalCost + 15]));

Describe: Pizza.prototype.calculateToppings 
Test: It will add $2 for each topping chosen in the toppings array. 
Code: pizza.calculateToppings(); 
Expect: (Pizza.pizzaPrice.toppings["pepperoni"].toEqual([1]));

## Known Bugs
* Design will be improved
* Improvements to floating could be implemented after more experience and practice is had.

## License
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## Contact Information
Kody Gordon (gordon.km89@gmail.com)