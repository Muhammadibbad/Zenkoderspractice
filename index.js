// you live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to
//  go for a short walk. The city provides its citizens with a Walk Generating App on their 
// phones -- everytime you press the button it sends you an array of one-letter strings 
// representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block
//  for each letter (direction) and you know it takes you one minute to traverse one city block, 
// so create a function that will return true if the walk the app gives you will take you exactly 
// ten minutes (you don't want to be early or late!) and will, of course, return you to your 
// starting point. Return false otherwise.

// Note: you will always receive a valid array 



function isValidWalk(walk) {
    let ns = 0, ew = 0; 
    if(walk.length === 10){
      for (let i=0;i<walk.length;i++) { 
        if (walk[i] == 'n') ns += 1; 
        if (walk[i] == 's') ns -= 1; 
        if (walk[i] == 'e') ew += 1; 
        if (walk[i] == 'w') ew -= 1; 
      } 
    }
    else{
      return false
    }
    return ns === 0 && ew === 0; 
  }

// ====================================================================================================

// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here
  let countx=0
  let counto=0
  let strlow=str.toLowerCase();
  for(let i of strlow){
    if(i=="o"){
      counto++
    }
    if(i=="x"){
      countx++
    }
  }
  if (countx === counto){ return true}
  else{ return false}
}

// ====================================================================================================

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends){
    //your code here
    let shouldBe=[]
    for(let i of friends){
      if(i.length == 4){
        shouldBe.push(i)
      }
    }
    return shouldBe
  }

  // ====================================================================================================

//   parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//   For example (Input --> Output):
  
//   39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//   999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//   4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let count = 0;
    while(num.toString().length > 1){
      num = num.toString().split('').reduce((acc,el)=>acc *= +el,1)
      count++
    }
    return count
  }

