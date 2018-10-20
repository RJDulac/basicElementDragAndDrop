"use strict";

//try with boostrap
var holderItem = null;
function dStart() {
    message("drag started")
    holderItem = event.target;
}

function message(m) {
    document.getElementById("output").innerHTML ="<p>" + m + "</p>";
}

function nDrop() {
    //prevent default action of an element
    event.preventDefault();
}

function dDrop() {
    event.preventDefault();
    message("drop it!");
    //check if it has the right class name
    if(event.target.className === "box") {
        event.target.appendChild(holderItem);

    }
}