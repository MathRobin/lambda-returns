/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type MultiStatusLambdaResponse = LambdaResponse<207>;
export declare function multiStatus(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): MultiStatusLambdaResponse;
export declare function isMultiStatus(response?: Partial<LambdaResponse<number>>): boolean;
