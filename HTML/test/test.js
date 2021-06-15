const sentence = "This is a sentence";
const context = (sentence) => {
  // Code your function for context here
  const sentenceSplit = sentence.split(" ");
  sentenceSplit;
  const sentenceNormal = sentenceSplit.filter((word) => {
    if (
      word.substr(0, 1).toUpperCase() !== "A" &&
      "E" &&
      "I" &&
      "O" &&
      "U" &&
      "Y" &&
      "y"
    ) {
      return word;
    }
  });
  sentenceNormal;
  console.log(sentenceNormal.join(" "));
  // return sentenceJoiner(sentenceNormal);
};

context(sentence);
