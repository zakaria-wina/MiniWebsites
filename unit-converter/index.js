const inputEl = document.querySelector("#input-el");
const btnEl = document.querySelector("#btn-el");
const errorEl = document.querySelector("#error-el");
const lengthRes = document.querySelector("#length-result");
const volumeRes = document.querySelector("#volume-result");
const massRes = document.querySelector("#mass-result");
const numberOfDecimals = 5;

btnEl.addEventListener("click", () => {
    const number = Number(inputEl.value)
    if (number) {
        errorEl.textContent = "";
        setLength(number);
        setVolume(number);
        setMass(number);
    }
    else errorEl.textContent = "Not A Number";
})

function setLength(number) {
    const toFeets = Number((number * 3.281).toFixed(numberOfDecimals));
    const toMeters = Number((number / 3.281).toFixed(numberOfDecimals));
    lengthRes.textContent = `${number} meters = ${toFeets} feet | ${number} feet = ${toMeters} meters`;
}

function setVolume(number) {
    const toGallons = Number((number * 0.264).toFixed(numberOfDecimals));
    const toLiters = Number((number / 0.264).toFixed(numberOfDecimals));
    volumeRes.textContent = `${number} liters = ${toGallons} gallons | ${number} gallons = ${toLiters} liters`;
}

function setMass(number) {
    const toPounds = Number((number * 2.204).toFixed(numberOfDecimals));
    const toKilo = Number((number / 2.204).toFixed(numberOfDecimals));
    massRes.textContent = `${number} kilos = ${toPounds} pounds | ${number} pounds = ${toKilo} kilos`;
}
