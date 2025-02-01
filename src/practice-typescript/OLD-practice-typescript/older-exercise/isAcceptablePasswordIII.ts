function isAcceptablePassword(password: string): boolean {
  // your code here
  return password.toString().length > 6 &&
    password.match(/\d/) &&
    // we are negating the result of regular expression. It reverses the result.
    // checks if its not only digits.
    // by adding ! it will say it has only numbers, it will be truthy but because we are
    // negating it, it will become false
    !password.match(/^\d+$/)
    ? true
    : false
}

console.log(isAcceptablePassword('muchlonger5'))
