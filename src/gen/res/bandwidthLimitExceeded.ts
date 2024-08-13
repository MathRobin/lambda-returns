/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type BandwidthLimitExceededLambdaResponse = LambdaResponse<509>;

export function bandwidthLimitExceeded(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): BandwidthLimitExceededLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 509,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isBandwidthLimitExceeded(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 509;
}
