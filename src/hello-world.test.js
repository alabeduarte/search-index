import helloWorld from './hello-world';

describe('Hello World', () => {
  it('works', () => {
    expect(helloWorld()).toEqual('Hello World');
  });
});
