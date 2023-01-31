//1 chiedere informazioni all'utente
const personalAge = prompt('inserisci la tua età');
const totalKilometers = prompt('inserisci la quantita di km che intendi percorrere');
console.log(personalAge);
console.log(totalKilometers);

//2 calcolare costo
let ticketCost = totalKilometers * 0.21;
console.log(ticketCost);

//3 calcolare sconti
if (personalAge < 18){
    ticketCost = ticketCost - (ticketCost * 0.20);
    console.log(ticketCost);
} else if (personalAge > 65){
    ticketCost = ticketCost - (ticketCost * 0.40);
    console.log(ticketCost);
} else{
    console.log(ticketCost);
}

//4 emettere il risultato con massimo due cifre decimali
ticketCost = ticketCost.toFixed(2);
console.log(ticketCost);