"use strict";


(function() {
    var mapOptions = {
        zoom: 18,
        center: {
            lat: 30.2492,
            lng: -97.7495
        }
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var address = "1415 South Congress Ave., Austin, Tx 78704";

    var geocoder = new google.maps.Geocoder();


    // var home = {lat: 19.4064, lng: -102.0430};
    // var codeup = {lat: 29.426791, lng: -98.489602};


    geocoder.geocode(
        {"address": address}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                map.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
            } else {
                alert("Geocoding was not successful - STATUS" + status);
            }
        });


    var HomeSlice = { lat:30.2492,lng: -97.7495};

    var marker = new google.maps.Marker({
                    position:HomeSlice,
                    map: map
                });
    var infowindow = new google.maps.InfoWindow({
        content: "Home Slice Pizza"
    });
        infowindow.open(map, marker);
})();


