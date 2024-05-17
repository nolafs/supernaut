/* eslint-disable-next-line */
import {ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, CheckCircleIcon} from '@heroicons/react/16/solid';


export interface NotificationBlockProps {
  body: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export function NotificationBlock({body, type}: NotificationBlockProps) {
  return (
    <div className={'flex w-full justify-center items-center'}>
      <div className={
        `p-5 text-white text-center flex flex-row space-x-2.5 ${
          type === 'info' && 'bg-blue-500'
          || type === 'warning' && 'bg-yellow-500'
          || type === 'error' && 'bg-red-500'
          || type === 'success' && 'bg-green-500'
        }`
      }>
        <span>
          {type === 'info' && <InformationCircleIcon className={'w-6 h-6'}/>}
          {type === 'warning' && <ExclamationCircleIcon className={'w-6 h-6'}/>}
          {type === 'error' && <ExclamationTriangleIcon className={'w-6 h-6'}/>}
          {type === 'success' && <CheckCircleIcon className={'w-6 h-6'}/>}
        </span>
        <span>{body}</span>
      </div>
    </div>
  );
}

export default NotificationBlock;
