const characters = ["A","B","C","D","E","F",
                    "G","H","I","J","K","L",
                    "M","N","O","P","Q","R",
                    "S","T","U","V","W","X",
                    "Y","Z","a","b","c","d",
                    "e","f","g","h","i","j",
                    "k","l","m","n","o","p",
                    "q","r","s","t","u","v",
                    "w","x","y","z","0","1",
                    "2","3","4","5","6","7",
                    "8","9","~","`","!","@",
                    "#","$","%","^","&","*",
                    "(",")","_","-","+","=",
                    "{","[","}","]",",","|",
                    ":",";","<",">",".","?",
                    "/"];

const pass1El = document.querySelector("#pass-1");
const pass2El = document.querySelector("#pass-2");

function generatePass() {
    let pass1Str = "";
    let pass2Str = "";
    for (let i = 0; i < 16; ++i) {
        pass1Str += characters[Math.floor(Math.random() * characters.length)];
        pass2Str += characters[Math.floor(Math.random() * characters.length)];
    }
    pass1El.textContent = pass1Str;
    pass2El.textContent = pass2Str;
}
