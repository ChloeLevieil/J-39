var nombreEtages = prompt("Combien d'étages souhaitez-vous dans la pyramide ?");
var etage = "";

for (var i = 1; i <= nombreEtages; i++) {
  etage += "*"; // Ajoute un astérisque à la chaîne de caractères représentant l'étage
  console.log(etage); // Affiche l'étage courant
}