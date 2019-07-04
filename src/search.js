const nodesOf = indexedWords => Object.keys(indexedWords || {});

const findWord = (
  [head, ...tail],
  indexedWords,
  searchResult = { keyword: '', result: [] },
) => {
  if (indexedWords === undefined) return searchResult;
  if (nodesOf(indexedWords).length === 0) return searchResult;

  if (indexedWords[head]) {
    const word = searchResult.keyword.concat(head);

    return findWord(tail, indexedWords[head], {
      ...searchResult,
      keyword: word,
      result: [word],
    });
  }

  if (
    (indexedWords[head] || tail.length === 0) &&
    nodesOf(indexedWords).length != 0
  ) {
    return findWord(nodesOf(indexedWords), indexedWords, searchResult);
  }

  if (indexedWords[head] === undefined) return { ...searchResult, result: [] };
};

class Search {
  constructor(indexedWords) {
    this.indexedWords = indexedWords;
  }

  performSearchBy(term) {
    const { result } = findWord(term, this.indexedWords);
    return result;
  }
}

export default Search;
