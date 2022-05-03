const smallest_subarray_with_a_greater_sum = require("./smallest_subarray_with_a_greater_sum");

test("case 1", () => {
  expect(smallest_subarray_with_a_greater_sum([2, 1, 5, 2, 3, 2], 7)).toBe(2);
});

test("case 2", () => {
  expect(smallest_subarray_with_a_greater_sum([2, 1, 5, 2, 8], 7)).toBe(1);
});

test("case 3", () => {
  expect(smallest_subarray_with_a_greater_sum([3, 4, 1, 1, 6], 8)).toBe(3);
});
