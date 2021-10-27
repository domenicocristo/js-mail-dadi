let userEmals = prompt("Qual'è la tua email?");
let feedback = document.getElementById("feedback")
const validEmails = ["bho@gmail.com", "nonloso@gmail.com", "nonhoinventiva@gmail.com"];
let emailvalidator = false;

for (let i = 0; i < validEmails.length; i++) {
    if (userEmals == validEmails[i]) {
        emailvalidator = true;
    }
}

if (emailvalidator === true) {
    feedback.innerHTML = `La tua email è valida!`;
} else {
    feedback.innerHTML = `La tua email non è valida!`;
}