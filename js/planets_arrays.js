// "use strict";
//
//
// var colors= ['red','orange','yellow','green','blue','indigo','violet','red'];
//
// console.log(colors.indexOf("indigo"));
// console.log(colors.indexOf("red"));
// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("blue"));
//
//
// var colors= ['red','orange','yellow','green','blue','indigo','violet','red'];
//
//
// colors.splice(3,4);
//
// console.log(colors);
//
// colors.reverse();
//
// console.log(colors)
//
// colors.sort();
//
// console.log(colors)

(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ["Mercury","Venus","Earth","Mars","Jupitor","Saturn","Uranus","Neptune"];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log(planets.length);
        planets.sort();
    }
    logPlanets();


    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    logPlanets()

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    var planets = ["Mercury","Venus","Earth","Mars","Jupitor","Saturn","Uranus","Neptune"];
    planets.shift("The Sun");
    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    var planets = ["Mercury","Venus","Earth","Mars","Jupitor","Saturn","Uranus","Neptune"];
    planets.pop("Pluto");
    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"));





    console.log('Using splice to remove the planet after "Earth".');
    planets.splice(planets.indexOf("Earth") + 1,1);
    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    logPlanets();

    console.log("Reversing the order of the planets array.");

    planets.reverse()
    logPlanets();

    console.log("Sorting the planets array.");

    planets.sort()
    logPlanets();
})();

(function(){
    "use strict";


    // TODO: Convert planetsString to an array, save it to planetsArray.
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|')



    // TODO: Create a string with <br> tags between each planet. console.log() your results.

var resHtml =planetsArray.join("<br>");
console.log(resHtml);




    //       Why might this be useful?

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    "<ul>"
        "<li></li>"
     "</ul>"
    var listHtml = "<ul><li>";
    listHtml += planetsArray.join("</li><li>");
    listHtml += "</li></ul>";

    console.log(listHtml);

    document.body.innerHTML= listHtml

})();