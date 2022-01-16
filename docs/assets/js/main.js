"use strict";const newNumberBtn=document.querySelector(".js-new-number-btn"),playBtn=document.querySelector(".js-play-btn"),cardBolitasElement=document.querySelector(".js-bingo-numbers"),resetElement=document.querySelector(".js-reset-btn");let timer,cardNumbers=[],cardBolitas=[],count=[],ballShar=[];const init=()=>{generateRandomNumbers(),paintCardNumbers()},generateRandomNumbers=()=>{for(let e=0;e<20;e++){const t=generateRandomNumber(20);cardNumbers.includes(t)?e--:cardNumbers.push(t)}},generateRandomNumber=function(e){return Math.ceil(Math.random()*e)},handleNewNumber=()=>{clearInterval(timer),playRound()},handlePlay=()=>{setPlay()},setPlay=()=>{createNewBingoNumberAgain()},playRound=()=>{count++,createNewBingoNumber(),paintCardNumbers(),paintBingoNumbers(),isThereBingo()},createNewBingoNumber=()=>{for(let e=0;e<1;e++){const t=generateRandomNumber(20);cardBolitas.includes(t)?e--:cardBolitas.push(t)}},paintBingoNumbers=()=>{cardBolitasElement.textContent="";for(let e=0;e<cardBolitas.length;e++){const t=document.createElement("li");t.className="number",t.setAttribute("data-id",""+cardBolitas[e]),t.textContent+=cardBolitas[e],cardBolitasElement.appendChild(t)}},paintCardNumbers=()=>{const e=document.querySelector(".js-card-numbers");e.textContent="";for(let t=0;t<cardNumbers.length;t++){const n=document.createElement("li");n.className="number",n.setAttribute("id",""+cardNumbers[t]),n.textContent=cardNumbers[t],e.appendChild(n)}paintMatchedCardNumber()},paintMatchedCardNumber=()=>{let e="";for(const t of cardNumbers)for(const n of cardBolitas)t===n?(e=document.getElementById(t),e.classList.add("selected")):e=null},isThereBingo=()=>{(handlePlay||handleNewNumber)&&10===count&&(showBingoMessage(),hideButtons(),clearInterval(timer))},handlerReset=()=>{cardBolitas=[],cardNumbers=[],count=[],ballShar=[],init(),cardBolitasElement.textContent="",hideBingoMessage()},showBingoMessage=()=>{document.querySelector(".js-bingo-message").classList.remove("hidden")},hideBingoMessage=()=>{document.querySelector(".js-bingo-message").classList.add("hidden"),resetElement.classList.add("hidden"),newNumberBtn.classList.remove("hidden"),playBtn.classList.remove("hidden")},hideButtons=()=>{newNumberBtn.classList.add("hidden"),playBtn.classList.add("hidden"),resetElement.classList.remove("hidden")},createNewBingoNumberAgain=()=>{timer=setInterval(()=>{playRound()},1e3)};newNumberBtn.addEventListener("click",handleNewNumber),playBtn.addEventListener("click",handlePlay),resetElement.addEventListener("click",handlerReset),init();