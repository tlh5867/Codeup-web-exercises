"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
console.log(color);

switch (color) {
    case "red":
        console.log("color red");
        break;
    case "orange":
        console.log("color orange");
        break;
    case "yellow":
        console.log("color yellow");
        break;
    case "green":
        console.log("color green");
        break;
    case "blue":
        console.log("color blue");
        break;
    default:
        console.log("I do not know anything by that color");}

// TODO: create a case statement that will handle every color except indigo and violet
// TODO: when a color is encountered log a message that tells the color, and an object of that color
//       example: Blue is the color of the sky.

// TODO: create a default case that will catch indigo and violet
// TODO: for the default case, log: I do not know anything by that color.

// var ShopperNames = ["ryan", "george","cameron"]
// var ShopperName =  ShopperNames[Math.floor(Math.random()*ShopperNames.length)];
//
// console.log(ShopperName + " \s the shoppers name")
// var ShoppersAmount =
// switch (ShopperN) {
//     case "red":
//         console.log("color red");
//         break;
//     case "orange":
//         console.log("color orange");
//         break;
//     case "yellow":
//         console.log("color yellow");
//         break;




        var shopperNames = ["Cameron","Ryan","George"];
        var shopperName = shopperNames[Math.floor(Math.random()*shopperNames.length)];

        console.log("Shopper is" + "shopperName");

        switch (shopperName){
            case "Cameron":
                var itemsSubTotal = 180;
                break;
            case "Ryan":
                itemsSubTotal = 240;
                break;
            case "George":
                itemsSubTotal = 320;
                break;
        }

        console.log(shopperName + "‘s subtotal is $” + itemsSubTotal):

        if (itemsSubTotal > 200){
            var itemsGrandTotal = itemsSubTotal-(itemsSubTotal*.1);
            console.log(shopperName + "‘s total after discount is $” + itemsGrandTotal);

        }else{
            itemsGrandTotal = itemsSubTotal;
            console.log(shopperName + "‘s total is $” + itemsGrandTotal + “. They did not get a discount.“);
        }


        var luckyNumber = Math.floor(Math.random()*6)
        var subtotal = 60;

        switch(luckyNumber){
            case 0:
                var GrandTotal = (subtotal);
                console.log("Your lucky number is " + luckyNumber)
                console.log("Your total is " + GrandTotal)
                break
            case 1:
                GrandTotal = (subtotal - (subtotal * .10));
                console.log("Your lucky number is  " + luckyNumber)
                console.log("Your total is " + GrandTotal)
                break
            case 2:
                GrandTotal = (subtotal -(subtotal * .25));
                console.log("Your lucky number is " + luckyNumber)
                console.log("Your total is " + GrandTotal)
                break
            case 3:
                GrandTotal = (subtotal - ( subtotal * .30));
                console.log("Your lucky number is " + luckyNumber)
                console.log("Your total is " + GrandTotal)
                break
            case 4:
                GrandTotal = (subtotal - ( subtotal * .50));
                console.log("Your lucky number is " + luckyNumber)
                console.log("Your total is " + GrandTotal)
                break
            case 5:
                GrandTotal = (subtotal - ( subtotal * 1));
                console.log("Your lucky number is " + luckyNumber)

                console.log("Your total is " + GrandTotal)


        }


        var maybe =confirm("Do you want to enter a number?");

        if (maybe === true){
            var probablyANumber = prompt("enter a number");
            if (isNAN)(probablyANumber)) {
                alert("that was not a number");
            } else {
                if (probablyANumber % 2 === 0){
                    alert("your number is even");
                }else {

            }
        }
