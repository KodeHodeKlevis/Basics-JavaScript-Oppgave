//* I denne oppgaven vil det være noe kode som er definert i forkant, ikke fjern noe av denne, men dere skal noen steder fylle dem ut videre slik at koden fungerer.

/* Oppgave 1:  

Fiks loopen for randomArray slik at man får 100 tall pushet inn i randomArray med tall mellom 1 og 1000 (sjekkes via konsoll loggen under)
Tips: For å teste at loopen tar med 1 og 1000, prøv ut først med et lavere maks tall (f.eks 5)
*/
const randomArray = [];

for (let i = 0; i < 100; i++) {  // Endre her, loopen skal kjøre 100 ganger
  randomArray.push(Math.floor(Math.random() * 1000) + 1); // Dette gir tall mellom 1 og 1000
}

console.log(randomArray); // expected result: 1-1000



/* Oppgave 2

Under er en funksjon filterArray som bruker .filter metoden på odds og evens const'ene. Du skal fikse getOdds og getEvens arrow funksjonene for å hente ut de riktige dataene til de forskjellige const'ene.  
*/
function filterArray(arr) {
    const odds = arr.filter(getOdds);
    const evens = arr.filter(getEvens);
  
    // returnerer et object som gjør det lettere å referere til const'ene fra funksjonen senere:
    return { odds, evens };
  }
  
  const getOdds = (num) => num % 2 !== 0; // Oddetall (rest 1 når delt på 2)
  const getEvens = (num) => num % 2 === 0; // Partall (rest 0 når delt på 2)
  

/* Oppgave 3

fiks sumOfOdds og sumOfEvens ved å bruke .reduce metodene. Les her for å se hvordan syntaxen er:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

eksmepel: odds.reduce(riktig syntax)

tips: accumulator kan forkortes til acc, currentValue kan forkortes til curr
tips2: syntaxen ligner noe på det som blir gjort i oppgave 2, men det er 2 parametere istedet + et tall.

*/

// Dette kalles deconstructing som gjør at man kan referere til variabler på innsiden av et scope (i dette tilfelle fra innsiden av en funksjon):
const { odds, evens } = filterArray(randomArray);

const sumOfOdds = odds.reduce((acc, curr) => acc + curr, 0);  // Legger sammen alle oddetallene
const sumOfEvens = evens.reduce((acc, curr) => acc + curr, 0); // Legger sammen alle partallene

/* Oppgave 3.1

Skriv konsoll logger for:
    - sumOfOdds
    - sumOfEvens
    - lengden av odds
    - lengden av evens

    

bruk denne syntaxen i konsoll loggene (+ en ekstra ting etter variabelName hvor du skal finne lengden):
console.log("description of console log:", variabelName)

*/


// Konsoll logger:
console.log("Sum of odds:", sumOfOdds);
console.log("Sum of evens:", sumOfEvens);
console.log("Length of odds:", odds.length);
console.log("Length of evens:", evens.length);



/* Oppgave 4 

Under skal du lage en if else logikk som skal endre result og difference til en ny verdi. Litt av logikken er med allerede som sjekker om sumOfOdds er større enn sumOfEvens. Bruk denne tankegangen videre for å lage tilsvarende logikk hvis sumOfOdds er mindre enn sumOfEvens:

    - hvordan skal du skrive difference i dette tilfelle?
    - Skriv en string som passer til dette tilfelle

Lag i tillegg en logikk som sjekker hvis verken den første eller andre contitionalen ikke stemmer. Logisk sett betyr det at den sjekker om sumOfEvens og sumOfOdds er like, men i realiteten kjøres denne koden bare fordi de to andre conditionalene ikke stemmer:

    - hvordan skal du skrive difference i dette tilfelle?
    - Skriv en string som passer til dette tilfelle

*/

// Conditional Logic
let result = "";
let difference = 0;

if (sumOfOdds > sumOfEvens) {
  difference = sumOfOdds - sumOfEvens;
  result = "Sum of Odds is greater than Sum of Evens.";
} else if (sumOfOdds < sumOfEvens) {
  difference = sumOfEvens - sumOfOdds;
  result = "Sum of Evens is greater than Sum of Odds.";
} else {
  difference = 0;
  result = "Sum of Odds and Sum of Evens are equal.";
}

