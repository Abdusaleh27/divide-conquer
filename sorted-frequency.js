function sortedFrequency(arr, val) {
  let right = searchRight(arr, val);
  let left = searchLeft(arr, val);
  if (left === -1) return left;
  return right - left + 1;
}

function searchLeft(arr, val, left = 0, right = arr.length) {
  if (right >= left) {
    let middle = Math.floor((right + left) / 2);
    if ((middle === 0 || val > arr[middle - 1]) && arr[middle] === val) {
      return middle;
    } else if (val > arr[middle]) {
      return searchLeft(arr, val, middle + 1, right);
    } else {
      return searchLeft(arr, val, left, middle - 1);
    }
  }
  return -1;
}
function searchRight(arr, val, left = 0, right = arr.length) {
  if (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (
      (middle === arr.length - 1 || val < arr[middle + 1]) &&
      arr[middle] === val
    ) {
      return middle;
    } else if (val < arr[middle]) {
      return searchRight(arr, val, left, middle - 1);
    } else {
      return searchRight(arr, val, middle + 1, right);
    }
  }
  return -1;
}

module.exports = sortedFrequency;
