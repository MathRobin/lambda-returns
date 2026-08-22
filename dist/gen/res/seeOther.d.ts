/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type SeeOtherLambdaResponse = LambdaResponse<303>;
export declare function seeOther(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): SeeOtherLambdaResponse;
export declare function isSeeOther(response?: Partial<LambdaResponse<number>>): boolean;
