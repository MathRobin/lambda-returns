/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type ExpectationFailedLambdaResponse = LambdaResponse<417>;
export declare function expectationFailed(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ExpectationFailedLambdaResponse;
export declare function isExpectationFailed(response?: Partial<LambdaResponse<number>>): boolean;
