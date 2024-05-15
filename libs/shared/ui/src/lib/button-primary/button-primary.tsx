import styles from './button-primary.module.scss';
import cn from 'classnames';
import Label from '../label/label';
import {ButtonHTMLAttributes, forwardRef} from 'react';

/* eslint-disable-next-line */
export interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | undefined | null;
  size?: 'sm' | 'md' | 'lg';
  hasIcon?: boolean;
  classNames?: string;
  props?: any;
}

export const ButtonPrimary = forwardRef(function({
                                    label,
                                    size,
                                    hasIcon = false,
                                    classNames,
                                    ...props
                                  }: ButtonPrimaryProps, ref: any)  {
  return (
    <button
      ref={ref}
      {...props}
      className={cn('font-medium cursor-pointer', styles.container, classNames)}
    >
      <Label size={size} hasIcon={hasIcon} >
        {label}
      </Label>
    </button>
  );

})


export default ButtonPrimary;
