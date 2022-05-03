const max_sum_subarray_size_k = require("./max_sum_subarray_size_k");

test("case 1", () => {
  expect(max_sum_subarray_size_k([2, 1, 5, 1, 3, 2], 3)).toBe(9);
});

test("case 2", () => {
  expect(max_sum_subarray_size_k([2, 3, 4, 1, 5], 2)).toBe(7);
});
