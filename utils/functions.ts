export const addDaysDate = (countDay: number, date = new Date()) => new Date(date.setDate(date.getDate() + +countDay));
