"use strict”
$(document).ready(function (){

    // $('#highlight-important’).click(function(event) {
        $('#“highlight-important').click(function(event){
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });}

    $(“dt”).click(function(event) {
        $(this).css(‘background-color’, ‘#FFF7CB ’ );
    });

    get rid of property first

        $("dt").click(function(event)){
        // $(“dt”).css(‘background-color’, ‘transparent’ ); //get rid of all properties -- only allows one line to be highlighted at a time
        $(this).css('background-color'),( '#fff7CB');
    )};

    $(“li”).click(function(event) {
    $("li").click(function(event)){
        $("li”).css('background-color’, ‘transparent’ ); //get rid of all properties -- only allows one line to be highlighted at a time
        $(this).css("background-color’, ‘#FFF7CB ’ );
    });

    $("h3”).click(function(event) {
        $("h3").css("background-color’, ‘transparent’ ); //get rid of all properties -- only allows one line to be highlighted at a time
        $(this).css('text-decoration’, ‘underline’ );
    });
});