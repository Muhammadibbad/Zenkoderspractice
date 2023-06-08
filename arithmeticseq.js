// sequence of numbers is called an arithmetic progression if the difference between any two consecutive
//  elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic
//  progression. Otherwise, return false.


var canMakeArithmeticProgression = function(arr) {
    let arrSort=arr.sort((a, b) => a - b)
    console.log(arrSort)
    let diff=0
    let diffcheck=arrSort[1]-arrSort[0]
    for(let i=0;i<arrSort.length-1;i++){
        diff=arrSort[i+1]-arrSort[i]
        if(diff != diffcheck){return false}
        
    }
    return true
};

console.log(canMakeArithmeticProgression([-68,-96,-12,-40,16]))