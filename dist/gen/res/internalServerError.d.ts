/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type InternalServerErrorLambdaResponse = LambdaResponse<500>;
export declare function internalServerError(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): InternalServerErrorLambdaResponse;
export declare function isInternalServerError(response?: Partial<LambdaResponse<number>>): boolean;
