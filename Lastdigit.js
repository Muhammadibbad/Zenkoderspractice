var lastDigit = function(str1, str2){  
    let numPow=Math.pow(Number(str1),Number(str2))
    return Number(numPow.toString().slice(-1))
    
  }

console.log(lastDigit(4,2))
