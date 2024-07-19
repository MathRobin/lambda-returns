import { codes } from '@/src/codes';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { upperFirst } from 'lodash-es';
import { dirname } from 'path';
import { keywords } from '@/src/utils/ts/keywords';

for (const [name, code] of codes) {
  const safename = keywords.includes(name) ? `http${upperFirst(name)}` : name;
  const restype = `${upperFirst(safename)}LambdaResponse`;
  const checkname = `is${upperFirst(safename)}`;
  const content = `
/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type ${restype} = LambdaResponse<${code}>;

export function ${safename}(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): ${restype} {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: ${code},
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function ${checkname}(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === ${code};
}
  `;

  const path = `src/gen/res/${safename}.ts`;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content.trim() + '\n');

  const indexpath = `src/gen/res/index.ts`;
  const indexcontent = existsSync(indexpath)
    ? readFileSync(indexpath, 'utf-8')
    : '';
  if (!indexcontent.includes(`export * from './${safename}';`)) {
    writeFileSync(indexpath, `${indexcontent}export * from './${safename}';\n`);
  }
}
