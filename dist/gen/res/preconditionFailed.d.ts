/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type PreconditionFailedLambdaResponse = LambdaResponse<412>;
export declare function preconditionFailed(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): PreconditionFailedLambdaResponse;
export declare function isPreconditionFailed(response?: Partial<LambdaResponse<number>>): boolean;
