import { DEFAULT_COUNTRY_PHONE_CODE, CONTACT_CENTER_NUMBER } from '@/constants';

export const formatPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber) {
    if (phoneNumber.length === 10) {
      const phone = phoneNumber
        .toString()
        .replace(/\D/g, '')
        .match(/^(\d{2})(\d{4})(\d{4})$/);
      return phone ? `${phone[1]} ${phone[2]} ${phone[3]}` : null;
    } else if (phoneNumber.length === 11) {
      const phone = phoneNumber
        .toString()
        .replace(/\D/g, '')
        .match(/^(\d{3})(\d{4})(\d{4})$/);
      return phone ? `${phone[1]} ${phone[2]} ${phone[3]}` : null;
    } else {
      return phoneNumber;
    }
  } else {
    return null;
  }
};

export const getCallCenterLink = () => {
  const formattedPhone = formatPhoneNumber(CONTACT_CENTER_NUMBER);
  const phone = formattedPhone ? `${DEFAULT_COUNTRY_PHONE_CODE} ${formattedPhone}` : null;
  return { shortPhone: CONTACT_CENTER_NUMBER, fullPhone: phone };
};

export const cropUserName = (str: string): string => {
  if (str.length > 12) {
    return str.slice(0, 12) + '...';
  }
  return str;
};
