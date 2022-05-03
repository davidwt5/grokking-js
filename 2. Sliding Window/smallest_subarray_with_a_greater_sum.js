/*
  Here we increase the subarray size when the sum is too small and we continuously decrease the subarray size when its big enough
  In an attempt to find the smallest continugous subarray in O(N) time
*/
function smallest_subarray_with_a_greater_sum(arr, S) {
  let smallestSubarraySize = Number.MAX_SAFE_INTEGER, currentSubarraySum = 0;
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentSubarraySum += arr[windowEnd];
    while(currentSubarraySum >= S) {
      const currentSubarraySize = windowEnd - windowStart + 1;
      if(currentSubarraySize < smallestSubarraySize) smallestSubarraySize = currentSubarraySize;
      currentSubarraySum -= arr[windowStart];
      windowStart++;
    }
  }

  return smallestSubarraySize;
}

module.exports = smallest_subarray_with_a_greater_sum;
