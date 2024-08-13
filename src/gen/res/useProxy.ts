/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type UseProxyLambdaResponse = LambdaResponse<305>;

export function useProxy(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): UseProxyLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 305,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isUseProxy(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 305;
}
