// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).



function longestConsec(strarr, k) {
    // your code
    arr=[]
    combine=""
    if(k<=0){
        return ""
    }
   else if(k>strarr.length){
            return ""
          
    }
    else if(k===1){
        return longstr(strarr)
     }
    
  else {
  for(var i=0;i<strarr.length-1;i++){
    
     newArr= strarr.slice(i,k)
      combine=newArr.join("")
      arr.push(combine)
      k++
     
  }
  
  return longstr(arr)
}
}

function longstr(str){
    let maxlength=0
   let longeststr=""
   for(var k=0;k<str.length;k++){
    let curstr=str[k]
    if(curstr.length>maxlength || (curstr.length===maxlength && k<str.indexOf(longeststr))){
    maxlength=curstr.length
    longeststr=curstr;
    }
   }
   return longeststr
}

// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 15))