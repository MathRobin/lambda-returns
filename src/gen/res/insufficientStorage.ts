/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type InsufficientStorageLambdaResponse = LambdaResponse<507>;

export function insufficientStorage(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): InsufficientStorageLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 507,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isInsufficientStorage(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 507;
}
