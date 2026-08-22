/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type NotExtendedLambdaResponse = LambdaResponse<510>;
export declare function notExtended(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotExtendedLambdaResponse;
export declare function isNotExtended(response?: Partial<LambdaResponse<number>>): boolean;
