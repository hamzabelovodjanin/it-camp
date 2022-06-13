//objekti
// Kljucevi ne mogu biti dve reci, moze biti markaAuta, ili marka_auta.

// const myCar = {

// //  KLJUC : VREDNOST
//     id: 1,
//     marka: "Audi" ,
//     model: "a4" ,
//     boja: "crvena",
//     pogon: "quattro",
//     menjac: "automatski",
//     km: 24000, 
//     kontakt: ['060010291', '02001231'],
//     servis: {
//         datum: "04.maj",
//         km: 23000,
//         serviser: "Geko"
//     },
//     udaran: true,

// }
// console.log(myCar)
// console.log(myCar.servis.serviser)

// // myCar.model === myCar['model']



// const radnik = {
//     first_name : "Bob",
//     last_name : "Euroblok",
//     age : 30,
//     job: "Programer",
//     adress: "Avnoja BB",
//     city: "Novi Pazar",
//     Contact: '062123321',
//     radni_sati: 170,
//     satnica: 20,


// }
// console.log("Radnik", radnik.first_name, radnik.last_name , "radi kao", radnik.job, "ima", radnik.age , "godina", "zivi u", radnik.city, "prima platu", radnik.radni_sati * radnik.satnica )


// const radnica = {

//     firstName: "Bob",
//     lastName: "Euroblok",
//     godine: 30,
//     fullName : function() {
//         console.log(this)
//         return this.firstName + "  " +  this.lastName
//     },
//    adresa: {
//         ulica: "slsl",
//         br: 5,
//         getAdress: function() {
//             console.log(this)

//         },
//     },
// }
// console.log(radnica.adresa.getAdress())
 


// const auto = {
//     marka: "Mercedes",
//     model: "GLS",
//     maks_brzina: 260,
//     trenutna_brzina: 0,
//     drive : function(num) {
//          if(this.trenutna_brzina + num > this.maks_brzina) {
//              alert("Ide preko granice")
//          }
//          else {
//              this.trenutna_brzina += num
//          }
        
//     },

//     brake : function(num) {
//          this.trenutna_brzina -= num

//     },

//     stop : function() {
        
//          this.trenutna_brzina = 0
//     },
// }

// auto.drive(250)




// console.log(auto)
    

// const students = [

//     {name: 'Faris', grade: 8, year: 2},
//     {name: 'Isko', grade: 10, year: 4},
//     {name: 'Aldin', grade: 8, year: 2},
//     {name: 'Amina', grade: 9, year: 4},
//     {name: 'Sabina', grade: 9, year: 3},
//     {name: 'Denis', grade: 7, year: 4},
//     {name: 'Senad', grade: 6, year: 1},
    

// ]
// function getAvgGrade (array) {
    
//     let funkcija = array.map(el => el.grade)
   
//     console.log(funkcija)
//     let sum = funkcija.reduce((a,b) => a+b)
//     console.log(sum)
//     return (sum / funkcija.length).toFixed(2)

    


// }
// console.log(getAvgGrade(students))
// // getAvgGrade(students)
    


const person = {
    name : "John Doe",
    age: 22,
}
const car = {
    name: "Audi",
}
function sayHello () {

    console.log (`Hello ${this.name}`)
}
sayHello.call(person)


let hrana = { food: "Pizza"}

function favFood(text, rating) {
    return `${this.food} ${text} ${rating}`
}
console.log(favFood.call(hrana, "je ukusna", 9)) // PRVI ARGUMENT JE OBJEKAT ZA KOJI CEMO DA ZAKACIMO THIS
console.log(favFood.apply(hrana, ["nije ukusna", 6])) //PRVI ARGUMENT JE OBJEKAT ZA KOJI CEMO DA ZAKACIMO THIS(I ide u niz)

// console.log(favFood.bind(hrana))

const bindFunc = favFood.bind(hrana)

console.log(bindFunc('nije nesto' , 8)) // BIND VRACA FUNKCIJU

const ime = 'John Doe'
const zanimanje = 'ubica'
const godine = 40
console.log(`${ime} je, ${zanimanje} i ima ${godine}`)