// mission: https://js.checkio.org/en/mission/count-digits/

export default function countDigits(text: string): number {
  return text.replace(/\D/g, '').length
}
