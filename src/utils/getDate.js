export const dateFormater = (date) => date.slice(0, 10);
export const getDate = (customDate, defaultDate) =>
  customDate ? dateFormater(customDate) : dateFormater(defaultDate);
