import type { RouteMeta as IRouteMeta } from '@saas-core/typings';

import 'vue-router';

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RouteMeta extends IRouteMeta {}
}

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
