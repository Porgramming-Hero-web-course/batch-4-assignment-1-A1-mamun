{
  //

  function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    const wordsArray = lowerCaseSentence.split(" ");

    const occurrences = wordsArray.filter((item) =>
      item.includes(lowerCaseWord)
    ).length;

    return occurrences;
  }

  //
}
