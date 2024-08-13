/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type OkLambdaResponse = LambdaResponse<200>;

export function ok(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): OkLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 200,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : ''
  };
}

export function isOk(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 200;
}
