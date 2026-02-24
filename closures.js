function creerCompte(initiale) {
  var solde = initiale;

  return {

    retirer: function(montant) {
      if (solde - montant >= 0) {
        solde = solde - montant;
        return "Voici votre argent : $" + montant;
      }
      return "Solde insuffisant";
    },

    verifierSolde: function() {
      return "Votre solde est : $" + solde;
    },

    deposer: function(montant) {
      solde = solde + montant;
      return "Votre solde est : $" + solde;
    }

  };
}

function makeCounter(initiale) {
    var valeur = initiale;

    return {
        up: function () {
            valeur++;
            return valeur;
        },

        down: function () {
            valeur--;
            return valeur;
        },

        reset: function () {
            valeur = initiale - 1;  
            return valeur;
        }
    };
}
function Tv() {
var chanelNumber=0
return {

watch:function(){
    console.log('message'+ chanelNumber)

}
}
}
