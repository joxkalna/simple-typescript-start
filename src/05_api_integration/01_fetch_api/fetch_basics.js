/**
 * Fetch API Basics
 *
 * The Fetch API provides a modern interface for making HTTP requests.
 * It returns Promises, making it easy to handle asynchronous operations.
 */

// Basic GET request
function fetchUsers() {
  console.log('Fetching users...')

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      // Parse the JSON response
      return response.json()
    })
    .then(data => {
      console.log('Users fetched successfully:', data)
    })
    .catch(error => {
      console.error('Error fetching users:', error)
    })
}

// Using async/await with fetch
async function fetchUserById(id) {
  try {
    console.log(`Fetching user with ID ${id}...`)

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const user = await response.json()
    console.log('User fetched successfully:', user)
    return user
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}

// POST request example
function createPost(title, body, userId) {
  console.log('Creating a new post...')

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      console.log('Post created successfully:', data)
    })
    .catch(error => {
      console.error('Error creating post:', error)
    })
}

// Exercise 1: Fetch and display todos
// TODO: Write a function that fetches todos from https://jsonplaceholder.typicode.com/todos
// and filters to show only completed todos

// Exercise 2: Create a function to update a post
// TODO: Write a function that updates an existing post using the PUT method

// Exercise 3: Implement error handling and loading states
// TODO: Enhance the fetchUsers function to track and display loading state
// Hint: Set a loading variable to true before fetch and false after it completes
