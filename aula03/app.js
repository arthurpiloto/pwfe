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

// Somar todos os valores dos elementos do Array
const sum = (a, b) => a + b
const totalValue = numbers.reduce(sum, 0)
// O método reduce() percorre um Array aplicando um callBack e retorna um único valor
// Sintaxe = array.reduce(callBack, valorAcumulador)
/* Parâmetros do callBack
    1º - Acumulador
    2º - Elemento
    3º - Índice
    4º - Array
*/

showArray(numbers, `main`, `ALL NUMBERS`)
showArray(numbersDiscount, `main`, `DISCOUNT OF 02`)
showArray(valuesSmaller20, `main`, `VALUES SMALLER THAN 20`)
showArray([totalValue], `main`, `TOTAL VALUES`)

/* Exercícios
    1º - Aumentar 100 em cada elemento
    2º - Somente os números pares
    3º - Total dos valores com desconto de 4
    4º - Array com todos os ímpares somando 21
*/

const numbersSum100 = (value) => value + 100
const numbersPlus100 = numbers.map(numbersSum100)
showArray(numbersPlus100, `main`, `NUMBERS PLUS 100`)