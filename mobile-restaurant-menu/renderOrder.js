import menuArray from './data.js'

export const orderItemsEl = document.querySelector('#order-items');
export const orderPriceEl = document.querySelector('#order-price-total')

export function renderOrder() {
    let orderPrice = 0;
    orderItemsEl.innerHTML = "";
    menuArray.forEach((menuItem) => {
        const {name, ingredients, id, price, emoji, amount} = menuItem;
        if (!amount) return;
        const orderItemEl = document.createElement('div');
        orderItemEl.classList.add('order-item');
        orderItemEl.innerHTML = `
        <p>${name}</p>
        <button class='btn-remove' data-id="${id}">remove</button>
        <p class='order-price'>${amount} ( $ ${price} )</p>
        `;
        orderItemsEl.append(orderItemEl);
        orderPrice += price * amount;
    })
    orderPriceEl.textContent = `$ ${orderPrice}`;
}
