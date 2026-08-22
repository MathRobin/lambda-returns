/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type NetworkAuthenticationRequiredLambdaResponse = LambdaResponse<511>;
export declare function networkAuthenticationRequired(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NetworkAuthenticationRequiredLambdaResponse;
export declare function isNetworkAuthenticationRequired(response?: Partial<LambdaResponse<number>>): boolean;
