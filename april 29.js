// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
    var result = [];
    
    for (var i=0; i<array.length; i++) {
       if (array[i] !== 0) {
         result.push(-array[i]);
       } else {
         result.push(array[i]);
       }
    }
  
    return result;
  }