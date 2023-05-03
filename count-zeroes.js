function countZeroes(arr) {
  let midIndex = Math.floor((arr.length - 1) / 2);
  let counter = 0;
  let right = arr.length - 1;
  let left = 0;
  while (right >= left) {
    midIndex = Math.floor((right + left) / 2);
    if (arr[midIndex] === 0) {
      counter += right - midIndex + 1;
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return counter > 0 ? counter : -1;
}
module.exports = countZeroes;
