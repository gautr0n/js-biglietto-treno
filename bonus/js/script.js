//1 chiedere informazioni all'utente
const name = prompt('inserisci il tuo nome');
const surname = prompt('inserisci il tuo cognome');
const personalAge = prompt('inserisci la tua età');
const totalKilometers = prompt('inserisci la quantita di km che intendi percorrere');
console.log(name);
console.log(surname);
console.log(personalAge);
console.log(totalKilometers);

//2 calcolare costo
let ticketCost = totalKilometers * 0.21;
console.log(ticketCost);

//3 calcolare sconti
let discountAmmount;

if (personalAge < 18){
    discountAmmount = ticketCost * 0.20;
    ticketCost = ticketCost - discountAmmount;
    console.log(discountAmmount);
    console.log(ticketCost);
} else if (personalAge > 65){
    discountAmmount = ticketCost * 0.40;
    ticketCost = ticketCost - discountAmmount;
    console.log(discountAmmount);
    console.log(ticketCost);
} else{
    console.log(ticketCost);
}

//4 emettere il risultato con massimo due cifre decimali
ticketCost = ticketCost.toFixed(2);
console.log(ticketCost);

//5 stampare tutto a video
const nameSurname = document.getElementById('nameSurname');
const kilometers = document.getElementById('kilometers');
const price = document.getElementById('price');
const discount = document.getElementById('discount');
const finalPrice = document.getElementById('finalPrice');

