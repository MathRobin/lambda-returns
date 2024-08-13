/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type FailedDependencyLambdaResponse = LambdaResponse<424>;

export function failedDependency(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): FailedDependencyLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 424,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isFailedDependency(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 424;
}
