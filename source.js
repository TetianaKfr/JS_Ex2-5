let emailSaisie;
let emailSaisieCoupe;
let positionArabase;

let message = document.getElementById("message");

function verifieProposition() {
  emailSaisie = document.getElementById("email").value;
  if (emailSaisie.includes("@") && emailSaisie.includes(".")) {
    positionArabase = emailSaisie.indexOf("@");
    emailSaisieCoupe = emailSaisie.substring(positionArabase);
    if (emailSaisieCoupe.includes(".")) {
      message.innerHTML =
        '<span class = "text-success">Adres email valide!</span>';
    } else {
      message.innerHTML =
        '<span class = "text-danger">Adres email invalide!</span>';
    }
  } else {
    message.innerHTML =
      '<span class = "text-danger">Adres email invalide!</span>';
  }
}
document
  .getElementById("email")
  .addEventListener("keydown", verifieProposition, false);
