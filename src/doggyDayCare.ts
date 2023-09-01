export default function doggyDayCare(
  vaccinated: boolean,
  wormed: boolean,
  name: string,
) {
  if (vaccinated === true && wormed === true) {
    console.log(`${name} can be accepted`);
  } else if (vaccinated === true || wormed === true) {
    console.log(`${name} can only be accepted by itself`);
  } else {
    console.log(`${name} cannot be accepted`);
  }
}
