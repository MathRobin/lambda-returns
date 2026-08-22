/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type ImATeapotLambdaResponse = LambdaResponse<418>;
export declare function imATeapot(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ImATeapotLambdaResponse;
export declare function isImATeapot(response?: Partial<LambdaResponse<number>>): boolean;
