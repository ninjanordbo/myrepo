// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// const array1 = [1, 2, 3, 4];


// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue



function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }

squareSum([1,2,2])