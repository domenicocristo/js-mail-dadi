let userEmals = prompt("Qual'è la tua email?");
const validEmails = ["bho", "nonloso@gmail.com", "nonhoinventiva@gmail.com"];

for (let i = 0; i === validEmails.length; i++) {
    if (validEmails[i]) {
        alert("La tua email è valida!");
    } else {
        alert("La tua email non è valida!");
    }
}