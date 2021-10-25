
// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: 3.14 è la stampa che otterremo da console.log due volte. Il primo, console.log(PI);, ci riporta direttamente il valore della costante assegnata, 3.14; il secondo risultato lo si ottiene in relazione alla condizione true incontrata (se PI è maggiore uguale a 3 stampa 3.14) 

const PI = 3.14; 

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}


