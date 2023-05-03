//need to search the index where the its left is greater
// than its right (rotation point)
// once we find the rotation point we will know if the
// number we are looking for to the right or left of it
function findRotatedIndex(arr, val) {
  let rotationPoint = -1;
  let right = arr.length - 1;
  let left = 0;
  let middle = Math.floor((right - left) / 2);
  
}
//                   L M   R
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
//                              L  M  R
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
module.exports = findRotatedIndex;
