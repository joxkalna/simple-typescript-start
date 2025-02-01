export default function areYouPlayingBanjo(name: string): string {
  let char = 'r'
  char = char.toLowerCase()
  if (name.charAt(0).toLowerCase() === char) {
    return name + ' ' + 'plays banjo'
  } else {
    return name + ' ' + 'does not play banjo'
  }
}
