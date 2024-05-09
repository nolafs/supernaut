import styles from './content-column.module.css';
import { LinkPrimary } from '@supernaut/shared-ui';
import cn from 'classnames';
import {ReactNode} from 'react';

/* eslint-disable-next-line */
export interface ContentColumnProps {
  align?: 'left' | 'right';
  type?: 'text' | 'intro' | '1/2' | '3/9';
  hTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title?: string;
  body?: string;
  url?: string;
  label?: string;
  mode?: 'light' | 'dark';
  children?: ReactNode;
}

export function ContentColumn({
  type = '1/2',
  hTag,
  title,
  body,
  align,
  url,
  label,
  mode,
  children
}: ContentColumnProps) {


  if(type === 'intro' || type === 'text' || !children) {
    return (
      <div
        className={cn(
          'container flex flex-row',
          align === 'left' && 'justify-start',
          align === 'right' && 'justify-end',
          mode === 'dark' && 'text-white',
          mode === 'light' && 'text-black bg-white'
        )}
      >
        <div className={'w-full md:w-9/12 lg:w-1/2'}>
          {type === 'intro' && <h1 className={'mb-24'}>{title}</h1>}
          {body && (
            <div
              className={'text-[28px] md:text-3xl lg:text-5xl font-normal'}
              dangerouslySetInnerHTML={{__html: body}}
            />
          )}
          {url && label && (
            <div className={'mt-20'}>
              <LinkPrimary url={url} hasIcon={true} size={'md'}>
                {label}
              </LinkPrimary>
            </div>
          )}
        </div>
      </div>
    );
  }
  else {
    return (
      <div className={cn('flex flex-col md:flex-row w-full gap-10',
        mode === 'dark' && 'text-white',
        mode === 'light' && 'text-black bg-white'
      )}>
        <div className={cn('w-full', (type === '1/2') && 'md:w-6/12', (type === '3/9') && 'md:w-3/12')}>
          <h2>{title}</h2>
        </div>
        <div className={cn('w-full', (type === '1/2') && 'md:w-6/12', (type === '3/9') && 'md:w-9/12')}>
          {children}
        </div>
      </div>
    )
  }
}

export default ContentColumn;
