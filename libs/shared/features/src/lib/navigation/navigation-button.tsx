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

  return (<>
    {(item?.slug) && <Link
      href={{
        pathname: `/${item?.slug}`,
      }}
      className={cn(
        'cursor-pointer font-normal',
        isActive(`/${item.slug}`)
          ? 'text-secondary'
          : 'text-primary',
        'hover:text-secondary',
        className
      )}
    >
      {item.pageName}
    </Link>
    }
    {(item?.url) && <a className={cn(className ? className : 'cursor-pointer text-primary hover:text-secondary font-normal')} href={item.url}>{item.pageName}</a>}
    </>
  );
}

export default NavigationButton;
