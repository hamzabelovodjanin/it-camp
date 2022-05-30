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


// const cars = ["BMW", "Audi", "Smart"]
// //DODAVANJE ELEMENTA NA KRAJU NIZA = PUSH
// cars.push("MB", "RR" )
// //ZA BRISANJE ZADNJEG CLANA = POP
// // cars.pop()
// // DODAVANJE NA POCETAK NIZA = unshift
// cars.unshift("Nissan")

// // BRISANJE PRVOG CLANA NIZA = shift
// // cars.shift()

// // OKRECE NIZ NAOPAKO = reverse

// cars.reverse();

// // SPAJANJE DVA NIZA = concat(niz)
// const imena = ["Faris", " Isko", "Aldin"]
// const age = [20,100,50,120,200,76]

// const spojeniNiz = imena.concat(age)
// console.log(spojeniNiz)

// // TRAZENJE CLANA NIZA = Find
// const trazenaVrednost = age.find((el) => el > 50)
// console.log(trazenaVrednost)

// // TRAZENJE INDEXA = findindex

// const trazeniIndex = age.findIndex((el) => el > 100 )
// console.log(trazeniIndex)


// console.log(cars)
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

//FILTER FUNKCIJA - VRACA NIZ

// Vracanje parnih brojeva
// const DATA = [100, 65, 76, 80, 99, 53, 1, 2, 44]

// const returnEven = (numbers) => {
//     return evenNumber = numbers.filter(number => number % 2 === 0  && number <= 50)
    

// }
// MAP FUNKCIJA - VRACA NIZ


// const DATA = [5, 3, 2, 8, 7, 9]
// const returnPow = (numbers) => {

//     return pow = numbers.map(el => el * el + 10)
    


// }

// console.log(returnPow(DATA))

// REDUCE FUNKCIJA - VRACA BROJEVE, STRINOGOVE...

// const DATA = [100, 200, 250, 400, 520]

// const cartTotal = DATA.reduce(
// (previousValue,currentValue) => previousValue + currentValue,500 )


// const DATA = [26,18,16,22,30,28 ]
// const sumAvgAge = (ages) => {
// const getAverage =
//  ages.reduce((previousValue, currentValue ) =>  previousValue + currentValue) / ages.length
 
//  return +(getAverage.toFixed(2))

// // const average = sum / ages.length


// }


// console.log(sumAvgAge(DATA))
// some funkcija
// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));

// // EVERY FUNKCIJA
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));







