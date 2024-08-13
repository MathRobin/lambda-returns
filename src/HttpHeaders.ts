import { OutgoingHttpHeaders } from 'http';

export type HttpHeaders = OutgoingHttpHeaders & {
  [header: string]: string | number | boolean;
};
