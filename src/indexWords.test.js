import indexWords from './indexWords';

describe('indexer', () => {
  it('returns index data for one letter', () => {
    expect(indexWords(['f'])).toEqual({
      f: {},
    });
  });

  it('returns index data for two letters', () => {
    expect(indexWords(['ba'])).toEqual({
      b: {
        a: {},
      },
    });
  });

  it('returns index data for multiple levels deep', () => {
    expect(indexWords(['bar'])).toEqual({
      b: {
        a: {
          r: {},
        },
      },
    });
  });

  it('returns index data for multiple entries', () => {
    expect(indexWords(['foo', 'bar'])).toEqual({
      f: {
        o: {
          o: {},
        },
      },
      b: {
        a: {
          r: {},
        },
      },
    });
  });

  it('returns index data for multiple derivation levels', () => {
    expect(indexWords(['foo', 'back', 'bar', 'boo', 'foobar'])).toEqual({
      f: {
        o: {
          o: {
            b: {
              a: {
                r: {},
              },
            },
          },
        },
      },
      b: {
        a: {
          c: {
            k: {},
          },
          r: {},
        },
        o: {
          o: {},
        },
      },
    });
  });
});
