let text = document.getElementById('a');
let logo = document.getElementById('logo');
let text1 = document.getElementById('text1')
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("h1");
let text5 = document.getElementById("p1");
let b3 = document.getElementById("b3");

function bosilganda1(){
  text.classList.toggle("peachpuff");
  text.classList.remove("black");
   logo.classList.remove("white");
   text1.classList.remove("white");
   text2.classList.remove("white");
   text3.classList.remove("white");
   text4.classList.remove("white");
   text5.classList.remove("white");
   b3.classList.remove("white");
}

function bosilganda2() {
  text.classList.toggle("black");
  text.classList.remove("peachpuff");
  logo.classList.toggle("white");
  text1.classList.toggle("white")
  text2.classList.toggle("white");
  text3.classList.toggle("white");
  text4.classList.toggle("white");
  text5.classList.toggle("white");
  b3.classList.toggle("white");
}


