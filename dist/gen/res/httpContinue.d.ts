/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type HttpContinueLambdaResponse = LambdaResponse<100>;
export declare function httpContinue(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): HttpContinueLambdaResponse;
export declare function isHttpContinue(response?: Partial<LambdaResponse<number>>): boolean;
