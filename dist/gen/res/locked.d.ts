/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type LockedLambdaResponse = LambdaResponse<423>;
export declare function locked(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): LockedLambdaResponse;
export declare function isLocked(response?: Partial<LambdaResponse<number>>): boolean;
