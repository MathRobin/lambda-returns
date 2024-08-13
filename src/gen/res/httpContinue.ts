/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type HttpContinueLambdaResponse = LambdaResponse<100>;

export function httpContinue(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): HttpContinueLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 100,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isHttpContinue(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 100;
}
