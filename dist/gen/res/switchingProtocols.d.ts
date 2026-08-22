/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */
import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
export type SwitchingProtocolsLambdaResponse = LambdaResponse<101>;
export declare function switchingProtocols(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): SwitchingProtocolsLambdaResponse;
export declare function isSwitchingProtocols(response?: Partial<LambdaResponse<number>>): boolean;
