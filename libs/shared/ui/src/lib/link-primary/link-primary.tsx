import {ReactNode} from 'react';
import Link from 'next/link';
import Label from '../label/label';

/* eslint-disable-next-line */
export interface LinkPrimaryProps {
  children?: ReactNode;
  url?: string;
  size?: 'sm' | 'md' | 'lg';
  hasIcon?: boolean;
}

export function LinkPrimary({children, url, size ='md', hasIcon = false}: LinkPrimaryProps) {
  return (
    <Link href={{
      pathname: url,
    }} className={'cursor-pointer'}>
      <Label size={size} hasIcon={hasIcon} >{children}</Label>
    </Link>
  );
}

export default LinkPrimary;
