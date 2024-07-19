/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type ProcessingLambdaResponse = LambdaResponse<102>;

export function processing(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): ProcessingLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 102,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isProcessing(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 102;
}
