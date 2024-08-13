/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type SwitchingProtocolsLambdaResponse = LambdaResponse<101>;

export function switchingProtocols(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): SwitchingProtocolsLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 101,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isSwitchingProtocols(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 101;
}
