export default function calibrationDoc() {
  const fs = require('fs');
  const contents = fs
    .readFileSync('input.txt', 'utf-8')
    .toString()
    .split(/\r?\n/); //split into array ['two1nine'];

  console.log(contents);
  var clean = ['one1two'],
    tags: any[] = [];
  clean = clean.filter(function (v) {
    return !/[0-9]/g.test(v);
  });

  tags = tags.concat(clean);

  console.log(tags);
  //   contents.forEach((line: string) => {
  //     let findStrings = line.match(/[A-Za-z]/);
  //     if (findStrings) {
  //       console.log(findStrings);
  //     }
  //   });
}

calibrationDoc();
