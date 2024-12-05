// oppagve 1

// num1 = prompt("Skriv inn tall 1")

// if (num1 % 2 == 0) {
//     console.log("Partall");
// } else {
//     console.log("Oddetall");
// }

// oppageve 2 

// alder = prompt("Hvor gammel er du?'")

// if (alder < 13) {
//     console.log("Barn");
// } else if (alder >= 13 && alder <= 19) {
//     console.log("Tennåring");
// } else if (alder >= 20 && alder <= 64) {
//     console.log("Voksen");
// } else {
//     console.log("Pensjonist");
// }

// oppgave 3 

// navn1 = "kaiseddin"
// pass1 = "kais123"

// navn2 = prompt("Skriv inn brukernavn")
// pass2 = prompt("Skriv inn passord")

// if (navn1 == navn2 && pass1 == pass2) {
//     console.log("Innlogget");
// } else {
//     console.log("Brukernavn eller passord er inkorrekt");
// }

// oppgave 4


// month = prompt("Hvilken måned er det? kan kun skrive i tall")

// if (month == 12 || month == 1 || month == 2) {
//     console.log("Det er vinter");
// } else if (month == 3 || month == 4 || month == 5) {
//     console.log("Det er vår");
// } else if (month == 6 || month == 7 || month == 8) {
//     console.log("Det er sommer");
// } else {
//     console.log("Det er høst");
// }

// oppgave 5 

// let vekt = prompt("hvor mye veier du")
// let høyde = prompt("hvor høy er du?")

// let høyde2 = (høyde * høyde)/100

// let BMI = (vekt/høyde2)*100
// let BMI2 = Math.ceil(BMI);

// console.log("Din BMI er", BMI2);

// oppgave 6 

// let Alder = prompt("Hvor gammel er du?")

// if (Alder < 13) {
//     console.log("Bilettpris 17kr");
// } else if (Alder >= 13 && Alder <= 19) {
//     console.log("Bilettpris 27kr");
// } else if (Alder >= 20 && Alder <= 64) {
//     console.log("Bilettpris 37kr");
// } else {
//     console.log("Bilettpris 27kr");
// }

// oppgave 7

// let grade = prompt("Skriv inn karakteren")

// if (grade>= 75) {
//     console.log("Du har fått karakter A");
// } else if (grade>= 50 && grade < 75) {
//     console.log("Du har fått karakter B");
// } else if (grade>= 25 && grade < 50) {
//     console.log("Du har fått karakter C");
// } else if (grade>= 5 && grade < 25) {
//     console.log("Du har fått karakter D");
// } else {
//     console.log("Du har fått stryk");  
// }

// oppgave 8 

let belop = prompt("Hva er kjøpsbeløpet?")

if (belop >= 500) {
    rabatt = belop*0.9
    rabatt2 = Math.ceil(rabatt);
    console.log("Ditt beløp etter rabatten er", rabatt2);
} else {
    console.log("Du har ikke nok beløp for å få rabatten. Ditt beløp er", belop);
}
