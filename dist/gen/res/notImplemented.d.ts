/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type NotImplementedLambdaResponse = LambdaResponse<501>;
export declare function notImplemented(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotImplementedLambdaResponse;
export declare function isNotImplemented(response?: Partial<LambdaResponse<number>>): boolean;
