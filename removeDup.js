a='LEVELS';

function removeDup(a){
 b=""
strsplit=a.split("")
for(let j=0;j<strsplit.length;j++){
    if(Elementcount(strsplit[j],strsplit)==1)
            b=b+strsplit[j]
 }
 return b
}

function Elementcount(target,myArr){
counter=0;
for (i of myArr) {
    if (i == target) {
          counter++;
      }

  };
  return counter
}

console.log(removeDup(a))

