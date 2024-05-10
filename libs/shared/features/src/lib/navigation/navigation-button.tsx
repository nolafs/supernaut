/* eslint-disable-next-line */
'use client';
import cn from 'classnames';
import Link from 'next/link';
import { TNavigationItem } from '@supernaut/types';
import { useNavigation } from '@supernaut/hooks';
import { useEffect, useState } from 'react';

export interface NavigationButtonProps {
  item: TNavigationItem;
  className?: string;
}

export function NavigationButton({ item, className }: NavigationButtonProps) {
  const route = useNavigation({});
  const [currentRoute, setCurrentRoute] = useState({ pathname: '' });

  useEffect(() => {
    if (route?.route.pathname !== currentRoute.pathname) {
      setCurrentRoute({
        pathname: route.route.pathname,
      });
    }
  }, []);

  return (
    <Link
      href={{
        pathname: item?.slug,
      }}
      className={cn(
        'cursor-pointer',
        `/${item.slug}` === currentRoute.pathname
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
