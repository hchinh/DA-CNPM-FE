import { Status } from 'interfaces';

export const ORDER_STATUS = [
  {
    value: Status.PENDING,
    text: 'Pending',
    color: 'orange',
    colorText: '#fa8c16',
    backgroundColor: '#fff7e6',
  },
  {
    value: Status.REFUNDED,
    text: 'Refunded',
    color: 'blue',
    colorText: '#1890ff',
    backgroundColor: '#e6f7ff',
  },
  {
    value: Status.COMPLETED,
    text: 'Completed',
    color: 'green',
    colorText: '#52c41a',
    backgroundColor: '#f6ffed',
  },
  {
    value: Status.PAID,
    text: 'Paid',
    color: 'pink',
    colorText: '#F75D81',
    backgroundColor: '#ffefff',
  },
  {
    value: Status.CANCELLED,
    text: 'Cancelled',
    color: 'violet',
    colorText: '#ff0000',
    backgroundColor: '#e0e0ff',
  },
  {
    value: Status.DECLINED,
    text: 'Declined',
    color: 'limeGreen',
    colorText: '#4fcea2',
    backgroundColor: '#dffef2',
  },
];
