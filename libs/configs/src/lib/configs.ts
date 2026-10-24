export enum ENVIRONMENTS {
  DEV = 'development',
  PROD = 'production',
}

enum ENV_VAR_NAMES {
  SERVICE_NAME = 'SERVICE_NAME',
}

export const SERVICE_NAME =
  process.env[ENV_VAR_NAMES.SERVICE_NAME] || ENV_VAR_NAMES.SERVICE_NAME;
