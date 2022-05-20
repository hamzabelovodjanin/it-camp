// FUNKCIJE


// function saberi_tri_pet () {
//     const zbir = 3+5
//     return zbir

// }

// function saberi(a,b) {
// return a + b

// }
// // console.log(saberi(30,15)) = Tu dajemo koliko vredi a i b i bez console.log funkcija nece raditi







// function pozdrav(ime){
//     alert("Pozdrav " + " " +ime)
// }
// //pozdrav("Hamza") = Bez ovog funkcija ne radi










// function inchToCm(inch) {

//     return inch * 2.54;
// }
// const visina = inchToCm(25)
// console.log(visina)


// const saberi = function () {
//     //fiunkcija

// }


// const arrowFunc = () => {
//     // funkcija

// }








const inchToCm = inch => inch * 2.54
console.log(inchToCm(10))


const saberi = (a,b) => a + b
console.log(saberi (10,1));






function nekaFunkcija (prvi,drugi,treci = false) {
if(treci) {
   return  prvi+drugi+treci
}
else {
    return prvi + drugi
    
}
}
console.log(nekaFunkcija(2,2,10))
