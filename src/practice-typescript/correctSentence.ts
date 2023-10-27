function correctSentence(text: string): string {
  // first we want to add a text to being a upperCase
  text = text.charAt(0).toUpperCase() + text.slice(1);
  if (text.charAt(text.length - 1) != '.') {
    text += '.';
  }
  return text;
}
console.log('Example:');
console.log(correctSentence('greetings, friends'));
console.log(correctSentence('greetings, friends.'));
