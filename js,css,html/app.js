const glavniDiv = document.querySelector("#pocetak")

const paragraf = document.createElement("p")
paragraf.textContent = ' Ovo je p dodat iz JS'
// glavniDiv.style.backgroundColor = "red" // inline style

glavniDiv.classList.add('kocka') // dodavanje klasa
paragraf.classList.add("text")

const dugme = document.createElement("button")
dugme.textContent = "Click me";
glavniDiv.appendChild(dugme);

const onButtonClick = () => {
    paragraf.classList.toggle("veci-font")
}
dugme.addEventListener("click", onButtonClick)



glavniDiv.append(paragraf)
console.log(glavniDiv)



// document.getElementById(pocetak)
// document.getElementByClassName(klasa-prva)
// document.querySelector(#id)
// document.getElementByTagName()
// document.querySelectorAll()

