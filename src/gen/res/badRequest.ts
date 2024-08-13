/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type BadRequestLambdaResponse = LambdaResponse<400>;

export function badRequest(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): BadRequestLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 400,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isBadRequest(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 400;
}
