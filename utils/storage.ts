import { KEY_STORAGE_TOKEN, KEY_STORAGE_WP_TOKEN, KEY_STORAGE_REFRESH_TOKEN } from '@/constants';
import { addDaysDate } from './functions';
import { setCookie } from './cookies';

export const getStorageToken = () => localStorage.getItem(KEY_STORAGE_TOKEN);

export const removeStorageToken = () => {
  const countDay = addDaysDate(-1);
  localStorage.removeItem(KEY_STORAGE_TOKEN);
  setCookie(KEY_STORAGE_WP_TOKEN, '', countDay);
};

export const removeStorageRefreshToken = () => {
  localStorage.removeItem(KEY_STORAGE_REFRESH_TOKEN);
};

export const clearStorageSession = () => {
  removeStorageToken();
  removeStorageRefreshToken();
};
