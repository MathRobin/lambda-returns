import { APIGatewayProxyResult } from 'aws-lambda';
import { HttpHeaders } from './HttpHeaders';

export type LambdaResponse<TCode extends number> = Omit<
  APIGatewayProxyResult,
  'statusCode' | 'headers'
> & {
  headers?: HttpHeaders;
  statusCode: TCode;
};
