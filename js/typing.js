"use strict"

var i = 0;
var txt = 'Hello, I am QIANXI.';

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // setTimeout(function, milliseconds);
  }
}