/**
 * Promise Basics
 *
 * Promises are objects representing the eventual completion or failure of an asynchronous operation.
 * They allow you to write asynchronous code in a more manageable way compared to callbacks.
 */

// Creating a simple promise
const simplePromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random()

    if (randomNumber > 0.5) {
      resolve(`Success! Random number: ${randomNumber}`)
    } else {
      reject(`Failed! Random number too small: ${randomNumber}`)
    }
  }, 1000)
})

// Using the promise with then/catch
console.log('Promise started...')

simplePromise
  .then(result => {
    console.log('Promise resolved:', result)
  })
  .catch(error => {
    console.log('Promise rejected:', error)
  })
  .finally(() => {
    console.log('Promise completed (either resolved or rejected)')
  })

// Exercise 1: Create a promise that resolves after a specific delay
function delay(ms) {
  // TODO: Return a promise that resolves after ms milliseconds
  // Hint: Use setTimeout inside a new Promise
}

// Exercise 2: Create a function that fetches user data
function fetchUserData(userId) {
  // TODO: Return a promise that simulates fetching user data
  // If userId is valid (any number > 0), resolve with a user object
  // Otherwise reject with an error message
}

// Exercise 3: Chain multiple promises together
// TODO: Use the fetchUserData function to fetch a user, then fetch their posts
// Hint: Return a new promise in the first then() callback
