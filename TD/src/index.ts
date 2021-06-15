const insideOut = (sentence: string): void => {
  const splitSentence = sentence.split("");
  if (sentence.length % 2 === 0) {
    const findMiddleIndex2 = splitSentence.length / 2;
    console.log(
      splitSentence.slice(0, findMiddleIndex2).reverse().join("") +
        splitSentence
          .slice(findMiddleIndex2, sentence.length)
          .reverse()
          .join("")
    );
  } else {
    const findMiddleIndex = Math.floor(splitSentence.length / 2);
    console.log(
      splitSentence.slice(0, findMiddleIndex).reverse().join("") +
        splitSentence[findMiddleIndex] +
        splitSentence
          .slice(findMiddleIndex + 1, sentence.length)
          .reverse()
          .join("")
    );
  }
};
insideOut("sentence");
