import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palos = ["♠", "♥", "♣", "♦"];
let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generarCarta() {
  let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];

  document.querySelector(".upIcon span").textContent = paloAleatorio;
  document.querySelector("#number span").textContent = numeroAleatorio;
  document.querySelector(".bottomIcon span").textContent = paloAleatorio;

  if (paloAleatorio === "♥" || paloAleatorio === "♦") {
    document.querySelectorAll(".colorIcon").forEach(el => {
      el.style.color = "red";
    });
  } else {
    document.querySelectorAll(".colorIcon").forEach(el => {
      el.style.color = "black";
    });
  }
    return `${numeroAleatorio}${paloAleatorio}`;
}


window.onload = function() {
    let carta = generarCarta();
  console.log(`🃏Welcome to the 4Geeks casino🃏. Your lucky card today is ${carta}. Go all in with it!🎰`);
};

let countdownDiv = document.getElementById("countdown");
let countdownButton = document.getElementById("timeButton");

countdownButton.addEventListener("click", function () {
  let tiempo = 3; 
  countdownDiv.textContent = tiempo; 
   let intervalo = setInterval(() => {
    tiempo--; 
    countdownDiv.textContent = tiempo;

    if (tiempo === 0) {
      clearInterval(intervalo); 
      countdownDiv.textContent = ""; 
      let nuevaCarta = generarCarta();
      console.log(`🃏New card generated🃏. Your new lucky card is ${nuevaCarta}.`);
    }
  }, 1000); 
});