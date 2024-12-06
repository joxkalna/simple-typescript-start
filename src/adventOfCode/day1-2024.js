const fs = require('fs');

function twoLists() {
    // Read the input from the file
    const contents = fs
        .readFileSync('day1-input.txt', 'utf-8')
        .split(/\r?\n/) // Split the file content into lines
        .filter((line) => line.trim() !== '') // Remove any empty lines
        .map((line) => line.split(/\s+/)); // Split each line into two parts based on space or tab

    const list1 = [];
    const list2 = [];

    contents.forEach((line) => {
        let [left, right] = line; // Destructure each line into two parts
        list1.push(Number(left)); // Add the left part (first number) to list1
        list2.push(Number(right)); // Add the right part (second number) to list2
    });

    list1.sort((a, b) => a - b)
    list2.sort((a, b) => a - b)

    let totalDifference = 0;
    for (let i = 0; i < list1.length; i++) {
        totalDifference += Math.abs(parseInt(list1[i]) - parseInt(list2[i]));
    }

    console.log(`Total Difference: ${totalDifference}`);
    return totalDifference;
}

// Call the function
twoLists();
