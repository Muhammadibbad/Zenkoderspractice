// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.


function hex(n){
    if (n<0){return "00"}
    if (n>255){return "FF"}
    return ("0"+(Number(n).toString(16))).slice(-2).toUpperCase()
}
function rgb(r, g, b){
    
     return hex(r) +hex(g) +hex(b)
  }


console.log(rgb(272,287,243))