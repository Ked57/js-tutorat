const destructure = object => {
  const { a, b } = object;
  return `${a}, ${b}`
};

exports.destructure = destructure;