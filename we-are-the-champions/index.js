import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-the-champions-191cc-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, "endorsements")

const inputEl = document.querySelector("#input-field");
const publishBtn = document.querySelector("#publish-btn");
const endorsementsEl = document.querySelector("#endorsements");

publishBtn.addEventListener("click", () => {
    const inputVal = inputEl.value
    if (inputVal) {
        push(endorsementsInDB, inputVal);
        inputEl.value = "";
    }
    console.log("hello");
})

onValue(endorsementsInDB, function(snapshot) {
    if (!snapshot.exists()) {
        endorsementsEl.innerHTML = "No endorsements for now...";
        return;
    }
    const itemsArray = Object.entries(snapshot.val());
    endorsementsEl.innerHTML = "";
    for (let i = 0; i < itemsArray.length; ++i) {
        const currentEndorsement = itemsArray[i];
        addEndorsement(currentEndorsement);
    }
})

function addEndorsement(endorsement) {
    const endorsementID = endorsement[0];
    const endorsementVal = endorsement[1];

    const itemEl = document.createElement("li");
    itemEl.textContent = endorsementVal;
    itemEl.addEventListener("dblclick", () => {
        const positionOfEndorsementInDB = ref(database, `endorsements/${endorsementID}`)
        remove(positionOfEndorsementInDB);
    })
    endorsementsEl.append(itemEl);
}
