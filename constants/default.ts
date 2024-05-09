import { isDev } from '@/utils/env';

export const WEBSITE_URL = 'https://credito-365.mx';
export const DEFAULT_COUNTRY_PHONE_CODE = '+52';
export const SMS_RESEND_TIMER = isDev ? 10 : 180;
export const CONTACT_CENTER_NUMBER = '5593313776';
export const CONTACT_MAIL = 'soporte@credito-365.mx';
export const FACEBOOK = 'https://www.facebook.com/groups/1369942103926409';
export const INSTAGRAM = 'https://www.instagram.com/';
export const WHATSAPP = 'https://web.whatsapp.com/';
export const COUNT_DAYS_SAVE_COOKIE = 30;
export const MIN_LOAN_REPAY_AMOUNT = '100';
export const MAX_API_CALL_TIME = 5;
export const API_PATH = process.env.REACT_APP_API_ENTRYPOINT ?? '';
export const TERMS_AND_CONDITIONS = 'https://credito-365.mx/wp-content/docs/terms_and_conditions.pdf';
export const DATA_PRIVACY = 'https://credito-365.mx/wp-content/docs/data_privacy.pdf';
export const HV_SCRIPT =
  'https://hv-camera-web-sg.s3-ap-southeast-1.amazonaws.com/hyperverge-web-sdk@7.4.0/src/sdk.min.js';
