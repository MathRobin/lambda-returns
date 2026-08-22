/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type NotFoundLambdaResponse = LambdaResponse<404>;
export declare function notFound(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotFoundLambdaResponse;
export declare function isNotFound(response?: Partial<LambdaResponse<number>>): boolean;
