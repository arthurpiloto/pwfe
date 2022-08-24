`use strict`

const numeros = [2, 5, 7, 45, 23, 80, 120]
const nomes = [`Arthur`, `Vinícius`, `Milena`, `Matheus`]
const frutas = [`Uva`, `Maçã`, `Banana`, `Melancia`]

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
// const criarItems = (numero) => {
//     const ul = document.querySelector(`ul`)
//     const div = document.createElement(`div`)
//     div.classList.add(`items`)
//     div.textContent = numero
//     ul.appendChild(div)
// }
// numeros.forEach(criarItems)

const criarContainer = (titulo, array) =>
{
    const main = document.querySelector(`main`)
    const div = document.createElement(`div`)
    div.classList.add(`array-container`)
    div.innerHTML =
    `
    <h2>${titulo}</h2>
    <ul>
        <li class="items">${array.join(`</li><li class="items">`)}</li>
    </ul>
    `
    main.appendChild(div)
}

criarContainer(`Problema 01`, numeros)
criarContainer(`Clientes`, nomes)
criarContainer(`Produtos`, frutas)