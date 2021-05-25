
"use strict"
var timer1; 

function pageStart(){
    console.log("page is loaded");
}

document.querySelector(".helpme").addEventListener("click",()=>{
   let element1= document.createElement("p");
   let inner_text= document.createTextNode("buton pressed first-time");
   element1.appendChild(inner_text);
   let divElement= document.getElementById("div1");
   divElement.appendChild(element1);
   console.log("Button is pressed");
   setTimeout(() => {
       divElement.removeAttributeNode("p")

   }, 5000);

}); 
