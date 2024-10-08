/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type UpgradeRequiredLambdaResponse = LambdaResponse<426>;

export function upgradeRequired(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): UpgradeRequiredLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 426,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isUpgradeRequired(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 426;
}
