`use strict`

const numeros = [2, 5, 7, 45, 23, 80, 120]

// Problema: Exibir os elementos do array no console
// Solução imperativa (while)
// const ultimoIndice = numeros.length - 1
// let contador = 0
// while (contador <= ultimoIndice)
// {
//     console.log(numeros[contador])
//     contador++
// }

// Solução imperativa (for)
// const ultimoIndice = numeros.length - 1 
// for (let contador = 0; contador <= ultimoIndice; contador++)
// {
//     console.log(numeros[contador])
// }

// Solução declarativa (forEach)
// const mostrarElementos = (numero) => console.log(numero)
// numeros.forEach(mostrarElementos)

// Problema: Exibir os elementos do array no layout
const criarItems = (numero) => {
    const ul = document.querySelector(`ul`)
    const div = document.createElement(`div`)
    div.classList.add(`items`)
    div.textContent = numero
    ul.appendChild(div)
}
numeros.forEach(criarItems)