/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type UnorderedCollectionLambdaResponse = LambdaResponse<425>;

export function unorderedCollection(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): UnorderedCollectionLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 425,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isUnorderedCollection(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 425;
}
