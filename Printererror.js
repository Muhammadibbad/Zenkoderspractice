// The colors used by the printer are recorded in a control string. For example a "good" control 
// string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b,
//  one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string 
// is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the 
// printer as a string representing a rational whose numerator is the number of errors and the denominator 
// the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
    // your code
  let count=0
  let totallen=s.length
  let wrongalpha=["n","o","p","q","r","s","t","u","v","w","x","y","z"]
  for(let i of s){
    for(let j of wrongalpha){
      if(i==j){
        count=count+1
      }
    }
  }
  return `${count}/${totallen}`
}