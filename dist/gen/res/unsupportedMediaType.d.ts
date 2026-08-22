/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type UnsupportedMediaTypeLambdaResponse = LambdaResponse<415>;
export declare function unsupportedMediaType(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UnsupportedMediaTypeLambdaResponse;
export declare function isUnsupportedMediaType(response?: Partial<LambdaResponse<number>>): boolean;
