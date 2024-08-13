export let autoSerialize = true;

export function setAutoSerialize(flag: boolean) {
  autoSerialize = flag;
}

export function serializeBody(body: object): string {
  return autoSerialize
    ? JSON.stringify(body ?? {})
    : (body as unknown as string);
}
