/* eslint-disable-next-line */
import {ReactNode} from 'react';
import cn from 'classnames';

export interface SectionProps {
  internalName?: string;
  children: ReactNode;
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
}

export function Section({internalName, children, color, mode, backgroundColor, lineBottom, lineTop, paddingTop = false, marginBottom, marginTop, paddingBottom = false, height='auto' , width = 'full', align = 'left'}: SectionProps) {
  return (
    <section id={internalName} className={
      cn(
        'relative overflow-hidden',
        'flex',
        'flex-col',
        'justify-center',
        mode === 'dark' && 'text-white',
        mode === 'light' && 'text-black bg-white',
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
          'pt-24': paddingTop,
          'pb-24': paddingBottom,
          'mt-24': marginTop,
          'mb-24': marginBottom,
          'border-t-2': lineTop,
          'border-b-2': lineBottom,
          'border-white': mode === 'light',
          'border-black': mode === 'dark',
        }
      )
    } style={{
      backgroundColor: backgroundColor ? backgroundColor : undefined,
      color: color ? color : undefined
    }}>
      {children}
    </section>
  );
}

export default Section;
