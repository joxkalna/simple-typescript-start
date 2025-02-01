export default function isAcceptablePassword(password: string): boolean {
  return password.toString().length > 6 ? true : false
}
