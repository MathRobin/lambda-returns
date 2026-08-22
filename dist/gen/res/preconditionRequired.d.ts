/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type PreconditionRequiredLambdaResponse = LambdaResponse<428>;
export declare function preconditionRequired(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): PreconditionRequiredLambdaResponse;
export declare function isPreconditionRequired(response?: Partial<LambdaResponse<number>>): boolean;
