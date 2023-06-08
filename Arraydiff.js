function arrayDiff(a, b) {
     return a.filter(x=>{
         if(b.indexOf(x)== -1)
          return true
     })
 } 





 console.log(arrayDiff([1,2,2,3,2],[2]))