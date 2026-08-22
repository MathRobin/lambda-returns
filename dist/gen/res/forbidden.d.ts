/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type ForbiddenLambdaResponse = LambdaResponse<403>;
export declare function forbidden(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ForbiddenLambdaResponse;
export declare function isForbidden(response?: Partial<LambdaResponse<number>>): boolean;
