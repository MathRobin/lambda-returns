export default function randomInteger(codeExcluded, min = 100, max = 511) {
  let result;

  do {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (result === codeExcluded);

  return result;
}
