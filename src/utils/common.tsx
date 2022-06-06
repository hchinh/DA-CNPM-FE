import { ORDER_STATUS } from 'configs/localData';
import moment from 'moment';
import { Tag } from 'antd';
import { Status } from 'interfaces';

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

export const formatOrderStatus = (data: string) => {
  if (!data) return null;
  const restItem = ORDER_STATUS.find((item) => String(Status[item.value]) === data);
  return <Tag color={restItem?.colorText}>{restItem?.text ? restItem.text : data}</Tag>;
};
