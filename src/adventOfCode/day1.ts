export default function calibrationDoc() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs')
  const contents = fs
    .readFileSync('input.txt', 'utf-8')
    .toString()
    .split(/\r?\n/) //split into array ['6789ns'];

  let totalSum = 0

  contents.forEach((line: string) => {
    let lineSum = 0

    const matchNumInArray = line.match(/\d/g) // this alows regex to find only numbers in the line
    console.log(matchNumInArray)

    if (matchNumInArray) {
      const [firstNumber] = matchNumInArray //as its being destructed, first number holds the exact first digit. If no digit, its undefined.
      console.log('first number', firstNumber)
      console.log('what index I am', [matchNumInArray.length])

      // if length of numbersArray is greater than 1 or is only one then the first digit is the last digit
      const lastNumber =
        matchNumInArray.length > 1 //checks if there is more than 1 number. if its, then we look up the index of that number and take that as the last digit.
          ? matchNumInArray[matchNumInArray.length - 1] // looking for number arrayindex - 1 so if 6789, this means its 4 numbers but we take the last position in index so 9.
          : firstNumber // otherwise its the first digit.

      console.log('last digit', lastNumber)
      //add two together. Need to parseInt as int to add two numbers together rather than sum
      lineSum = parseInt(firstNumber + lastNumber)
      console.log('I am lineSum', lineSum)
    }
    // we are adding the lineSum of each forEach go to so first time is 69,then 11, and thats 80. keep adding to totalSum
    totalSum += lineSum
  })

  console.log(
    `Total sum of first and last digits across all lines: ${totalSum}`,
  )
  return totalSum
}

calibrationDoc()
