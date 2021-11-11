let poids = prompt('quel est votre poids en kg?');
let taille = prompt('quelles est votre taille en m, utilisez le . à la place de la virgule');


function calculerIMC(poids, taille) {

  
  let result = poids / (taille*taille);
  return result;
  
}


  
alert(calculerIMC(poids, taille));
