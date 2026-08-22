/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type UseProxyLambdaResponse = LambdaResponse<305>;
export declare function useProxy(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UseProxyLambdaResponse;
export declare function isUseProxy(response?: Partial<LambdaResponse<number>>): boolean;
