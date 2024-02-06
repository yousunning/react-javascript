const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

//-------------------------------------------


test("pw4자리", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});
