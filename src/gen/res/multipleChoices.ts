/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type MultipleChoicesLambdaResponse = LambdaResponse<300>;

export function multipleChoices(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): MultipleChoicesLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 300,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isMultipleChoices(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 300;
}
