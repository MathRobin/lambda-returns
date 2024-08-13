/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type InternalServerErrorLambdaResponse = LambdaResponse<500>;

export function internalServerError(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): InternalServerErrorLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 500,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : ''
  };
}

export function isInternalServerError(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 500;
}
