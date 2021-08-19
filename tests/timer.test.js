const getTriangle = require("../index");

getTriangle;
test('足し算：2 + 3 = 5 となる', () => {
  expect(getTriangle(2, 3)).toBe(5);
});

//非同期のテスト

// test('2つの数字を足す', async() => {
//   const sum = await add(10, 22);
//   expect(sum).toBe(32);
// });