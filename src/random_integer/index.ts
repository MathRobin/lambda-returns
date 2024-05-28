export const minHttpCode = 100;
export const maxHttpCode = 511;

export default function randomInteger(codeExcluded: number) {
  let result;

  do {
    result =
      Math.floor(Math.random() * (maxHttpCode - minHttpCode + 1)) + minHttpCode;
  } while (result === codeExcluded);

  return result;
}
