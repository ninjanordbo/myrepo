// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel. 

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }

 
