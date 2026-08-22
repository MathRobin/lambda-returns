/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type PartialContentLambdaResponse = LambdaResponse<206>;
export declare function partialContent(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): PartialContentLambdaResponse;
export declare function isPartialContent(response?: Partial<LambdaResponse<number>>): boolean;
