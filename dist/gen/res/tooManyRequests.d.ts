/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type TooManyRequestsLambdaResponse = LambdaResponse<429>;
export declare function tooManyRequests(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): TooManyRequestsLambdaResponse;
export declare function isTooManyRequests(response?: Partial<LambdaResponse<number>>): boolean;
