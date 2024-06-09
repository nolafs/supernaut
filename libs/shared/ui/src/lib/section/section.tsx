/* eslint-disable-next-line */
import {classNames} from '@headlessui/react/dist/utils/class-names';
import cn from 'classnames';
import { ReactNode } from 'react';
import {BlockAnimateOnScroll} from '@supernaut/context';

export interface SectionProps {
  internalName?: string;
  sys?: any;
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
  width?: 'sm' | 'md' |'lg' | 'xl' | 'full';
  height?: 'auto' | 'half' | 'full';
  lineTop?: boolean;
  lineBottom?: boolean;
  className?: string;
  animation?: boolean;
}

export function Section({
  internalName,
  sys,
  sectionId,
  children,
  color,
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
  width = 'xl',
  align = 'left',
  className,
  animation = false,
}: SectionProps) {

  console.log(internalName, sys)

  const section = () => {
    return (
      <section
        data-sb-object-id={sys.id}
        id={sectionId}
        className={cn(
          'section relative overflow-hidden',
          'flex',
          'flex-col',
          'justify-center',
          {
            'w-full': width === 'full',
            'max-w-9xl': width === 'xl',
            'w-1/2': width === 'sm',
            'w-3/4': width === 'lg',
          },
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
            'mx-auto': align === 'center',
            'items-start': align === 'left',
            'items-end': align === 'right',
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
        {lineTop && <div className={'absolute top-0 left-1/2 -translate-x-1/2 wrapper border-lines border-t-2'}></div>}
        {children}
        {lineBottom &&
          <div className={'absolute bottom-0 left-1/2 -translate-x-1/2 wrapper border-lines border-t-2'}></div>}
      </section>
    );
  }

  if(animation){
    return (

        <BlockAnimateOnScroll animation="slideIn" duration={1}  target={'.section'} marker={false} >
          {section()}
        </BlockAnimateOnScroll>

    )
  } else {
    return section();
  }
}

export default Section;
