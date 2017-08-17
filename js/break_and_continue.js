"use strict"

console.log("breaks");

// while(true){
// //ask a question
//     var number = prompt("Give me an odd number between 1 and 50");
//         number = parseInt(number);
//     if((number >=1 && number <=50) && number %2 ==1 ){
//         console.log("Found the odd number between the range of 1 and 50");
//         break;
//     }
// }
//
// for(var i = 1; i < 50, i +=2; ) {
//     var number = prompt("Give me an odd number between 1 and 50");
//     number = parseInt(number);
//     console.log(i)
// }

var number = prompt("Give me an odd number between 1 and 50");
number = parseInt(number);
for (var i = 1; i <= 50; i+=2) {

    if ( number === i ) {
        console.log("Number to skip is: " + i);
        continue;

    }


    console.log ("Here is an odd number: " + i);
}