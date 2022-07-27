'use strict'

function somarNumeros (){
    const primeiroNumero = document.getElementById('primeiroNumero').value
    const segundoNumero = document.getElementById('segundoNumero').value
    const resultado = document.getElementById('resultado')

    const somaTotal = `Seu nome é: ${nome} ${sobrenome}`

    resultado.textContent = somaTotal
}

document.getElementById('somar').addEventListener('click', somarNumeros)