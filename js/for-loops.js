"use strict";
/*First Exercise*/
// var limit = 65536 /*part of condition*/
// var powersOfTwo = 2;
//
// while (powersOfTwo <= limit) {
//     console.log(powersOfTwo);
//     powersOfTwo *= 2;
// }

/*exercise two*/

// var allCones =  Math.floor(Math.random() * 50) + 50;
//
// do {
//     var cones = Math.floor(Math.random() * 5) + 1;
// if (cones > allCones){
//     console.log("cannot sell you " + cones + "cones I only have" + allCones + "...");
//     continue;
// }
//
// allCones -= cones;
//     console.log(cones + " cones sold...")
// }while(allCones >0);
//     console.log("yay i sold them all");

/*
Exercise Three
 */


// var userInput = prompt(" pick a number between one and ten");
//
// var multiplier = userInput;
//
// for (var i = 0; i <= 10; i++) {
//     var result = multiplier * i;
//     console.log(multiplier + ' x ' + i + ' = ' + result);
// }



// var PickNum = parseInt(prompt("pick a number"));
//
// for (var i = 1; i <= 10; i++){
//     var Total = PickNum * i;
//     console.log(PickNum + "x" + "=" + Total);
// }
// //
//
//
//Exercise Four
//
// var limit = 10;
//
// for (var i = 1; i < limit; i++) {
//     // Put var randNum inside the loop to pick random numbers to use
//     var  randNum = Math.floor(Math.random() * (200 - 20)) +20;
//     // i is just a placeholder telling the loop to grab 10 random numbers
//     if (i % 2 === 0) {
//         console.log("This is an even number: " + randNum);
//         continue;
//     }
//
//     else {
//
//         console.log("Here is an odd number: " + randNum);
//     }
//
//     if (limit >= 50) {
//         break;
//     }
//
// }

// var i = 0;
//
// for (var x = 1; x < 11; x++) {
//
//
//     for (var y = 0; y < x; y++) {
//
//         i = i + x;
//
//         if (i % 10 === 0) {
//
//             i = "0000000000";
//
//         }
//
//     }
//
//     console.log(i);
//
//     i = "";
//
// }


    /*Exercise Five*/


// for (var i =100; i > 0; i -= 5) {
//     console.log(i);
// }
