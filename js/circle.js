(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var circleArea = Math.PI * Math.pow(circle.radius,2);
            // TODO: complete this method
            // hint: area = pi * radius^2

            return circleArea; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding == true){
                 // Math.round(circle.getArea());
            var circleDeath = Math.round(circle.getArea());
            }else{
                circleDeath = circle.getArea();

            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleDeath);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();