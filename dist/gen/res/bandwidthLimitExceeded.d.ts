/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type BandwidthLimitExceededLambdaResponse = LambdaResponse<509>;
export declare function bandwidthLimitExceeded(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): BandwidthLimitExceededLambdaResponse;
export declare function isBandwidthLimitExceeded(response?: Partial<LambdaResponse<number>>): boolean;
