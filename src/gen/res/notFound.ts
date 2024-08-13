/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type NotFoundLambdaResponse = LambdaResponse<404>;

export function notFound(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): NotFoundLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 404,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isNotFound(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 404;
}