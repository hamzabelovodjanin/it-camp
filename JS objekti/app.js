//objekti
// Kljucevi ne mogu biti dve reci, moze biti markaAuta, ili marka_auta.

const myCar = {

//  KLJUC : VREDNOST
    id: 1,
    marka: "Audi" ,
    model: "a4" ,
    boja: "crvena",
    pogon: "quattro",
    menjac: "automatski",
    km: 24000, 
    kontakt: ['060010291', '02001231'],
    servis: {
        datum: "04.maj",
        km: 23000,
        serviser: "Geko"
    },
    udaran: true,

}
console.log(myCar)
console.log(myCar.servis.serviser)

// myCar.model === myCar['model']



const radnik = {
    first_name : "Bob",
    last_name : "Euroblok",
    age : 30,
    job: "Programer",
    adress: "Avnoja BB",
    city: "Novi Pazar",
    Contact: '062123321',
    radni_sati: 170,
    satnica: 20,


}
console.log("Radnik", radnik.first_name, radnik.last_name , "radi kao", radnik.job, "ima", radnik.age , "godina", "zivi u", radnik.city, "prima platu", radnik.radni_sati * radnik.satnica )


const radnica = {

    firstName: "Bob",
    lastName: "Euroblok",
    godine: 30,
    fullName : function() {
        console.log(this)
        return this.firstName + " " +  this.lastName
    },
   adresa: {
        ulica: "slsl",
        br: 5,
        getAdress: function() {
            console.log(this)

        },
    },
}
console.log(radnica.adresa.getAdress())
 
    
    






