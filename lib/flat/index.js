/**
 * 扁平化多层级数组
 * @param {*} arr
 * @returns
 */
const flatForAnyArray = (arr) => {
  return arr.flatMap((num) => (num.length ? flatForAnyArray(num) : num));
};
