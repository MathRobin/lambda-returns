/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type MultipleChoicesLambdaResponse = LambdaResponse<300>;
export declare function multipleChoices(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): MultipleChoicesLambdaResponse;
export declare function isMultipleChoices(response?: Partial<LambdaResponse<number>>): boolean;
