function charCount(str) {
  objToReturn = {};

  unsortedArray = str.split("");
  for (let char of unsortedArray) {
    if (char in objToReturn) {
      objToReturn[char] += 1;
    } else {
      objToReturn[char] = 1;
    }
  }

  return objToReturn;
}

// To sort the obj, turn it into array and do .sort(), then turn it back into obj

module.exports = charCount;