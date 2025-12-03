const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMap = document.querySelectorAll('button')[1]
const buttonReduce = document.querySelectorAll('button')[2]
const buttonFilter = document.querySelectorAll('button')[3]

function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

// ----- MOSTRAR TUDO -----
function showAll() {

    list.innerHTML = ""

    menuOptions.forEach(product => {
        list.innerHTML += `
        <li>
            <img src="${product.src}" />
            <p>${product.name}</p>
            <p class="item-price">${formatPrice(product.price)}</p>
        </li>`
    })
}

// ----- MAPEAR (aumentar 10% no preço) -----
function mapAll() {

    const newPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * 1.10
    }))

    list.innerHTML = ""

    newPrices.forEach(product => {
        list.innerHTML += `
        <li>
            <img src="${product.src}" />
            <p>${product.name}</p>
            <p class="item-price">${formatPrice(product.price)}</p>
        </li>`
    })
}

// ----- SOMAR TUDO (reduce) -----
function sumAll() {
    const total = menuOptions.reduce((acc, product) => acc + product.price, 0)

    list.innerHTML = `
        <li>
            <h2>Total dos lanches:</h2>
            <p class="item-price" style="font-size: 24px; font-weight: bold;">
                ${formatPrice(total)}
            </p>
        </li>
    `
}

// ----- FILTRAR VEGANOS -----
function filterVegan() {

    const veganItems = menuOptions.filter(product => product.vegan)

    list.innerHTML = ""

    veganItems.forEach(product => {
        list.innerHTML += `
        <li>
            <img src="${product.src}" />
            <p>${product.name}</p>
            <p class="item-price">${formatPrice(product.price)}</p>
        </li>`
    })
}

// ---- EVENTOS ----
buttonShowAll.addEventListener('click', showAll)
buttonMap.addEventListener('click', mapAll)
buttonReduce.addEventListener('click', sumAll)
buttonFilter.addEventListener('click', filterVegan)
