/* eslint-disable-next-line */
import {classNames} from '@headlessui/react/dist/utils/class-names';
import cn from 'classnames';
import { ReactNode } from 'react';

export interface SectionProps {
  internalName?: string;
  sectionId?: string;
  children: ReactNode;
  marginSize?: 'sm' | 'md' | 'lg';
  paddingSize?: 'sm' | 'md' | 'lg';
  marginTop?: boolean;
  marginBottom?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  mode?: 'light' | 'dark' | string | undefined | null;
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
  sectionId,
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
      id={sectionId}
      className={cn(
        'relative overflow-hidden',
        'flex',
        'flex-col',
        'justify-center',
        mode === 'dark' && 'text-white',
        mode === 'light' && 'text-black bg-white',
        {
          'pt-5 md:pt-10': paddingTop && paddingSize === 'md',
          'pb-5 md:pb-10': paddingBottom && paddingSize === 'md',
          'pt-10 md:pt-20': paddingTop && paddingSize === 'lg',
          'pb-10 mdLpb-20': paddingBottom && paddingSize === 'lg',
          'pt-5': paddingTop && paddingSize === 'sm',
          'pb-5': paddingBottom && paddingSize === 'sm',

          'pt-0': !paddingTop,
          'pb-0': !paddingBottom,

          'mt-5 md:mt-10': marginTop && marginSize === 'md',
          'mb-5 md:mb-10': marginBottom && marginSize === 'md',
          'mt-10 md:mt-20': marginTop && marginSize === 'lg',
          'mb-10 md:mb-20': marginBottom && marginSize === 'lg',
          'mt-5': marginTop && marginSize === 'sm',
          'mb-5': marginBottom && marginSize === 'sm',
          'mt-0': !marginTop,
          'mb-0': !marginBottom,
        },
        {
          'items-center': align === 'center',
          'items-start': align === 'left',
          'items-end': align === 'right',
          'w-1/2 mx-auto': width === 'sm',
          'w-3/4 mx-auto': width === 'lg',
          'w-full': width === 'xl' || width === 'full',
          'h-auto': height === 'auto',
          'h-1/2': height === 'half',
          'h-svh': height === 'full',
        },
        className
      )}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : undefined,
        color: color ? color : undefined,
      }}
    >
      { lineTop && <div className={'absolute top-0 left-1/2 -translate-x-1/2 wrapper border-lines border-t-2'}></div>}
      {children}
      {lineBottom && <div className={'absolute bottom-0 left-1/2 -translate-x-1/2 wrapper border-lines border-t-2'}></div>}
    </section>
  );
}

export default Section;
