// for petlja
// while
// do while
// i-- smanji za jedan
// i++ povecaj za jedan


// let suma = 0
// for (let i=0; i < 20; i++) {
//     console.log ("Brojac", i)
//     if (i % 2 === 0 ) // RACUNANJE PARNOG BROJA
//     console.log ("Brojac unutar uslova", i )
//     suma += i;
// }
// console.log ("SUMA", suma)

// FIZZBUZZ CHALLANGE
// 0-100; 
// 3 - FIZZ
// 5 - BUZZ
// 3 i 5 - FIZZBUZz
// let n = 20

// while (n === 20) {
//     console.log ("Unutar while petlje")
//     break;
// }
// n = 21 

let suma= 0;
for (let i = 0; i <100; i++) {
    if ( i % 3 === 0 && i % 5 === 0)
    console.log("fizzBuzz",i )
   else if (i % 3 === 0)
    console.log("Fizz", i);
   else if ( i % 5 == 0)
    console.log("Buzz",i);
    else {
        console.log(i);
    }

}