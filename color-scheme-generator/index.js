const colorPickerEl = document.querySelector(".color-picker");
const themesEl = document.querySelector(".themes");
const getBtn = document.querySelector(".get-btn");
const colorEls = document.querySelectorAll(".color");
const colorHexEls = document.querySelectorAll(".color-hex");

getBtn.addEventListener("click", function () {
    const url = `https://www.thecolorapi.com/scheme?hex=${colorPickerEl.value.substring(1)}&mode=${themesEl.value}&format=json`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.colors.forEach((color, index) => {
                colorEls[index].style.backgroundColor = color.hex.value;
                colorHexEls[index].textContent = color.hex.value;
            });
        });
})


colorEls.forEach((colorEl, index) => {
    colorEl.addEventListener("click", function () {
        copyToClipboard(colorHexEls[index].textContent);
    })
})

colorHexEls.forEach(colorHexEl => {
    colorHexEl.addEventListener("click", function () {
        copyToClipboard(colorHexEl.textContent)
    })
})

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
