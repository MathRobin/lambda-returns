/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';

export type NoContentLambdaResponse = LambdaResponse<204>;

export function noContent(
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): NoContentLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 204,
    headers,
    body: '',
  };
}

export function isNoContent(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 204;
}
