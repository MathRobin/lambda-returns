/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type CreatedLambdaResponse = LambdaResponse<201>;
export declare function created(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): CreatedLambdaResponse;
export declare function isCreated(response?: Partial<LambdaResponse<number>>): boolean;
