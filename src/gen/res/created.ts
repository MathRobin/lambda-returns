/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type CreatedLambdaResponse = LambdaResponse<201>;

export function created(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): CreatedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 201,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isCreated(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 201;
}
