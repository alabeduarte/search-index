const findChildren = (node, [head, ...tail]) => {
  if (head === undefined) return {};

  if (node[head] !== undefined) {
    return {
      [head]: {
        ...node[head],
        ...findChildren(node[head], tail),
      },
    };
  }

  return {
    [head]: {
      ...findChildren(node, tail),
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
