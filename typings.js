import fs from 'fs';

import codes from './codes.js';

const exportsEsm = [];

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

Object.entries(codes)
  .filter(([message]) => {
    // can't be exported as it uses a reserved word
    return message !== 'continue';
  })
  .forEach(([message, code]) => {
    exportsEsm.push(`export function ${message}<T>(result: unknown, headers?: T): {
    statusCode: ${code};
    headers: T | {};
    body: string;
};`);
  });

Object.entries(codes).forEach(([message]) => {
  exportsEsm.push(
    `export function is${capitalizeFirstLetter(
      message
    )} (response: unknown): boolean;`
  );
});

fs.writeFile('./index.d.ts', exportsEsm.join('\n\n'), () => {
  console.log('Module typings generated');
});
