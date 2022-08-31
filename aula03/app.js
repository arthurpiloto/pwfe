`use strict`

import { showArray } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45]

// Aplica um desconto de 2 nos elementos do Array
const discount2 = (number) => number - 2
// O método map() percorre o Array e retorna outro Array do mesmo tamanho modificado ou não
// Sintaxe = array.map(callBack)
/* Parâmetros do callBack 
    1º - Elemento
    2º - Índice
    3º - Array
*/
const numbersDiscount = numbers.map(discount2)

showArray(numbers, `main`, `ALL NUMBERS`)
showArray(numbersDiscount, `main`, `DISCOUNT`)
showArray(numbers, `main`)
showArray(numbers, `main`, `TEST`)