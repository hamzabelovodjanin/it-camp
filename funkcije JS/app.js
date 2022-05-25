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








// const inchToCm = inch => inch * 2.54
// console.log(inchToCm(10))


// const saberi = (a,b) => a + b
// console.log(saberi (10,1));






// function nekaFunkcija (prvi,drugi,treci = false) {
// if(treci) {
//    return  prvi+drugi+treci
// }
// else {
//     return prvi + drugi
    
// }
// }
// console.log(nekaFunkcija(2,2,10))



//  DA SE UNESU TRI BROJA I DA SE ODRADI FUJNKCIJA KOJA CE DA UZME 3 broja da pomnozi i da rezultat prikaze u alert




// prvi = 10
// drugi = 20
// treci = 30

// function mnozenje (prvi,drugi,treci) {
//     return prvi*drugi*treci;
//     }
// mnozenje
// console.log(mnozenje(prvi,drugi,treci))

// alert(mnozenje(prvi,drugi,treci))


const cars = ["BMW", "Audi", "Smart"]
//DODAVANJE ELEMENTA NA KRAJU NIZA = PUSH
cars.push("MB", "RR" )
//ZA BRISANJE ZADNJEG CLANA = POP
// cars.pop()
// DODAVANJE NA POCETAK NIZA = unshift
cars.unshift("Nissan")

// BRISANJE PRVOG CLANA NIZA = shift
// cars.shift()

// OKRECE NIZ NAOPAKO = reverse

cars.reverse();

// SPAJANJE DVA NIZA = concat(niz)
const imena = ["Faris", " Isko", "Aldin"]
const age = [20,100,50,120,200,76]

const spojeniNiz = imena.concat(age)
console.log(spojeniNiz)

// TRAZENJE CLANA NIZA = Find
const trazenaVrednost = age.find((el) => el > 50)
console.log(trazenaVrednost)


console.log(cars)
// const godine = [11, 76, 26, 6, 23, 21, 29, 16]
// const druge_godine = [11, 76, 8, 10, 5 , 14 , 28, 98, 101
// ]
// function returnAdults (ages) {
//     const nonAdults = []
//     for (const age of ages) {
//         if (age < 18) {
//             nonAdults.push(age)
//         }
//     }

// return nonAdults

// }
// console.log(returnAdults(druge_godine))

