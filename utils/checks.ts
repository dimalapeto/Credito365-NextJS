import { getStorageToken } from './storage';

export const isAlreadyAuthorized = () => {
  return Boolean(getStorageToken());
};
