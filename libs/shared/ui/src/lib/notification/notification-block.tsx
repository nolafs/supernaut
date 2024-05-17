/* eslint-disable-next-line */
export interface NotificationBlockProps {
  body: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export function NotificationBlock({body, type}: NotificationBlockProps) {
  return (
    <div className={'flex w-full justify-center items-center'}>
      <div className={
        `p-5 text-white text-center ${
          type === 'info' && 'bg-blue-500'
          || type === 'warning' && 'bg-yellow-500'
          || type === 'error' && 'bg-red-500'
          || type === 'success' && 'bg-green-500'
        }`
      }>{body}</div>
    </div>
  );
}

export default NotificationBlock;
