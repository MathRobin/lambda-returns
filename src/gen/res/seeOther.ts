/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type SeeOtherLambdaResponse = LambdaResponse<303>;

export function seeOther(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): SeeOtherLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 303,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isSeeOther(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 303;
}
