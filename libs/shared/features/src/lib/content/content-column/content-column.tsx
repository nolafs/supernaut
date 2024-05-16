import {BlockAnimateOnScroll, BlockAnimationContext, BlockAnimationProvider} from '@supernaut/context';
import { LinkPrimary } from '@supernaut/shared-ui';
import cn from 'classnames';
import {ReactNode} from 'react';
import ComponentResolver from '../../section-resolver/component-resolver/component-resolver';


/* eslint-disable-next-line */
export interface ContentColumnProps {
  align?: 'left' | 'right';
  type?: 'text' | 'intro' | '1/2' | '3/9';
  hTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  title?: string | undefined | null;
  body?: string | undefined | null;
  url?: string | undefined | null;
  label?: string  | undefined | null;
  mode?: 'light' | 'dark';
  children?: ReactNode;
  hasAnimation?: boolean;
  component?: any
}

function generateRandomKey() {
  return Math.random().toString(36).substring(7);
}


export function ContentColumn({
  type = '1/2',
  hTag = 'h1',
  title,
  body,
  align,
  url,
  label,
  mode,
  padding = 'sm',
  children,
  component
}: ContentColumnProps) {

  if(type === 'intro' || type === 'text' || !children && component === undefined) {


    return (<BlockAnimationProvider>
        <div
          className={cn(
            'wrapper flex flex-row',
            align === 'left' && 'justify-start',
            align === 'right' && 'justify-end',
            mode === 'dark' && 'text-white',
            mode === 'light' && 'text-black bg-white',
            padding === 'none' && 'px-0',
            padding === 'sm' && 'px-5 md:px-10',
            padding === 'md' && 'px-10 md:px-20',
            padding === 'lg' && 'px-20 md:px-40'
          )}
        >
          <div className={'w-full md:w-9/12 lg:w-1/2'}>
            {title && <BlockAnimateOnScroll animation="splitText" duration={0.5} start="top 90%"><h1 className={'mb-12 md:mb-16 splitTextOverflow'}>{title}</h1></BlockAnimateOnScroll>}
            {body && (<BlockAnimateOnScroll animation="splitText" duration={0.5} start="top 90%">
              <div
                className={'text-[28px] md:text-3xl lg:text-5xl font-normal leading-7'}
                dangerouslySetInnerHTML={{__html: body}}
              />
              </BlockAnimateOnScroll>
            )}
            {url && label && (
              <BlockAnimateOnScroll animation="fadeIn" duration={1.5} start="top 90%">
              <div className={'mt-10 md:mb-16'}>
                <LinkPrimary url={url} hasIcon={true} size={'lg'}>
                  {label}
                </LinkPrimary>
              </div>
              </BlockAnimateOnScroll>
            )}
          </div>
        </div>
      </BlockAnimationProvider>
    );
  }
  else {


    console.log('component', component);

    return (<BlockAnimationProvider>
      <div className={cn('w-full max-w-9xl mx-auto flex flex-col md:flex-row w-full gap-10',
        mode === 'dark' && 'text-white',
        mode === 'light' && 'text-black bg-white',
        padding === 'none' && 'px-0',
        padding === 'sm' && 'px-5 md:px-10',
        padding === 'md' && 'px-10 md:px-20',
        padding === 'lg' && 'px-20 md:px-40',
        align === 'left' && 'justify-start',
        align === 'right' && 'justify-end',

      )}>
        <div className={cn('w-full', (type === '1/2') && 'md:w-6/12', (type === '3/9') && 'md:w-3/12')}>
          <BlockAnimateOnScroll animation="splitText" duration={0.5}  start="top 90%">
          { hTag === 'h1' && <h1 className={'splitTextOverflow'}>{title}</h1>}
          { hTag === 'h2' && <h2>{title}</h2>}
          { hTag === 'h3' && <h3 className={'splitTextOverflow'}>{title}</h3>}
          { hTag === 'h4' && <h4 className={'splitTextOverflow'}>{title}</h4>}
          { hTag === 'h5' && <h5 className={'splitTextOverflow'}>{title}</h5>}
          { hTag === 'h6' && <h6 className={'splitTextOverflow'}>{title}</h6>}
          </BlockAnimateOnScroll>
        </div>
        <div className={cn('w-full', (type === '1/2') && 'md:w-6/12', (type === '3/9') && 'md:w-9/12')}>

          {children &&
            <BlockAnimateOnScroll animation="fadeIn" duration={0.5} start="top 90%">
              {children}
            </BlockAnimateOnScroll>
          }


          {(component !== undefined) && (
            (component.__typename !== undefined) && (
                <ComponentResolver key={`${component.__typename}-${generateRandomKey()} `}
                                   componentProps={component!}/>
            )
          )}
        </div>
      </div>
      </BlockAnimationProvider>
    )
  }
}

export default ContentColumn;
