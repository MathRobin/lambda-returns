/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type UnprocessableEntityLambdaResponse = LambdaResponse<422>;

export function unprocessableEntity(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): UnprocessableEntityLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 422,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isUnprocessableEntity(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 422;
}
