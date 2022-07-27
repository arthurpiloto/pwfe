// Esse comando obriga o arquivo a ser mais específico em relação a criação das variáveis
'use strict'

// Formato tradicional de criar uma função
// Função que junta o nome e sobrenome e mostra o nome completo
function juntarNome (){
    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    
    // Essa String reconhece variáveis e funções
    // Os dois comandos fazem a mesma coisa. Entretanto, o segundo formato é melhor.
    // const nomeCompleto = nome + ' ' + sobrenome
    const nomeCompleto = `${nome} ${sobrenome}`
    
    console.log('Seu nome é ' + nomeCompleto)
}

document.getElementById('juntar').addEventListener('click', juntarNome)