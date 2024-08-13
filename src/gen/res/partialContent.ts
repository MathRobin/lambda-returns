/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type PartialContentLambdaResponse = LambdaResponse<206>;

export function partialContent(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): PartialContentLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 206,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isPartialContent(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 206;
}
