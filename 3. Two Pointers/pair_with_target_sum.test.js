const pair_with_target_sum = require("./pair_with_target_sum");

test("case 1", () => {
  expect(pair_with_target_sum([1, 2, 3, 4, 6], 6)).toStrictEqual([1, 3]);
});

test("case 2", () => {
  expect(pair_with_target_sum([2, 5, 9, 11], 11)).toStrictEqual([0, 2]);
});
