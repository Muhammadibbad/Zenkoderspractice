function findfruit(pattern) {
  let words = ["banana", "apple", "papaya", "cherry"];
  arr = [];
  filtfruit = words.filter((item) => {
    if (item.length == pattern.length) {
      return true;
    }
  });
  flag = true;
  for (var i = 0; i < filtfruit.length; i++) {
    var newVal = "";
    for (var j = 0; j < filtfruit[i].length; j++) {
      if (pattern[j] == "?") {
        newVal = newVal + filtfruit[i][j];
      } else {
        newVal = newVal + pattern[j];
      }
    }
    if (filtfruit.includes(newVal)) {
      arr.push(newVal);
    }
  }
  return arr;
}

const find = (pattern) => {
  const words = ["banana", "apple", "papaya", "cherry"];
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words.length !== pattern.length) continue;
    let isValid = true;
    for(let j = 0; j < words[i].length && isValid; j++) {
        if(pattern[j] === '?') continue;
        console.log(pattern, words[i]);
        if(pattern[j] !== words[i][j]) isValid = false;
    }
    if(isValid) result.push(words[i]);
  };

  return result;
};

console.log(find("??????"));
console.log("ABC")