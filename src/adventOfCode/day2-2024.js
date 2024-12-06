const fs = require('fs');

// The levels are either all increasing or all decreasing.
// Any two adjacent levels differ by at least one and at most three.
function isItSafe() {
    // Read the input from the file
    const contents = fs
        .readFileSync('day2-input.txt', 'utf-8')
        .toString()
        .split(/\r?\n/) // Split into array of lines
        .filter((line) => line.trim() !== '') // Remove empty lines
        .map((line) => line.split(/\s+/).map(Number)); // Split each line into an array of numbers

    let totalSafeCount = 0; // Variable to count the number of safe lines

    // Iterate over each line in contents
    contents.forEach((line, index) => {
        let isSafe = true; // Assume the line is safe, unless proven otherwise
        let isIncreasing = true; // Assume the line is increasing, unless proven otherwise
        let isDecreasing = true; // Assume the line is decreasing, unless proven otherwise

        // Iterate through each pair of adjacent numbers in the line
        for (let i = 0; i < line.length - 1; i++) {  // loops only up to the second-to-last element as otherwie brings back undefined
            const difference = line[i + 1] - line[i]; // Calculate the absolute difference between consecutive numbers

            if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
                // If the difference is outside the valid range, mark the line as unsafe
                isSafe = false;
                break; // Exit the loop early, since we found an unsafe pair
            }
            if (difference < 0) isIncreasing = false
            if (difference > 0) isDecreasing = false
        }

        // If the line is safe (all differences are valid), increment the safe count
        if (isSafe & (isIncreasing || isDecreasing)) {
            totalSafeCount++;
        }
    });

    // Return the total count of safe lines
    return totalSafeCount;
}

// Call the function and log the result
console.log(isItSafe());
