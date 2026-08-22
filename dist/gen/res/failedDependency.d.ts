/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type FailedDependencyLambdaResponse = LambdaResponse<424>;
export declare function failedDependency(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): FailedDependencyLambdaResponse;
export declare function isFailedDependency(response?: Partial<LambdaResponse<number>>): boolean;
