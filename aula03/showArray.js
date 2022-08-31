`use strict`

const showArray = (numbers, element, title = `ARRAY`) => {
    const container = document.querySelector(element)
    const div = document.createElement(`div`)
    div.classList.add(`numbers-container`)

    // Preenchendo a DIV com os elementos do Array
    div.innerHTML = `
        <h2>${title}</h2>
        <div class="numbers-item">
            ${numbers.join(`</div><div class="numbers-item">`)}
        </div>
    `
    // Inserindo o novo elemento (DIV) no DOM
    container.appendChild(div)
}

// Criação de um objeto para importar as funções de um arquivo
export {
    showArray
}