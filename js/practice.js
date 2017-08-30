 // While Loop
// var i = 5
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

// Do While Loop

 // var i = 5;
 //
 // do {
 //     console.log('while loop iteration #' + i);
 //     i++;
 // } while (i < 10);

 // For Loops
 //
 // for (var i = 0, j = 12; i < 10; i++, j--) {
 //     console.log('for loop iteration #' + i + ', j = ' + j);
 // }

 // Break Loops

 // var numberToStopAt = 5;
 //
 // for (var i = 1; i < 100; i++) {
 //
 //     console.log('Loop counter is: ' + i);
 //
 //     if (i === numberToStopAt) {
 //         console.log('We have reached the stopping point: break!');
 //         // use the break keyword to exit from the while loop
 //         break;
 //         // nothing after the break will get processed
 //         console.log('You will never see this line.');
 // }
 //     }

 // Continue Loops

 // 'use strict';
 //
 // for (var i = 8; i < 100; i++) {
 //
 //     if (i % 2 !== 0) {
 //         // number isn't even
 //         // odd numbers aren't as cool
 //         // skip the rest of the loop and continue with the next iteration
 //         continue;
 //     }
 //
 //     console.log('Here is a lovely even number: ' + i);
 // }




// function setup() {
//     createCanvas(600,400);
// }
//
// function draw() {
//     background(51);
// }
 window.onload = function() {

     var current,
         screen,
         output,
         limit,
         zero,
         period,
         operator;

     screen = document.getElementById("result");

     var elem = document.querySelectorAll(".num");

     var len = elem.length;

     for(var i = 0; i < len; i++ ) {

         elem[i].addEventListener("click",function() {

             num = this.value;

             output = screen.innerHTML +=num;

             limit = output.length;

             if(limit > 16 ) {

                 alert("Sorry no more input is allowed");

             }

         },false);

     }

     document.querySelector(".zero").addEventListener("click",function() {

         zero = this.value;

         if(screen.innerHTML === "") {

             output = screen.innerHTML = zero;
         }

         else if(screen.innerHTML === output) {

             output = screen.innerHTML +=zero;

         }

     },false);

     document.querySelector(".period").addEventListener("click",function() {

         period = this.value;

         if(screen.innerHTML === "") {

             output = screen.innerHTML = screen.innerHTML.concat("0.");

         }

         else if(screen.innerHTML === output) {

             screen.innerHTML = screen.innerHTML.concat(".");

         }

     },false);


     document.querySelector("#eqn-bg").addEventListener("click",function() {

         if(screen.innerHTML === output) {

             screen.innerHTML = eval(output);
         }

         else {
             screen.innerHTML = "";
         }

     },false);

     document.querySelector("#delete").addEventListener("click",function() {

         screen.innerHTML = "";

     },false);


     var elem1 = document.querySelectorAll(".operator");

     var len1 = elem1.length;

     for(var i = 0; i < len1; i++ ) {

         elem1[i].addEventListener("click",function() {

             operator = this.value;

             if(screen.innerHTML === "") {

                 screen.innerHTML = screen.innerHTML.concat("");

             }

             else if(output) {

                 screen.innerHTML = output.concat(operator);

             }

         },false);

     }
 }























