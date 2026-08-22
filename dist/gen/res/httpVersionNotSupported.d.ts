/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type HttpVersionNotSupportedLambdaResponse = LambdaResponse<505>;
export declare function httpVersionNotSupported(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): HttpVersionNotSupportedLambdaResponse;
export declare function isHttpVersionNotSupported(response?: Partial<LambdaResponse<number>>): boolean;
