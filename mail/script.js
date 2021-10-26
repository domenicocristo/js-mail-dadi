let userEmail = prompt("Qual'è la tua email?");
const feedback = document.getElementById("feedback");
const validEmails = ["bho@gmail.com", "nonloso@gmail.com", "nonhoinventiva@gmail.com"];

for (let i = 0; i === validEmails.length; i++) {
    if (userEmail === validEmails) {
        feedback.innerHTML = `La tua email ti consente l'accesso!`;
    } else if (userEmail != validEmails) {
        feedback.innerHTML = `La tua email non ti consente l'accesso!`;
    }
}