// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.



function rot13(str) {
    strlow=str.toLowerCase().split("")
    a='abcdefghijklm'
    b='nopqrstuvwxyz'
   alph=''
  for(let i=0;i<strlow.length;i++){
    if(a.includes(strlow[i]) ){
    
     pos=a.indexOf(strlow[i])
      alph=alph+b[pos]
    }
    else if(b.includes(strlow[i])){
        pos=b.indexOf(strlow[i])
        alph=alph+a[pos]
    }
    else if(str[i] != strlow[i]){
        let mig=alph[i].toUpperCase()
         alph.replace(alph[i],mig)
    }
    else{alph=alph+strlow[i]}
    
  }

   return alph
  }
console.log(rot13("ROT13"))