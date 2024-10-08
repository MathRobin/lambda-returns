/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type PaymentRequiredLambdaResponse = LambdaResponse<402>;

export function paymentRequired(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): PaymentRequiredLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 402,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isPaymentRequired(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 402;
}
