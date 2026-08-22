/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type BadGatewayLambdaResponse = LambdaResponse<502>;
export declare function badGateway(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): BadGatewayLambdaResponse;
export declare function isBadGateway(response?: Partial<LambdaResponse<number>>): boolean;
