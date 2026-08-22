/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type OkLambdaResponse = LambdaResponse<200>;
export declare function ok(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): OkLambdaResponse;
export declare function isOk(response?: Partial<LambdaResponse<number>>): boolean;
