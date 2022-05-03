function pair_with_target_sum(arr, target) {
  let p1 = 0,
    p2 = arr.length - 1;
  while (p1 <= p2) {
    const sum = arr[p1] + arr[p2];
    if (sum === target) return [p1, p2];
    else if (sum < target) p1++;
    else if (sum > target) p2--;
  }

  // No suitable pairs found
  return [];
}

module.exports = pair_with_target_sum;
