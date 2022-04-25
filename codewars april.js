//You will be given an array a and a value x. 
//All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either.
//Return true if the array contains the value, false if not.

const a = [10,44,59,222]
const x = 10

  function check(a,x){
    return a.includes(x);
  };


  //Your task is to create the functionisDivideBy 
  //(or is_divide_by) to check if an integer number is divisible by both integers a and b.

const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;


  let is_divide_by = (number, a, b) => {
    if(number % a === 0 && number % b === 0){
      return true
    }else{
      return false
    }
  }
  
// You are given two sorted arrays that both only contain integers.   
// Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2),   
// where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

let arrA = [23,5,77,33]
let arrB = [44,9,12,88]

// ide is to merge the 2 arrays then sort them in asc order

let newArr = [...arrA, ...arrB]

newArr;
newArr.sort();

function mergeArr (arrA, arrB){
    return Array.from(new Set([...[...arrA,...arrB].sort();
}


//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if(bool === true){
        return('Yes')
    }else{
        return('No')
    }
  }

  const boolToWord2 = (bool) => {
    if(bool === true){
        return('Yes')
    }else{
        return('No')
    }
  }


  //Very simple, given an integer or a floating-point number, find its opposite.

  function opposite(number) {
    if(num){
        return(-num)
    }else{
        return(+num)
    }
  }

//or this

const opposite = number => -number;

//Implement a function which multiplies two numbers.

const multiply = (a,b) => a * b;

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, 
// there shouldn't be a space at the beginning or the end of the sentence!
 
const words = ['roll', 'round', 'the', 'floor']

function smash (words) {
  return words.join(" ");
};

// You will be given a vector of strings.
//You must sort it alphabetically (case-sensitive, 
//and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.


function twoSort(s) {
 twoSort = wordArray.sort.string()
   return(twoSort)
}

console.log(twoSort)

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}


// Create a function that accepts 2 string arguments and returns 
//an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.



// P parameter 2 strings first is a word second is a letter
// R return integer
// P examples ("Hello", "l")  ==>  2
// P psudocode take both strings, split() the first argument