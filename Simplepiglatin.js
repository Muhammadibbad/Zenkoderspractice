// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
//  Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str){
    //Code here
    let comb=[]
    let splitstr=str.split(" ")
    for(let i of splitstr ){
      if(i==="!" || i==="?"){comb.push(i)}
      else{comb.push(i.slice(1)+i.slice(0,1) +"ay")}
       
    }
    return comb.join(" ")
  }