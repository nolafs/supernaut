import styles from './label.module.scss';
import cn from 'classnames';
import {ReactNode} from 'react';

/* eslint-disable-next-line */
export interface LabelProps {
  children?: ReactNode;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  hasIcon?: boolean;
}

export function Label({children, size, hasIcon, isDisabled}: LabelProps) {

  return (
    <div className={cn('flex item-center space-x-2 group',
      (isDisabled) ? 'text-secondary cursor-not-allowed' : 'text-primary',
      (size === 'sm') && 'text-normal md:text-lg',
      (size === 'md') && 'text-xl md:text-2xl',
      (size === 'lg') && 'text-3xl md:text-4xl lg:text-5xl',
      styles['container'])}>
      <div className={'flex flex-col'}>
        <span>{children}</span>
        <div
          className={cn("max-w-full h-[2px] md:mt-1", (isDisabled) ? 'bg-secondary' : styles.decorLine, (size === 'lg') && 'lg:mt-1 h-3', (size === 'lg') && styles.large )}></div>
      </div>
      {hasIcon && (
        <div
          className={cn('w-8 h-8 md:w-9 md:h-9', (size === 'lg') && 'lg:w-12 lg:h-12')}>
          <svg  width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <g fill={(!isDisabled) ? '#fff' : '#acacac'} fillRule="nonzero">
              <path
                d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0zm0 3C9.716 3 3 9.716 3 18c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z"/>
              <g className={styles['icon']}>
              <path  d="m20.587 10 7.053 6.71.831.79-7.884 7.5-1.663-1.581 5.044-4.8H8v-2.237h15.97l-5.046-4.8z"/>
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}

export default Label;
