/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type NotAcceptableLambdaResponse = LambdaResponse<406>;
export declare function notAcceptable(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotAcceptableLambdaResponse;
export declare function isNotAcceptable(response?: Partial<LambdaResponse<number>>): boolean;
