
    // const regexPattern = new RegExp(`${start}(.*?)${end}`);
    // const match = <your string here>.match(regexPattern);

    // if (match.length) {
    //     return match[1];
    // }
export default function betweenMarkers(
  text: string,
  start: string,
  end: string,
): any {
  // returns index of star and end
  let pos1 = text.indexOf(start);
  let pos2 = text.indexOf(end);

  // returns all the text in the string
  if (pos1 == -1 && pos2 == -1 ) {  
    return text; 
  }
  //if no markers present
  if (pos1 == 0 && pos2 == 0) {
    return text;
  }
  //if no end marker present return text
  if (pos1 == -1 && pos2 == 0) {
    return text;
  }
  // sets pos1 when marker is not found;
  if (pos1 == -1 ) {
    pos1 = 0;
    // otherwise position 1 becomes where the start of marker is
  } else {
    pos1 += start.length;
  }

  if (pos2 == -1) {
    pos2 = text.length;
  } else if (pos2 < pos1) {
    // this happens if marker is opposit > rather than <
    return '';
  }
  let r = text.substring(pos1, pos2);
  return r;
}

console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'));
console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'));
console.log(betweenMarkers('No hi', '[/b]', '[/b]'));
console.log(betweenMarkers('No <hi>', '>', '<'));
console.log(betweenMarkers('No <hi>', '<', '>'));
console.log(betweenMarkers('No hi', '', ''));