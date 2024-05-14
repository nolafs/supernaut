/* eslint-disable-next-line */
'use client';
import cn from 'classnames';
import Link from 'next/link';
import { TNavigationItem } from '@supernaut/types';
import {usePathname} from 'next/navigation';

export interface NavigationButtonProps {
  item: TNavigationItem;
  className?: string;
}

export function NavigationButton({ item, className }: NavigationButtonProps) {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <Link
      href={{
        pathname: item?.slug,
      }}
      className={cn(
        'cursor-pointer font-medium',
        isActive(`/${item.slug}`)
          ? 'text-secondary'
          : 'text-white',
        'hover:text-secondary',
        className
      )}
    >
      {item.pageName}
    </Link>
  );
}

export default NavigationButton;
