import styles from './content-column.module.css';
import {LinkPrimary} from '@supernaut/shared-ui';
import cn from 'classnames';


/* eslint-disable-next-line */
export interface ContentColumnProps {
  align?: 'left' | 'right';
  title: string;
  body: string;
  url?: string;
  label?: string;
  mode?: 'light' | 'dark';
}

export function ContentColumn({title, body, align, url, label, mode}: ContentColumnProps) {
  return (
      <div className={cn(
        "container flex flex-row",
        align === 'left' && 'justify-start',
        align === 'right' && 'justify-end',
        mode === 'dark' && 'text-white',
        mode === 'light' && 'text-black bg-white',
        )
      }>
        <div className={'w-full md:w-9/12 lg:w-1/2'}>
          {(title) && <h1 className={'mb-24'}>{title}</h1>}
          {(body) && <div className={'text-[28px] md:text-3xl lg:text-5xl font-normal'} dangerouslySetInnerHTML={{__html: body}} />}
          {(url && label) && <div className={'mt-20'}><LinkPrimary url={url} hasIcon={true} size={'md'}>{label}</LinkPrimary></div>}
      </div>
      </div>
  );
}

export default ContentColumn;
