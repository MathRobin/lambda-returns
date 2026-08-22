/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type NoContentLambdaResponse = LambdaResponse<204>;
export declare function noContent(headers?: HttpHeaders, isAlreadyBase64?: boolean): NoContentLambdaResponse;
export declare function isNoContent(response?: Partial<LambdaResponse<number>>): boolean;
