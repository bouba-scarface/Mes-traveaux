const sentence: string = "tata";
type LetterValue = {
  [key: string]: number;
};
function lettersCounter(sentence: string): LetterValue {
  const sentenceOrder = sentence.split("").sort();
  const stringObjet: LetterValue = {};
  sentenceOrder.forEach((element) => {
    if (stringObjet[element]) {
      stringObjet[element] = stringObjet[element] + 1;
    } else {
      stringObjet[element] = 1;
    }
  });
  return stringObjet;
}

console.log(lettersCounter(sentence));