/* Oppgave 4.1

konsoll log difference. Bruk samme syntax som i oppgave 3.1
*/
// Konsoll log for difference
console.log("Difference:", difference);

/* Oppgave 5

Lag en ny conditional logikk under hvor man sjekker hvilke av odds og evens som er lengst (syntax messig er det veldig likt som i oppgave 4, men man sjekker andre ting, ikke sumOfOdds og sumOfEvens). typeDifference skal endres til en template literal string med hensiktsmessig tekst for å forklare hva som skjer.

tips: Se tilbake hva du har skrevet i oppgave 3.1 for å finne lengdene du skal bruke i denne oppgaven.

eks: 

if (this > that) {
    typeDifference = `There are ${calcutate the difference here} more this than that`
}

*/


let typeDifference;

// Sjekk hvilken som er lengst
if (odds.length > evens.length) {
  typeDifference = `There are ${odds.length - evens.length} more odd numbers than even numbers.`;
} else if (odds.length < evens.length) {
  typeDifference = `There are ${evens.length - odds.length} more even numbers than odd numbers.`;
} else {
  typeDifference = "The number of odd and even numbers is equal.";
}


/* Oppgave 6

- Finn gjennomsnittsverdien av oddetallene og partallene (burde være 2 nye variabler som returnerer gjennomsnittsverdien. Disse brukes i if/else du skal skrive som conditionals, men også for å vise fram riktig verdi i template literalen du skal lage)
- Lag en ny variabel for referanse til verdien du skal vise fram (tilsvarende slik typeDifference og valueDifference ble laget i de forrige oppgavene)
- Lag en ny conditional tilsvarende som i oppgave 4 og 5 for å få ut en template literal som vises på nettsiden.
- Lag en ny p tag i html filen med en id for referanse og skriv inn en ny document. getElementById for å få fanget den opp i javascript filen her:

eks: <p id="dinReferanseVerdi"></p>
eks: document.getElementByid("dinReferanseVerdiFraPtaggen").textContent = variabel

*/

// Definer nye variabler for gjennomsnittsverdiene
const avgOfOdds = sumOfOdds / odds.length;  // Gjennomsnitt av oddetallene
const avgOfEvens = sumOfEvens / evens.length;  // Gjennomsnitt av partallene

// Definer en variabel for referanse til verdien du skal vise frem
let averageDifference;

// Skriv if/else logikk for å sammenligne gjennomsnittsverdiene
if (avgOfOdds > avgOfEvens) {
    averageDifference = `The average of odd numbers (${avgOfOdds.toFixed(2)}) is greater than the average of even numbers (${avgOfEvens.toFixed(2)}).`;
} else if (avgOfOdds < avgOfEvens) {
    averageDifference = `The average of even numbers (${avgOfEvens.toFixed(2)}) is greater than the average of odd numbers (${avgOfOdds.toFixed(2)}).`;
} else {
    averageDifference = `The average of odd and even numbers are equal: (${avgOfOdds.toFixed(2)}).`;
}

/* BONUS Oppgave 7 


Gjør noe tilsvarende oppgave 6, men som viser noe som ikke har blitt vist enda med odds og evens.

f.eks median, størst verdi, minst verdi, hvor mange verdier er over/under en viss verdi, er noen av verdiene enn viss verdi, er noen av verdiene fra odds og evens like.

*/


// // Funksjon for å finne median
// function findMedian(arr) {
//   const sorted = arr.sort((a, b) => a - b); // Sorter arrayen
//   const mid = Math.floor(sorted.length / 2);
//   if (sorted.length % 2 === 0) {
//       return (sorted[mid - 1] + sorted[mid]) / 2; // Gjennomsnitt av de to midterste for partall lengde
//   } else {
//       return sorted[mid]; // Midterste element for oddetall lengde
//   }
// }

// // Funksjoner for å finne største og minste verdi
// const maxOfOdds = Math.max(...odds);
// const minOfOdds = Math.min(...odds);
// const maxOfEvens = Math.max(...evens);
// const minOfEvens = Math.min(...evens);

// // Funksjoner for å telle hvor mange verdier som er over/under 500
// const over500Odds = odds.filter(num => num > 500).length;
// const under500Odds = odds.filter(num => num < 500).length;
// const over500Evens = evens.filter(num => num > 500).length;
// const under500Evens = evens.filter(num => num < 500).length;

// // Sjekk om det finnes noen felles verdier i odds og evens
// const commonValues = odds.some(num => evens.includes(num));

