"use strict";

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function firstPromise(nextAction){
    console.log("you\'ll see this after 1 second");
    nextAction();
    function firstPromise() {
        console.log("you\'ll see this after 1 second");
        setTimeout(
            () => {},
            1000
        );

    }





// function practiceCoding(/* callback (function )*/ nextAction) {
//     console.log("I'm practicing wrting code...");
//     nextAction(); // synchronization
//     function practiceCoding() {
//         console.log("I'm practicing writing code...");
//         setTimeout(
//             () => {},
//             2000
//         );
//     }
//
//     function practiceShortcuts(/* callback (function )*/ nextThingToDo) {
//         console.log("I'm practicing the refactoring shortcuts");
//         nextThingToDo();
//         function practiceShortcuts() {
//             console.log("I'm practicing the refactoring shortcuts");
//             setTimeout(
//                 () => {},
//                 3000
//             );
//         }
//
//         function readNextLesson(/* callback (function )*/ next) {
//             function readNextLesson() {
//                 console.log("I'm reading the next lesson");
//                 next();
//                 setTimeout(
//                     () => {},
//                     1500
//                 );
//             }}}}
