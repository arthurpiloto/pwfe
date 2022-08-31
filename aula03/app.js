`use strict`

import { showArray } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45]

// Aplica um desconto de 2 nos elementos do Array
const discount2 = (number) => number - 2
const numbersDiscount = numbers.map(discount2)
// O método map() percorre um Array e retorna outro Array do mesmo tamanho modificado ou não
// Sintaxe = array.map(callBack)
/* Parâmetros do callBack 
    1º - Elemento
    2º - Índice
    3º - Array
*/

// Fltrar os elementos menores que 20
const smaller20 = (value) => value < 20
const valuesSmaller20 = numbers.filter(smaller20)
// o método filter() percorre um Array aplicando callBack e retorna outro Array do mesmo tamanho ou não, modificado ou não
// Sintaxe = array.filter(callBack)
// Obrigatoriamente o retorno do callBack tem que ser booleano

showArray(numbers, `main`, `ALL NUMBERS`)
showArray(numbersDiscount, `main`, `DISCOUNT OF 02`)
showArray(valuesSmaller20, `main`, `VALUES SMALLER THAN 20`)
showArray(numbers, `main`)
showArray(numbers, `main`, `TEST`)