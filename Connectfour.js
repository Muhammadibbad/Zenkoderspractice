// Connect Four
// Take a look at wiki description of Connect Four game:

// Wiki Connect Four

// The grid is 6 row by 7 columns, those being named from A to G.

// You will receive a list of strings showing the order of the pieces which dropped in columns:

//   piecesPositionList = ["A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "G_Red",
//                         "B_Yellow"]
// The list may contain up to 42 moves and shows the order the players are playing.

// The first player who connects four items of the same color is the winner.

// You should return "Yellow", "Red" or "Draw" accordingly.




piecesPositionList = ["A_Yellow",
"B_Red",
"B_Yellow",
"C_Red",
"G_Yellow",
"C_Red",
"C_Yellow",
"D_Red",
"G_Yellow",
"D_Red",
"G_Yellow",
"D_Red",
"F_Yellow",
"E_Red",
"D_Yellow"]

function whoIsWinner(piecesPositionList){
    //return "Red", "Yellow" or "Draw"
    red=1
    yell=1
    let remPart=piecesPositionList.map((x)=> x.slice(2))
    for(let i of remPart){
        if(i == "Red" ){
            if(red==4){
                return console.log("Red")
            }
            red=red+1

        }
         if(i == "Yellow"){
            if(yell==4){
                return console.log("Yellow")
            }
            yell=yell+1
        }
        
    }
    if(red==yell){
        return console.log("Draw")
    }
  }

whoIsWinner(piecesPositionList)