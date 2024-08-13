type StandardHttpHeaderKey =
  | 'accept'
  | 'accept-charset'
  | 'accept-encoding'
  | 'accept-language'
  | 'authorization'
  | 'cache-control'
  | 'connection'
  | 'content-length'
  | 'content-type'
  | 'cookie'
  | 'date'
  | 'expect'
  | 'forwarded'
  | 'from'
  | 'host'
  | 'if-match'
  | 'if-modified-since'
  | 'if-none-match'
  | 'if-range'
  | 'if-unmodified-since'
  | 'origin'
  | 'pragma'
  | 'proxy-authorization'
  | 'range'
  | 'referer'
  | 'te'
  | 'trailer'
  | 'transfer-encoding'
  | 'upgrade'
  | 'user-agent'
  | 'via'
  | 'warning';

type HttpHeaderKey = StandardHttpHeaderKey | (string & object);

export type HttpHeaders =
  | Record<HttpHeaderKey, string | number | boolean>
  | { [key: string]: string | number | boolean };
