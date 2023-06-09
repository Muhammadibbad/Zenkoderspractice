function matrixMultiplication(a, b){
    //TODO 
   var multiple=[]
   
   
    len=a.length
    for(var i=0;i<len;i++){
        var row=[]
        for(var j=0;j<len;j++){
            var x = 0;
            for(var k=0;k<len;k++){
                x+= a[i][k] * b[k][j]
            }
           row.push(x) 
        }
        multiple.push(row)
    }
     return multiple
  }

console.log(matrixMultiplication([[1, 2], [3, 2]], [[3, 2], [1, 1]]))