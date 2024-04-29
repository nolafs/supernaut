import styles from './button-primary.module.scss';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface ButtonPrimaryProps {
  label?: string;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  hasIcon?: boolean;
  onClick?: () => void;
}

export function ButtonPrimary({label, size, isDisabled = true, hasIcon = false, onClick}: ButtonPrimaryProps) {
  return (
    <button className={cn('font-medium flex item-center space-x-2 group hover:text-secondary ease-in duration-300',
      (isDisabled) ? 'text-secondary cursor-not-allowed' : 'text-primary',
      (size === 'sm') && 'text-normal md:text-lg',
      (size === 'md') && 'text-xl md:text-2xl' ,
      (size === 'lg') && 'text-3xl md:text-4xl lg:text-5xl' ,
      styles.container)} disabled={isDisabled}>
      <div className={'flex flex-col'}>
        <span>{label}</span>
        <div className={cn("max-w-xs h-[2px] mt-1 group-hover:bg-secondary group-hover:mt-0 ease-in duration-300", (isDisabled) ? 'bg-secondary' : 'bg-white', (size === 'lg') && 'lg:mt-2')}></div>
      </div>
      {hasIcon && (
        <div className={cn('w-8 h-8 md:w-9 md:h-9', (size === 'lg') && 'lg:w-12 lg:h-12')}>
        <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <g fill={(!isDisabled) ? '#fff' : '#acacac'} className={'group-hover:fill-secondary ease-in-out duration-300'} fillRule="nonzero">
            <path
              d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0zm0 3C9.716 3 3 9.716 3 18c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z"/>
            <path d="m20.587 10 7.053 6.71.831.79-7.884 7.5-1.663-1.581 5.044-4.8H8v-2.237h15.97l-5.046-4.8z"/>
          </g>
        </svg>
        </div>
        )}
    </button>
  );
}

export default ButtonPrimary;
