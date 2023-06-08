function guessGifts(wishlist, presents) {
    // TODO
    function guessGifts(wishlist, presents) {
      // TODO
      var newArr=[];
      var pre=false;
     for(var i in wishlist)
    {
     for(var j in presents)
     {
       if(wishlist[i].size == presents[j].size)
        {
          if(wishlist[i].clatters == presents[j].clatters)
           {
            if(wishlist[i].weight == presents[j].weight)
            {
              for(var k in newArr)
              {
               if(final[k] == wishlist[i].name)
                {pre=true;}
              }        
              if(pre == false)
              {newArr.push(wishlist[i].name);}
    
            }
           }
        }
     }
     pre=false;
    }
    
    return newArr;
    
    }
  }


  var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist, presents)); 