function max_sum_subarray_size_k(arr, K) {
  let largestSum = 0, currentSum = 0;
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentSum += arr[windowEnd];
    // Start comparing to largest sum when the size of the subarray is equal to what we want
    if(windowEnd-windowStart + 1 == K) {
      if(currentSum > largestSum) largestSum = currentSum;
      currentSum -= arr[windowStart];
      windowStart++;
    }
  }

  return largestSum;
}

module.exports = max_sum_subarray_size_k;
