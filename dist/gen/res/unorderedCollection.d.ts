/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type UnorderedCollectionLambdaResponse = LambdaResponse<425>;
export declare function unorderedCollection(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UnorderedCollectionLambdaResponse;
export declare function isUnorderedCollection(response?: Partial<LambdaResponse<number>>): boolean;
