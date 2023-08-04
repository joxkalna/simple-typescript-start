export const digitize = (n: number): number[] => {
  // TODO
  let myArr = String(n)
    .split("")
    .map((n) => {
      return Number(n);
    });
  let reverseArray = myArr.reverse();
  return reverseArray;
};
