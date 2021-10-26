const resultConsumer = document.getElementById("resultConsumer");
const resultComputer = document.getElementById("resultComputer");
const finalResult = document.getElementById("finalResult");
var consumer = Math.floor(Math.random()*6);
resultConsumer.innerHTML = `Il tuo numero è: ${consumer}`;
var computer = Math.floor(Math.random()*6);
resultComputer.innerHTML = `Il numero del computer è: ${computer}`;

if (consumer > computer) {
    finalResult.innerHTML = `Hai vinto! :)`;
}
 else if (consumer < computer) {
    finalResult.innerHTML = `Hai perso! :|`;
 }
 else {
    finalResult.innerHTML = `Pareggio! :(`;
 }
