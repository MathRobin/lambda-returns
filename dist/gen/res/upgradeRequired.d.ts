/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type UpgradeRequiredLambdaResponse = LambdaResponse<426>;
export declare function upgradeRequired(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UpgradeRequiredLambdaResponse;
export declare function isUpgradeRequired(response?: Partial<LambdaResponse<number>>): boolean;
