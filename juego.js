"use strict";

alert('Bienvenido al mejor juego de 3 en raya, por favor, introducir los nombres de los jugadores');

let p1 = prompt ('Jugador 1');
let p2 = prompt ('Jugador 2');

let jugador1escrito = document.getElementById('jugador1');
let jugador2escrito = document.getElementById('jugador2');

jugador1escrito.textContent = p1;
jugador2escrito.textContent = p2;