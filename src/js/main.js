/* eslint-disable no-console */
"use strict";

const newNumberBtn = document.querySelector(".js-new-number-btn");
const playBtn = document.querySelector(".js-play-btn");
const cardBolitasElement = document.querySelector(".js-bingo-numbers");
const resetElement = document.querySelector(".js-reset-btn");

let cardNumbers = [];
let cardBolitas = [];
let count = [];
let timer;

// start page functions

const init = () => {
  //Se ha iniciado la página
  //Generar 20 números (no repetidos) para Mi cartón
  generateRandomNumbers();
  paintCardNumbers();
};

const generateRandomNumbers = () => {
  for (let i = 0; i < 20; i++) {
    const randomNumber = generateRandomNumber(30);
    if (!cardNumbers.includes(randomNumber)) {
      cardNumbers.push(randomNumber);
    } else {
      i--;
    }
  }
};

const generateRandomNumber = function (max) {
  return Math.ceil(Math.random() * max);
};

// dom listeners

const handleNewNumber = () => {
  //Se ha pulsado en: Saca una bolita;
  clearInterval(timer);
  playRound();
};

const handlePlay = () => {
  //Se ha pulsado en: Play
  setPlay();
  //playRound();
};

// functions

const setPlay = () => {
  //Activar el modo automático
  createNewBingoNumberAgain();
};

const playRound = () => {
  //Jugamos una ronda entera
  count++;
  createNewBingoNumber();
  paintCardNumbers();
  paintBingoNumbers();
  isThereBingo();
};

const createNewBingoNumber = () => {
  //Generar un nuevo número (no repetido) para Bolitas
  for (let i = 0; i < 1; i++) {
    const randomNumber = generateRandomNumber(30);
    if (!cardBolitas.includes(randomNumber)) {
      cardBolitas.push(randomNumber);
    } else {
      i--;
    }
  }
};

//painter
const paintBingoNumbers = () => {
  //Repintar Bolitas
  cardBolitasElement.textContent = "";
  for (let i = 0; i < cardBolitas.length; i++) {
    const createLi = document.createElement("li");
    createLi.className = "number";
    createLi.setAttribute("data-id", `${cardBolitas[i]}`);
    createLi.textContent += cardBolitas[i];
    cardBolitasElement.appendChild(createLi);
  }
};

const paintCardNumbers = () => {
  //Repintar todos los números de Mi cartón
  const cardNumbersElement = document.querySelector(".js-card-numbers");
  cardNumbersElement.textContent = "";
  for (let i = 0; i < cardNumbers.length; i++) {
    const createLi = document.createElement("li");
    createLi.className = "number";
    createLi.setAttribute("id", `${cardNumbers[i]}`);
    createLi.textContent = cardNumbers[i];
    cardNumbersElement.appendChild(createLi);
  }
  paintMatchedCardNumber();
};

//comparing
const paintMatchedCardNumber = () => {
  //- Sí: Pintar con fondo verde
  let number = "";
  for (const item of cardNumbers) {
    for (const ball of cardBolitas) {
      if (item === ball) {
        number = document.getElementById(item);
        number.classList.add("selected");
      }
    }
  }
};

const isThereBingo = () => {
  //¿Han salido todos los números?
  if (handlePlay || handleNewNumber) {
    if (count === 10) {
      //detener juego y volver a jugar
      for (const item of cardNumbers) {
        for (const ball of cardBolitas) {
          if (item === ball) {
            showBingoMessage();
            hideButtons();
            clearInterval(timer);
          }
        }
      }
    }
  }
};

const handlerReset = () => {
  cardBolitas = [];
  cardNumbers = [];
  count = [];
  init();
  cardBolitasElement.textContent = "";
  hideBingoMessage();
};

const showBingoMessage = () => {
  //Mostrar mensaje de Han cantado Bingo!!!
  const textElement = document.querySelector(".js-bingo-message");
  textElement.classList.remove("hidden");
  resetElement.classList.remove("hidden");
};

const hideBingoMessage = () => {
  const textElement = document.querySelector(".js-bingo-message");
  textElement.classList.add("hidden");
  resetElement.classList.add("hidden");
  newNumberBtn.classList.remove("hidden");
  playBtn.classList.remove("hidden");
};

const hideButtons = () => {
  //Ocultar botones de Saca una bolita y Play
  newNumberBtn.classList.add("hidden");
  playBtn.classList.add("hidden");
};

const isPlayingMode = () => {
  //¿Estoy en modo automático?
  if (handlePlay) {
    //- Sí");
    createNewBingoNumberAgain();
  } else {
    //- No");
  }
};

const createNewBingoNumberAgain = () => {
  //Esperar un segundo y volver a empezar
  timer = setInterval(() => {
    playRound();
  }, 1000);
};

//listener
newNumberBtn.addEventListener("click", handleNewNumber);
playBtn.addEventListener("click", handlePlay);
resetElement.addEventListener("click", handlerReset);

// init page

init();
