/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type RequestUriTooLargeLambdaResponse = LambdaResponse<414>;
export declare function requestUriTooLarge(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): RequestUriTooLargeLambdaResponse;
export declare function isRequestUriTooLarge(response?: Partial<LambdaResponse<number>>): boolean;
