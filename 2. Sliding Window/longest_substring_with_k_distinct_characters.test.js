const longest_substring_with_k_distinct_characters  = require("./longest_substring_with_k_distinct_characters");

test("case 1", () => {
  expect(longest_substring_with_k_distinct_characters("araaci", 2)).toBe(4);
});

test("case 2", () => {
  expect(longest_substring_with_k_distinct_characters("araaci", 1)).toBe(2);
});

test("case 3", () => {
  expect(longest_substring_with_k_distinct_characters("cbbebi", 3)).toBe(5);
});
