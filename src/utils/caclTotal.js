export const calcTotal = (orderGoods) => {
  return orderGoods.reduce(
    ([totalCount, totalPrice], item) => {
      const sumCount = totalCount + item.count;
      const sumPrice = totalPrice + item.price * item.count;
      return [sumCount, sumPrice];
    },
    [0, 0]
  );
};
