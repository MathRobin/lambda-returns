/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type PreconditionFailedLambdaResponse = LambdaResponse<412>;

export function preconditionFailed(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): PreconditionFailedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 412,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isPreconditionFailed(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 412;
}