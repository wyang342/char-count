const charCount = require('./charCount');

test('case 1', () => {
  expect(charCount("aaabbc")['a']).toBe(3)
})

test('case 2', () => {
  expect(charCount("aaabbc")['b']).toBe(2)
})

test('case 3', () => {
  expect(charCount("aaabbc")['c']).toBe(1)
})

test('case 4', () => {
  expect(charCount('rplyoacadawpettlleaodeeywapkniha')['a']).toBe(6)
})

test('case 5', () => {
  expect(charCount('rplyoacadawpettlleaodeeywapkniha')['e']).toBe(4)
})

test('case 6', () => {
  expect(charCount('rplyoacadawpettlleaodeeywapkniha')['l']).toBe(3)
})

test('case 7', () => {
  expect(charCount('rplyoacadawpettlleaodeeywapkniha')['p']).toBe(3)
})

test('case 8', () => {
  expect(charCount('rplyoacadawpettlleaodeeywapkniha')['i']).toBe(1)
})

test('case 9', () => {
  expect(charCount('rplyoacadawpettlleaodeeywapkniha')['n']).toBe(1)
})