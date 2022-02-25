/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
interface ImportMeta {
  env: {
    VITE_DATABASE_URL?: string
    VITE_WEB_URL?: string
    VITE_BRAINTREE_GATEWAY?: string
    VITE_BRAINTREE_DESCRIPTOR?: string
    VITE_RECAPTCHA_SECRET_KEY?: string
    VITE_EMAIL_FROM?: string
    VITE_EMAIL_ADMINS?: string
    VITE_SEND_IN_BLUE_KEY?: string
    VITE_SEND_IN_BLUE_URL?: string
    VITE_RECAPTCHA_SITE_KEY?: string
    BASE_URL?: string
  }
}