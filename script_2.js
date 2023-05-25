// Un prompt s'affiche avec la question suivante
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché

function calculateFactorial(num) {
    if (num === 0) {
      return 1;
    }
    return num * calculateFactorial(num - 1);
  }
  
  var number = prompt("De quel nombre veux-tu calculer la factorielle ?");
  
  console.log(`Le résultat est : ${calculateFactorial(number)}`);
  

