// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana. La funzione dal nome MakePizza, con parametro moreIngredients, presenta il let TheSecond, alla quale abbiamo assegnato il valore "Sugo di pomodoro freschissimo". La console.log che vogliamo stampare è per tanto:theSecond + condizione dentro if (if true makePizza "rucola, prosciutto crudo e scaglie di grana. + parametro MoreIngridents). Il secondo console.log, console.log("Il secondo ingrediente necessario: ", theSecond), da errore (Uncaught ReferenceError: theSecond is not defined) perchè il let theSecond è stato inserito dentro la funzione makePizza e non è stato dichiarato nell'IF.  Qualora volessimo stampare "Il secondo ingrediente necessario:  Sugo di pomodoro freschissimo" avremmo per tanto dovuto dichiarare dentro if "let theSecond = "Sugo di pomodoro freschissimo";" e con  console.log("Il secondo ingrediente necessario: ", theSecond); avremmo ottenuto il risultato su citato. 

function makePizza(moreIngredients) {
    let theSecond = "Sugo di pomodoro freschissimo";
    // { ... }
    console.log(theSecond + ", " + moreIngredients);
    return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
  }
  
  if (true) {
    makePizza("rucola, prosciutto crudo e scaglie di grana.");
    console.log("Il secondo ingrediente necessario: ", theSecond);
  }