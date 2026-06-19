export function infoLogger(message: string, meta?: Record<string, unknown>) {
  console.info("[app]", message, meta ?? "");
}

export function errorLogger(message: string, meta?: Record<string, unknown>) {
  console.error("[app]", message, meta ?? "");
}
