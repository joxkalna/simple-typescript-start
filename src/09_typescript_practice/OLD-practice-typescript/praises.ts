/* eslint-disable prettier/prettier */
const praise: string[][] = []

const messages: string[] = [
  'love it',
  'cool',
  'awesome',
  'magnificent',
  'superb',
  'great',
]

for (let i = 0; i < 5; i++) {
  praise.push([messages[Math.floor(Math.random() * 6)]])
}
console.log(praise)
