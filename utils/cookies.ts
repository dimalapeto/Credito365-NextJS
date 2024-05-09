import Cookie from 'cookie-universal';

const cookies = Cookie();

export const getCookie = (name: string) => cookies.get(name);

export const setCookie = (key: string, value: string, countDay: Date) => {
  cookies.set(key, value, {
    path: '/',
    expires: countDay,
  });
};

export const removeCookie = (name: string) => {
  cookies.remove(name);
};
