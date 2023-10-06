import fs from 'fs';

import capitalizeFirstLetter from './src/capitalize_first/index.js';
import codes from './codes.js';

const exportsEsm = [];

Object.entries(codes)
  .filter(([message]) => {
    // can't be exported as it uses a reserved word
    return message !== 'continue';
  })
  .forEach(([message, code]) => {
    exportsEsm.push(`export const ${message} = (result, headers = {}) => ({
    statusCode: ${code},
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});`);
  });

Object.entries(codes).forEach(([message, code]) => {
  exportsEsm.push(`export const is${capitalizeFirstLetter(
    message
  )} = (response) => {
    return response.statusCode === ${code};
};`);
});

fs.writeFile('./index.js', exportsEsm.join('\n\n'), () => {
  console.log('Module generated');
});
