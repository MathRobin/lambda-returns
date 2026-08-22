/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type AcceptedLambdaResponse = LambdaResponse<202>;
export declare function accepted(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): AcceptedLambdaResponse;
export declare function isAccepted(response?: Partial<LambdaResponse<number>>): boolean;
