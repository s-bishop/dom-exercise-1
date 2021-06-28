"use strict";


function main() {

    // you code here
    document.querySelector("#grow-me").classList.add("big");
    document.querySelector("#shrink-me").classList.remove("big");
    //debugger;
    document.querySelectorAll("li").forEach(function(li){
        console.log(li.innerText)
    });
    document.querySelector(".link").setAttribute
    ("href",  "https://www.example.com");
    document.querySelector(".link").innerText="somewhere";
    document.querySelector("#hide-me").style.display="none";
    document.querySelector("#show-me").style.display="block";
    document.querySelector("#name").value
    let value = document.querySelector("#name").value
    document.querySelector("h1").innerHTML=`Welcome  ${value}!`

}
