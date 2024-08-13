/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type GatewayTimeOutLambdaResponse = LambdaResponse<504>;

export function gatewayTimeOut(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): GatewayTimeOutLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 504,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : ''
  };
}

export function isGatewayTimeOut(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 504;
}
