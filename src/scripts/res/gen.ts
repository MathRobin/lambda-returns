import { codes } from '@/src/codes';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { upperFirst } from 'lodash-es';
import { dirname, join } from 'path';
import { keywords } from '@/src/utils/ts/keywords';
import * as prettier from 'prettier';

const prettierconfig = prettier.resolveConfig(
  join(process.cwd(), '.prettierc.json')
);

for (const [name, code] of codes) {
  const safename = keywords.includes(name) ? `http${upperFirst(name)}` : name;
  const restype = `${upperFirst(safename)}LambdaResponse`;
  const checkname = `is${upperFirst(safename)}`;

  const hasBody = name !== 'noContent';

  const imports = [
    "import { LambdaResponse } from '@/src/LambdaResponse';",
    "import { HttpHeaders } from '@/src/HttpHeaders';",
    hasBody && "import { serializeBody } from '@/src/serialization';",
  ].filter(Boolean);
  const args = [
    hasBody && 'result?: string | object',
    'headers: HttpHeaders = {}',
    'isAlreadyBase64: boolean = false',
  ].filter(Boolean);

  const res = [
    'isBase64Encoded: isAlreadyBase64',
    `statusCode: ${code}`,
    'headers',
    hasBody
      ? `body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : ''`
      : 'body: ""',
  ];

  const content = `
/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

${imports.join('\n')}

export type ${restype} = LambdaResponse<${code}>;

export function ${safename}(
  ${args.join(',\n  ')}
): ${restype} {
  return {
    ${res.join(',\n    ')}
  };
}

export function ${checkname}(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === ${code};
}
  `;

  const path = `src/gen/res/${safename}.ts`;
  const formatted = await prettier.format(content, {
    filepath: path,
    ...(await prettierconfig),
  });
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, formatted);

  const indexpath = `src/gen/res/index.ts`;
  const indexcontent = existsSync(indexpath)
    ? readFileSync(indexpath, 'utf-8')
    : '';
  if (!indexcontent.includes(`export * from './${safename}';`)) {
    writeFileSync(indexpath, `${indexcontent}export * from './${safename}';\n`);
  }

  console.log('✔️', 'generated', safename, 'at', path);
}
