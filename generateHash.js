// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
    let splitstr=str.split(" ")
    if(str.trim()==="" || splitstr.length>140 ){
      return false
    }
    let arr=[]
    for(let i of splitstr){
      if (i.slice(0,1) == "#") return false
       arr.push(i.slice(0,1).toUpperCase() + i.slice(1))
    }
    return "#"+arr.join("").trim()
      
  }

console.log(generateHashtag("CodeWars"))