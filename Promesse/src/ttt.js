function calcul(num1, num2){
  return new Promise((resolve) => {
    let resultat = num1 + num2;
    if(resultat !== 0){
      resolve(resultat);
    }
  });
}
calcul(12,9).then((resultat) =>console.log(`${resultat}`));