import { camelCase, upperFirst } from 'lodash-es';

import { codes } from './codes';
import { writeFileSync } from 'node:fs';

const lib = codes
  .map(([codename, codenumber]) => {
    return `export type ${upperFirst(camelCase(codename))}LambdaResponse = {
  ${
    codename === 'noContent' ? '' : 'body: string | null;'
  }headers?: OutgoingHttpHeaders;
  statusCode: ${codenumber};
};

export function ${codename == 'continue' ? 'httpContinue' : camelCase(codename)} (
  ${
    codename === 'noContent' ? '' : 'result?: string | object,'
  }headers: OutgoingHttpHeaders = {}): ${upperFirst(camelCase(codename))}LambdaResponse {
  return {
    statusCode: ${codenumber},
    headers,${
      codename === 'noContent'
        ? ''
        : `body: result
      ? typeof result === 'string'
        ? result
        : JSON.stringify(result)
      : null,`
    }
  };
}

export function is${upperFirst(codename)} (response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === ${codenumber};
}
`;
  })
  .join('\n');

writeFileSync(
  './src/index.ts',
  `import { OutgoingHttpHeaders } from 'node:http';

// continue can't be used as it, it's JS reserved word
${lib}`
);
