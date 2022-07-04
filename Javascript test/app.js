function prviZadatak() {
let unos = prompt("Insert Number")

unos = parseFloat(unos)
const kvadrat = unos*unos
console.log(`Kvadrat broja ${unos} je ${kvadrat}`)
}
prviZadatak()



const CART_DATA = [
    {
      id: 1,
      name: "Hawai Shirt",
      price: 30,
      amount: 2,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Adidas Slippers",
      price: 35,
      amount: 1,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 6,
      name: "White T-Shirt",
      price: 15,
      amount: 4,
      categorty: "summer",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Summer hat",
      price: 7.5,
      amount: 3,
      categorty: "summer",
      rating: 40,
    },
  ];

    const drugiZadatak = (arr) => {
    const len = arr.length;
    const cenaPostarine = 320;
    const cena = arr.map((value) => {
        return {
            name: value.name, totalPrice: value.price * value.amount
        }
    });
    const sum = cena.map((value) => value.totalPrice).reduce((prevV, currV) => prevV + currV, 360)
    return `You got ${len} in cart, shipping cost is ${cenaPostarine}, your total is ${sum}`
};
console.log(drugiZadatak(CART_DATA))




const treciZadatak = async() => {
    const data = await fetch("https://reqres.in/api/users?page=2")
    const product = await data.json()
    return product
    
}

treciZadatak().then((res) => console.log(res.data))
