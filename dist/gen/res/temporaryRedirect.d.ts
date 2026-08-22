/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type TemporaryRedirectLambdaResponse = LambdaResponse<307>;
export declare function temporaryRedirect(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): TemporaryRedirectLambdaResponse;
export declare function isTemporaryRedirect(response?: Partial<LambdaResponse<number>>): boolean;
