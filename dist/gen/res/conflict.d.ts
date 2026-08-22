/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type ConflictLambdaResponse = LambdaResponse<409>;
export declare function conflict(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ConflictLambdaResponse;
export declare function isConflict(response?: Partial<LambdaResponse<number>>): boolean;
