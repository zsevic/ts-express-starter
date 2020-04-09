export function isEnv(environment: string): boolean {
  return process.env.NODE_ENV === environment;
}
