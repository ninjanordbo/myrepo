// Given a non-empty array of integers, return the result of multiplying the values together in order. 

// Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((acc, a) => acc * a)
  }



//   The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

//   You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
  
//   For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
  
//   All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
    savings = normPrice * discount/100
    dutyFree = hol / savings
    return Math.floor(dutyFree)
  }
  
  dutyFree(10, 1, 500)