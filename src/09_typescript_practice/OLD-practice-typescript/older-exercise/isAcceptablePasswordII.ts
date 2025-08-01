// the length should be bigger than 6;
// should contain at least one digit.

export default function isAcceptablePassword(password: string): boolean {
  return password.toString().length > 6 && password.match(/\d/) ? true : false
}
