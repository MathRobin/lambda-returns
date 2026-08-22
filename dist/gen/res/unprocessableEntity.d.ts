/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type UnprocessableEntityLambdaResponse = LambdaResponse<422>;
export declare function unprocessableEntity(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UnprocessableEntityLambdaResponse;
export declare function isUnprocessableEntity(response?: Partial<LambdaResponse<number>>): boolean;
