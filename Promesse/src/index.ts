function calcu(num1:number, num2:number):Promise<number>{
  return new Promise((resolve) => {
    let resultat: number = num1 + num2;
    if(resultat !== 0){
      resolve(resultat);
    }
  });
}
calcu(12,9)
.then((resultat) =>console.log(`${resultat}`))
