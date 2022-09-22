//take an array then finds & returns number which does not equal the previous number +1. returns null if array is fully consecutive.
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1] + 1 != arr[i]) {
        return arr[i]
      }
    }
      return null
  }

console.log(firstNonConsecutive([1,2,3,4,5])) // => null
console.log(firstNonConsecutive([11,21,22,23,24])) // => 21
console.log(firstNonConsecutive([-1,0,1,3,5])) // => 3