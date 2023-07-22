// const { hello } = require("../index");

// test("comparing async strings", () => {
//   expect(hello()).resolves.toBe("Hello");
// });

test("comparing strings", () => {
  expect("Hello").toBe("Hello");
});

test("comparing numbers", () => {
  expect(1 + 1).toBe(2);
});
