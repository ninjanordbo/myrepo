// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

//"hello world".toAlternatingCase() === "HELLO WORLD"

String.prototype.toAlternatingCase = function () {
    var newStr = "";
    for (var i = 0; i < this.length; i++){
      if (this.charAt(i).toUpperCase() === this.charAt(i)){
         newStr += this.charAt(i).toLowerCase();
      } else {
         newStr += this.charAt(i).toUpperCase();  
      }
    }
    return newStr;
  }




