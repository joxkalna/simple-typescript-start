export default function doggyDayCare(
  isVaccinated: boolean,
  isWormed: boolean,
  name: string,
) {
  if (isVaccinated && isWormed) {
    console.log(`${name} can be accepted`);
  } else if (isVaccinated || isWormed) {
    console.log(`${name} can only be accepted by itself`);
  } else {
    console.log(`${name} cannot be accepted`);
  }
}
