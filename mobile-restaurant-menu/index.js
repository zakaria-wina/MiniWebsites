import menuArray from './data.js'
import { menuEl, renderMenu } from './renderMenu.js';
import { orderItemsEl, renderOrder } from './renderOrder.js'

renderMenu()

menuEl.addEventListener('click', (event) => {
    const menuItem = menuArray.find(menuItem => menuItem.id === Number(event.target.dataset.id));
    ++menuItem.amount;
    renderOrder();
})

orderItemsEl.addEventListener('click', (event) => {
    const menuItem = menuArray.find(menuItem => menuItem.id === Number(event.target.dataset.id));
    --menuItem.amount;
    renderOrder();
})

const orderEl = document.querySelector('#order');
const completeEl = document.querySelector('#complete');
const paymentEl = document.querySelector('#payment');

document.querySelector('#btn-order').addEventListener('click', () => {
    paymentEl.style.display = 'flex';
})

document.querySelector('#btn-payment').addEventListener('click', () => {
    paymentEl.style.display = 'none';
    orderEl.style.display = 'none';
    completeEl.style.display = 'block';
})

completeEl.addEventListener('click', () => {
    menuArray.forEach((menuItem) => { menuItem.amount = 0; })
    completeEl.style.display = 'none';
    orderEl.style.display = 'flex';
    renderOrder();
})
