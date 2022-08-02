'use strict'

function somar() {
    const numero1 = document.getElementById('primeiroNumero').value
    const numero2 = document.getElementById('segundoNumero').value
    const resultado = document.getElementById('resultado')

    const somaTotal = numero1 + ' + ' + numero2 + ' = ' + (parseFloat(numero1) + parseFloat(numero2))
    resultado.textContent = somaTotal
}

document.getElementById('somar').addEventListener('click', somar)

function subtrair() {
    const numero1 = document.getElementById('primeiroNumero').value
    const numero2 = document.getElementById('segundoNumero').value
    const resultado = document.getElementById('resultado')

    const somaTotal = numero1 + ' - ' + numero2 + ' = ' + (parseFloat(numero1) - parseFloat(numero2))
    resultado.textContent = somaTotal
}

document.getElementById('subtrair').addEventListener('click', subtrair)

function multiplicar() {
    const numero1 = document.getElementById('primeiroNumero').value
    const numero2 = document.getElementById('segundoNumero').value
    const resultado = document.getElementById('resultado')

    const somaTotal = numero1 + ' × ' + numero2 + ' = ' + (parseFloat(numero1) * parseFloat(numero2))
    resultado.textContent = somaTotal
}

document.getElementById('multiplicar').addEventListener('click', multiplicar)

function dividir() {
    const numero1 = document.getElementById('primeiroNumero').value
    const numero2 = document.getElementById('segundoNumero').value
    const resultado = document.getElementById('resultado')

    const somaTotal = numero1 + ' ÷ ' + numero2 + ' = ' + (parseFloat(numero1) / parseFloat(numero2))
    resultado.textContent = somaTotal
}

document.getElementById('dividir').addEventListener('click', dividir)