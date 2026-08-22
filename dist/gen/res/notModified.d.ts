/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type NotModifiedLambdaResponse = LambdaResponse<304>;
export declare function notModified(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotModifiedLambdaResponse;
export declare function isNotModified(response?: Partial<LambdaResponse<number>>): boolean;
