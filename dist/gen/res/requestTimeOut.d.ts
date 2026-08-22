/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type RequestTimeOutLambdaResponse = LambdaResponse<408>;
export declare function requestTimeOut(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): RequestTimeOutLambdaResponse;
export declare function isRequestTimeOut(response?: Partial<LambdaResponse<number>>): boolean;
