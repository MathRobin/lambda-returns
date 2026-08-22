/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type GoneLambdaResponse = LambdaResponse<410>;
export declare function gone(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): GoneLambdaResponse;
export declare function isGone(response?: Partial<LambdaResponse<number>>): boolean;
