/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type ResetContentLambdaResponse = LambdaResponse<205>;
export declare function resetContent(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ResetContentLambdaResponse;
export declare function isResetContent(response?: Partial<LambdaResponse<number>>): boolean;
