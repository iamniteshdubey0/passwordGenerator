const superString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=+[]{}?/><,.!@#$%^&*();:";
const generatorForm = document.querySelector(".pass-generator");
const resetButton = document.querySelector("#reset-btn")

let password = "";

function generatePassword(size) {
    let i = 0;
    while (i < size) {
        password += superString[Math.floor(Math.random() * superString.length)];
        i++;
    }
    return password;
}

generatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generatorForm.password.value = generatePassword(parseInt(generatorForm.password.value));
    generatorForm.password.disabled = true;
});

resetButton.addEventListener("click", (event) => {
    generatorForm.reset();
    generatorForm.password.disabled = false;
    password = "";
})
