/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type UnauthorizedLambdaResponse = LambdaResponse<401>;
export declare function unauthorized(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UnauthorizedLambdaResponse;
export declare function isUnauthorized(response?: Partial<LambdaResponse<number>>): boolean;
