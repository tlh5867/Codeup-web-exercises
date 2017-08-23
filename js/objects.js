(function() {
    "use strict";

    var person = {
        /*literal object representation*/
        firstName: "Tomas",
        lastName: "Hipolito",

    };
//console.log(person);
    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }
    // (person.firstName + " " + person.lastName);
    // console.log ("Hello from " + person.sayHello + "!");
    console.log(person.sayHello());


    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    for (var i = 0; i < shoppers.length; i++) {


        var discount = 0;
        var totalAfterDiscount = shoppers[i].amount;
        /*scalar values --> constants*/

        if (shoppers[i].amount > 200) {
            discount = .1;
            totalAfterDiscount = shoppers[i].amount - shoppers[i].amount * discount;

        }
    }
    console.log(shoppers[i].name + " has to pay $" + shoppers[i].amount + " it has a discount of $" + discount + "the total to pay after the discount is $" + totalAfterDiscount);
}


)();


// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];

// log out the books array
var books= [

    {
    





]


console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
console.log("Book #" + todo);
console.log("Title: " + todo);
console.log("Author: " + todo);
console.log("---");
// end loop here