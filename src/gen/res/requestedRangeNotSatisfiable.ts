/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type RequestedRangeNotSatisfiableLambdaResponse = LambdaResponse<416>;

export function requestedRangeNotSatisfiable(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): RequestedRangeNotSatisfiableLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 416,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isRequestedRangeNotSatisfiable(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 416;
}
