/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type GatewayTimeOutLambdaResponse = LambdaResponse<504>;
export declare function gatewayTimeOut(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): GatewayTimeOutLambdaResponse;
export declare function isGatewayTimeOut(response?: Partial<LambdaResponse<number>>): boolean;
