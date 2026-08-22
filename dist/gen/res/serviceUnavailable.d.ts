/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type ServiceUnavailableLambdaResponse = LambdaResponse<503>;
export declare function serviceUnavailable(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ServiceUnavailableLambdaResponse;
export declare function isServiceUnavailable(response?: Partial<LambdaResponse<number>>): boolean;
