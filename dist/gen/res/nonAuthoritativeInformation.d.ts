/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type NonAuthoritativeInformationLambdaResponse = LambdaResponse<203>;
export declare function nonAuthoritativeInformation(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NonAuthoritativeInformationLambdaResponse;
export declare function isNonAuthoritativeInformation(response?: Partial<LambdaResponse<number>>): boolean;
