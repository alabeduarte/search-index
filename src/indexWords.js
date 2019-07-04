const findChildren = (subTree, [head, ...tail]) => {
  if (head === undefined) return {};

  if (subTree[head] !== undefined) {
    return {
      [head]: {
        ...subTree[head],
        ...findChildren(subTree[head], tail),
      },
    };
  }

  return {
    [head]: {
      ...findChildren(subTree, tail),
    },
  };
};

export default words => {
  return words.reduce((tree, item) => {
    return {
      ...tree,
      ...findChildren(tree, item),
    };
  }, {});
};
