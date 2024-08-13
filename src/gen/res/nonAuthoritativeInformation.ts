/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type NonAuthoritativeInformationLambdaResponse = LambdaResponse<203>;

export function nonAuthoritativeInformation(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): NonAuthoritativeInformationLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 203,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : ''
  };
}

export function isNonAuthoritativeInformation(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 203;
}
