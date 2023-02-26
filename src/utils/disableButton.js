export const getDisabled = (arr) => {
  return arr.some((item) => item.count === 0) || !arr.length;
};
