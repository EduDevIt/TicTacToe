"use strict";

alert('Bienvenido al mejor juego de 3 en raya, por favor, introducir los nombres de los jugadores');

let p1 = prompt ('Jugador 1');
let p2 = prompt ('Jugador 2');
let casilla;

let jugador1escrito = document.getElementById('jugador1');
let jugador2escrito = document.getElementById('jugador2');

jugador1escrito.innerHTML = `<p>${p1}</p>`;
jugador2escrito.innerHTML = `<p>${p2}</p>`;

function onClickTest(){
    console.log("Hola me llamo neulito");
    alert("has pulsado un cuadrado cara pene")
}

function dondePintar(containerId){
    casilla=containerId;
}

function pintarCirculo(){

    let celda = document.getElementById(casilla);
    celda.style.color="white";
    celda.style.fontSize="200px";
    celda.style.textAlign="center";
    celda.style.display = "flex";
    celda.style.alignItems = "center";
    celda.style.justifyContent = "center";
    celda.innerHTML = "o";    
}

function pintarEquis(){    
    
}