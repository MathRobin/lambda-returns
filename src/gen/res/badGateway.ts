/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type BadGatewayLambdaResponse = LambdaResponse<502>;

export function badGateway(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): BadGatewayLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 502,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : ''
  };
}

export function isBadGateway(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 502;
}
