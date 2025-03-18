export interface SaasAdminProAppConfigRaw {
  VITE_GLOB_API_URL: string;
}

export interface ApplicationConfig {
  apiURL: string;
}

declare global {
  interface Window {
    _SAAS_ADMIN_PRO_APP_CONF_: SaasAdminProAppConfigRaw;
  }
}
