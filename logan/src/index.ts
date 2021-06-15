const sentence: string = "JE TRANSFORME MA chaine";

function firstLetterInUperCase(sentence: string): string {
  const arraySplit: string[] = sentence.toLocaleLowerCase().split(" ");
  const textTransform = arraySplit.map((word) => {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
  });
  return textTransform.join(" ");
}
console.log(firstLetterInUperCase(sentence));
