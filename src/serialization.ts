export let autoSerialize = true;

export function setAutoSerialize(flag: boolean) {
  autoSerialize = flag;
}

export function serializeBody(body?: object): string | object | null {
  return autoSerialize ? JSON.stringify(body ?? {}) : body ?? null;
}
