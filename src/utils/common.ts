import moment from 'moment';

export function formatPrice(price: number) {
  return new Intl.NumberFormat('vn-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
}

export const formatDate = (text?: string) => {
  if (!text) return null;
  const dateTime = moment(text);
  let formatTime = 'h:mma';
  if (dateTime.minutes() === 0) formatTime = 'ha';
  return dateTime.isSame(moment(), 'year')
    ? dateTime.format(`MMM D, ${formatTime}`)
    : dateTime.format(`MMM D YYYY, ${formatTime}`);
};
