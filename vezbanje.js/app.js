// function arrayMap(arr, clback) {
//     res = []
// for (let i = 0; i < arr.length; i++) {
//     newEl =  clback(arr[i])
//     res.push(newEl)
    
// }
// return res
// }

// myfunc = function (arg1) {
//     return arg1 * 2
// }

// niz = arrayMap([1,2,3,4,5], myfaunc)
// console.log(niz)


// res = [1,2,3,4,5].map(el => {                                              MAP SE KORISTI ZA PRAVLJENJE NOVOG NIZA I IZBACUjE ONE STO SU ISpUNILI USLOVE A oni sto nisu izbacuje undefined
//     if (el >=3) {
//         return el
//     }
// })

// res2 = [1,2,3,4,5].filter(el => {                                                   FILTER SE KORISTI ZA PRAVLJENJE NOVOG NIZA I IZBACUjE ONE STO SU ISpUNILI USLOVE            
//     if (el >=3) {
//         return el
//     }
// })

// console.log(res)
// console.log(res2)






// console.log(1)
// console.log(2)

// setTimeout(() => {
//     console.log(3)
// }, 1000);

// console.log(4)




// posao = new Promise ((resolve,reject) => {
//     response = 200
//     for (let i = 0; i < 999000000; i++) {
        
//         }
//     if( response === 200) {
//         resolve([1,2,3,4,5])
//     }
//     else {
//         reject("GRESKAAAAAAAAA!!!")
//     }
// })

// posao.then((data)=> {   //then se koristi ako je uspesan odgovor

//     console.log("uspesno si povukao podatke", data)
//     arg = data.filter((el) => el % 2 === 0)
//     return arg
// })
// .then((arg1) => {
//     console.log("Parni brojevi ", arg1)
// })


// .catch((err)=>{ // catch se koristi ako je neuspesan odgovor
//     console.log("neuspesno si povukao podatke", err)
// })

// .finally (() => {
//     console.log("disati")
// })


// for (var i = 0; i < 10; i++) {
//     setTimeout (()=> {
//         console.log(i)
//     }, 0)
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout (()=> {
//         console.log(i)
//     }, 0)
// }



