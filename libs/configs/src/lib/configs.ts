export enum ENVIRONMENTS {
  DEV = 'development',
  PROD = 'production',
}

// Add & use common environment variable names from here
enum ENV_VAR_NAMES {
  SERVICE_NAME = 'SERVICE_NAME',
}

export const SERVICE_NAME =
  process.env[ENV_VAR_NAMES.SERVICE_NAME] || ENV_VAR_NAMES.SERVICE_NAME;

// Add & use headers from here
export enum HEADERS {
  AUTH = 'Authorization',
  AUTH_SMALL = 'authorization',
  AUTH_ERROR = 'x-middleware-auth-error',
}
