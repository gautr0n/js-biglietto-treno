//chiedere il numero di km
//chiedere l'eta
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65
//stampa il risultato con massimo 2 cifre decimali

const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

let km = parseInt(prompt('inserire i km da percorrere', '6'));
let age = parseInt(prompt('inserire la propria età', '21'));

let cost = (km * 0.21);
console.log(cost);

if(age<18){
    cost = (cost-(cost / 100)*20)
}else if(age>65){
    cost = (cost-(cost / 100)*40)
}
console.log(cost);

const resultCost = document.getElementById('result');

resultCost.innerText = `Il costo del treno è ${cost}`;