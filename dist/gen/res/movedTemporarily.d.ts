/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type MovedTemporarilyLambdaResponse = LambdaResponse<302>;
export declare function movedTemporarily(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): MovedTemporarilyLambdaResponse;
export declare function isMovedTemporarily(response?: Partial<LambdaResponse<number>>): boolean;
