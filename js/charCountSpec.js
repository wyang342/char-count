var char = require("./charCount");

console.log(char.charCount("aaabbc") === {
  a : 3,
  b : 2,
  c : 1
});

console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha') === {
  a : 6,
  e : 4,
  l : 3,
  p : 3,
  w : 2,
  d : 2,
  o : 2,
  t : 2,
  y : 2,
  k : 1,
  h : 1,
  i : 1,
  c : 1,
  n : 1,
  r : 1
});