// // Beregn medianene
// const medianOfOdds = findMedian(odds);
// const medianOfEvens = findMedian(evens);

// // Lag en template literal for å vise informasjonen på nettsiden
// let newInfo = `Median of Odds: ${medianOfOdds}. Median of Evens: ${medianOfEvens}.<br>`;
// newInfo += `Max of Odds: ${maxOfOdds}. Min of Odds: ${minOfOdds}.<br>`;
// newInfo += `Max of Evens: ${maxOfEvens}. Min of Evens: ${minOfEvens}.<br>`;
// newInfo += `Number of Odds greater than 500: ${over500Odds}. Number of Odds less than 500: ${under500Odds}.<br>`;
// newInfo += `Number of Evens greater than 500: ${over500Evens}. Number of Evens less than 500: ${under500Evens}.<br>`;
// newInfo += commonValues ? `There are common values between Odds and Evens.` : `There are no common values between Odds and Evens.`;

// // Oppdater HTML med resultatet
// document.getElementById("newStats").innerHTML = newInfo; 

// Funksjon for å finne median
function findMedian(arr) {
  const sorted = arr.sort((a, b) => a - b); // Sorter arrayen
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2; // Gjennomsnitt av de to midterste for partall lengde
  } else {
      return sorted[mid]; // Midterste element for oddetall lengde
  }
}

// Funksjoner for å finne største og minste verdi
const maxOfOdds = Math.max(...odds);
const minOfOdds = Math.min(...odds);
const maxOfEvens = Math.max(...evens);
const minOfEvens = Math.min(...evens);

// Funksjoner for å telle hvor mange verdier som er over/under 500
const over500Odds = odds.filter(num => num > 500).length;
const under500Odds = odds.filter(num => num < 500).length;
const over500Evens = evens.filter(num => num > 500).length;
const under500Evens = evens.filter(num => num < 500).length;

// Sjekk om det finnes noen felles verdier i odds og evens
const commonValues = odds.some(num => evens.includes(num));

// Beregn medianene
const medianOfOdds = findMedian(odds);
const medianOfEvens = findMedian(evens);

// Sjekk om noen verdier er lik en spesifikk verdi (for eksempel 100)
const hasValue100InOdds = odds.includes(100);
const hasValue100InEvens = evens.includes(100);

// Beregn forskjellen mellom maks og min for både odds og evens
const rangeOfOdds = maxOfOdds - minOfOdds;
const rangeOfEvens = maxOfEvens - minOfEvens;

// Lag en template literal for å vise informasjonen på nettsiden
let newInfo = `Median of Odds: ${medianOfOdds}. Median of Evens: ${medianOfEvens}.<br>`;
newInfo += `Max of Odds: ${maxOfOdds}. Min of Odds: ${minOfOdds}.<br>`;
newInfo += `Max of Evens: ${maxOfEvens}. Min of Evens: ${minOfEvens}.<br>`;
newInfo += `Number of Odds greater than 500: ${over500Odds}. Number of Odds less than 500: ${under500Odds}.<br>`;
newInfo += `Number of Evens greater than 500: ${over500Evens}. Number of Evens less than 500: ${under500Evens}.<br>`;
newInfo += commonValues ? `There are common values between Odds and Evens.` : `There are no common values between Odds and Evens.`;

// New checks for specific values (like 100)
newInfo += hasValue100InOdds ? `There is a value of 100 in Odds.` : `There is no value of 100 in Odds.<br>`;
newInfo += hasValue100InEvens ? `There is a value of 100 in Evens.` : `There is no value of 100 in Evens.<br>`;

// Sum comparison
newInfo += sumOfOdds > sumOfEvens 
  ? `The sum of Odds (${sumOfOdds}) is greater than the sum of Evens (${sumOfEvens}).<br>` 
  : sumOfEvens > sumOfOdds 
    ? `The sum of Evens (${sumOfEvens}) is greater than the sum of Odds (${sumOfOdds}).<br>`
    : `The sum of Odds and Evens are equal.<br>`;

// Range comparison (difference between max and min values)
newInfo += `Range of Odds (Max - Min): ${rangeOfOdds}. Range of Evens (Max - Min): ${rangeOfEvens}.<br>`;

// Oppdater HTML med resultatet
document.getElementById("newStats").innerHTML = newInfo;
