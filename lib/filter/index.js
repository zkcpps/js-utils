/**
 * 根据name值，去重对象数组
 * @param {*} objArr
 * @param {*} name
 * @returns
 */
function uniqueByName(objArr, name) {
  let map = {};
  return objArr.filter((item) => {
    if (map[item[name]]) return false;
    return (map[item[name]] = 1);
  });
}
// const objArr = [
//   {
//     id: 1,
//     name: "tom",
//   },
//   {
//     id: 1,
//     name: "zhang",
//   },
//   {
//     id: 2,
//     name: "hong",
//   },
//   {
//     id: 3,
//     name: "huang",
//   },
// ];

// console.log(uniqueByName(objArr, "id"));
