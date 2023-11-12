let homeEl = document.querySelector("#home-result");
let guestEl = document.querySelector("#guest-result");

let homeResult = 0;
let guestResult = 0;

function add1home() {
    homeResult += 1;
    homeEl.textContent = homeResult;
    selectWinner();
}
function add2home() {
    homeResult += 2;
    homeEl.textContent = homeResult;
    selectWinner();
}
function add3home() {
    homeResult += 3;
    homeEl.textContent = homeResult;
    selectWinner();
}
function add1guest() {
    guestResult += 1;
    guestEl.textContent = guestResult;
    selectWinner();
}
function add2guest() {
    guestResult += 2;
    guestEl.textContent = guestResult;
    selectWinner();
}
function add3guest() {
    guestResult += 3;
    guestEl.textContent = guestResult;
    selectWinner();
}

function reset() {
    homeResult = 0;
    guestResult = 0;
    homeEl.textContent = homeResult;
    guestEl.textContent = guestResult;
    selectWinner();
}

function save() {
    console.log(homeResult, guestResult);
}

function selectWinner() {
    if (homeResult > guestResult) {
        homeEl.classList.add("winner");
        guestEl.classList.remove("winner");
    }
    else if (homeResult < guestResult) {
        homeEl.classList.remove("winner");
        guestEl.classList.add("winner");
    }
    else {
        homeEl.classList.remove("winner");
        guestEl.classList.remove("winner");
    }
}
