import { APIGatewayProxyResult } from 'aws-lambda';
import { HttpHeaders } from './HttpHeaders';

export type LambdaResponse<TCode extends number> = Omit<
  APIGatewayProxyResult,
  'body'
> & {
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: HttpHeaders;
  statusCode: TCode;
};
