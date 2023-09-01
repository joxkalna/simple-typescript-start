const policy = (name: string, age: number, minor: boolean) => {
  if (minor) {
    console.log(
      `No wine or alchohol purchase allowed for ${name} who is ${age} years old.`,
    );
  }
};
const adult: [string, number, boolean] = ['Dan', 21, false];
policy(...adult);
