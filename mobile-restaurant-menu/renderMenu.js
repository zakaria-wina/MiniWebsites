import menuArray from './data.js'

export const menuEl = document.querySelector('#menu');

export function renderMenu() {
    menuArray.forEach((menuItem) => {
        const {name, ingredients, id, price, emoji} = menuItem;
        const menuItemEl = document.createElement('div');
        menuItemEl.classList.add('menu-item');
        menuItemEl.innerHTML = `
        <p class='emoji-item'>${emoji}</p>
        <div class='description-item'>
            <p class='name-item'>${name}</p>
            <p class='ingredients-item'>${ingredients.join(', ')}</p>
            <p class='price-item'>$${price}</p>
        </div>
        <button class='btn-item' data-id="${id}" data-name="${name}" data-price="${price}">+</button>
        `;
        menuEl.append(menuItemEl);
    })
}
