// Esse comando obriga o arquivo a ser mais específico em relação a criação das variáveis
'use strict'

const nome = 'Arthur'
const sobrenome = 'Piloto'

// const nomeCompleto = nome + ' ' + sobrenome

// Essa String reconhece variáveis e funções
// Os dois comandos, liha 4 e linha 8, fazem a mesma coisa. Entretanto, o formato da linha 8 é melhor.
const nomeCompleto = `${nome} ${sobrenome}`

console.log(nomeCompleto)