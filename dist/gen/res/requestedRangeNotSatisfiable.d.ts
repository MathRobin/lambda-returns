/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type RequestedRangeNotSatisfiableLambdaResponse = LambdaResponse<416>;
export declare function requestedRangeNotSatisfiable(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): RequestedRangeNotSatisfiableLambdaResponse;
export declare function isRequestedRangeNotSatisfiable(response?: Partial<LambdaResponse<number>>): boolean;
