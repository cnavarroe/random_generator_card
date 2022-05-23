/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".numeros").innerHTML = generateNumber();
  console.log("Hello Rigo from the console! ");
};

let generateNumber = () => {
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  numeros[11] = "J";
  numeros[12] = "Q";
  numeros[13] = "K";
  let seleccion = Math.floor(Math.random() * numeros.length);
  return seleccion;
};

//let iconos = ["&diams;", "&hearts;", "&clubs;", "&spades;"];
