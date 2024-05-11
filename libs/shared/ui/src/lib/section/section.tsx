/* eslint-disable-next-line */
import {classNames} from '@headlessui/react/dist/utils/class-names';
import cn from 'classnames';
import { ReactNode } from 'react';

export interface SectionProps {
  internalName?: string;
  children: ReactNode;
  marginSize?: 'sm' | 'md' | 'lg';
  paddingSize?: 'sm' | 'md' | 'lg';
  marginTop?: boolean;
  marginBottom?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  mode?: 'light' | 'dark';
  backgroundColor?: string | null;
  color?: string | null;
  align?: 'center' | 'left' | 'right';
  width?: 'sm' | 'lg' | 'xl' | 'full';
  height?: 'auto' | 'half' | 'full';
  lineTop?: boolean;
  lineBottom?: boolean;
  className?: string;
}

export function Section({
  internalName,
  children,
  color,
  mode,
  backgroundColor,
  lineBottom,
  lineTop,
  paddingTop = false,
  marginBottom,
  marginTop,
  paddingBottom = false,
  marginSize = 'lg',
  paddingSize = 'lg',
  height = 'auto',
  width = 'full',
  align = 'left',
  className,
}: SectionProps) {
  return (
    <section
      id={internalName}
      className={cn(
        'relative overflow-hidden',
        'flex',
        'flex-col',
        'justify-center',
        mode === 'dark' && 'text-white',
        mode === 'light' && 'text-black bg-white',
        {
          'pt-10': paddingTop,
          'pb-10': paddingBottom,
          'pt-20': paddingTop && paddingSize === 'lg',
          'pb-20': paddingBottom && paddingSize === 'lg',
          'pt-5': paddingTop && paddingSize === 'sm',
          'pb-5': paddingBottom && paddingSize === 'sm',
          'pt-0': !paddingTop,
          'pb-0': !paddingBottom,
          'mt-10': marginTop,
          'mb-10': marginBottom,
          'mt-20': marginTop && marginSize === 'lg',
          'mb-20': marginBottom && marginSize === 'lg',
          'mt-5': marginTop && marginSize === 'sm',
          'mb-5': marginBottom && marginSize === 'sm',
          'mt-0': !marginTop,
          'mb-0': !marginBottom,
        },
        {
          'items-center': align === 'center',
          'items-start': align === 'left',
          'items-end': align === 'right',
          'w-1/2': width === 'sm',
          'w-3/4': width === 'lg',
          'w-full': width === 'xl' || width === 'full',
          'h-auto': height === 'auto',
          'h-1/2': height === 'half',
          'h-svh': height === 'full',
          'border-t-2': lineTop,
          'border-b-2': lineBottom,
          'border-white': mode === 'light',
          'border-black': mode === 'dark',
        },
        className
      )}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : undefined,
        color: color ? color : undefined,
      }}
    >
      {children}
    </section>
  );
}

export default Section;
