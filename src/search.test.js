import indexWords from './indexWords';
import Search from './search';

describe('search', () => {
  it('returns basic result from search', () => {
    const indexedWords = indexWords(['foo']);
    const search = new Search(indexedWords);

    expect(search.performSearchBy('foo')).toEqual(['foo']);
  });

  it('returns basic result from search given multiple words', () => {
    const indexedWords = indexWords(['foo', 'bar']);
    const search = new Search(indexedWords);

    expect(search.performSearchBy('bar')).toEqual(['bar']);
  });

  it('returns basic result from search given a partial input', () => {
    const indexedWords = indexWords(['foo', 'bar']);
    const search = new Search(indexedWords);

    expect(search.performSearchBy('b')).toEqual(['bar']);
    expect(search.performSearchBy('ba')).toEqual(['bar']);
    expect(search.performSearchBy('bar')).toEqual(['bar']);
  });

  it('returns empty when word cannot be found', () => {
    const indexedWords = indexWords(['foo', 'bar']);
    const search = new Search(indexedWords);

    expect(search.performSearchBy('biz')).toEqual([]);
  });

  it('returns relevant results based on the input', () => {
    const indexedWords = indexWords(['foo', 'bar', 'back']);
    const search = new Search(indexedWords);

    expect(search.performSearchBy('back')).toEqual(['back']);
  });

  /* TODO:
   * This is pending, I didn't manage to return both words based on a partial
   * input. Perhaps this is the point where I should add more capabilities to
   * the datastructure such as "stop word" attribute somewhere.
   */
  xit('returns relevant results based on the initial characters', () => {
    const indexedWords = indexWords(['foo', 'bar', 'back']);
    const search = new Search(indexedWords);

    expect(search.performSearchBy('ba')).toEqual(['bar', 'back']);
  });
});
