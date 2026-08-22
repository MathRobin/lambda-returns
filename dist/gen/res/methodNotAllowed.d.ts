/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type MethodNotAllowedLambdaResponse = LambdaResponse<405>;
export declare function methodNotAllowed(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): MethodNotAllowedLambdaResponse;
export declare function isMethodNotAllowed(response?: Partial<LambdaResponse<number>>): boolean;
