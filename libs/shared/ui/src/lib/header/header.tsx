/* eslint-disable-next-line */
import cn from 'classnames';
import styles from './header.module.scss';
import {BlockAnimateOnScroll, BlockAnimationProvider} from '@supernaut/context';

export interface HeaderProps {
  pageName?: string | undefined | null;
  title?: string | undefined | null;
  subtitle?: string | undefined | null;
  description?: string | undefined | null;
  columnLayout?: boolean;
  mode?: 'light' | 'dark';
  marginTop?: boolean;
  marginBottom?: boolean;
}

export function Header({
  pageName,
  title,
  subtitle,
  description,
  mode,
  columnLayout = false,
  marginTop = true,
  marginBottom = false,
}: HeaderProps) {

  const descriptionContent = () => {
    if(description) {
      return (<div
        className={cn(styles['header-body'], 'text-secondary text-lg')}
        dangerouslySetInnerHTML={{__html: description || ''}}
      ></div>)
    }
  }


  return (<BlockAnimationProvider>
      <header>
        <div
          className={cn(
            'w-full max-w-9xl mx-auto px-5 md:px-10',
            marginTop && 'mt-[130px] lg:mt-[220px]',
          marginBottom && 'mb-[110px] lg:mb-[160px]'
        )}
      >
        <div
          className={cn(
            columnLayout
              ? 'grid grid-cols-1 md:grid-cols-2'
              : 'flex flex-row w-full',
            mode === 'light' ? 'text-base' : 'text-primary'
          )}
        >
          <div className={cn(columnLayout ? 'w-full md:w-4/12' : 'w-full w-6/12') }>
            <div className={'sr-only'}>{pageName}</div>
            <BlockAnimateOnScroll animation="splitText" duration={0.5} start="top 90%"><h1 className={'splitTextOverflow'}>{title || pageName}</h1></BlockAnimateOnScroll>
          </div>
          {columnLayout && (
            <div
              className={cn(
                columnLayout && 'w-full md:w-8/12 flex flex-col space-y-10'
              )}
            >
              <div>
                <BlockAnimateOnScroll animation="splitText" duration={0.5} start="top 90%"><h2
                  className={'splitTextOverflow'}>{subtitle}</h2></BlockAnimateOnScroll>
              </div>
              <div className={'overflow-hidden'}>
              <BlockAnimateOnScroll animation="slideIn" duration={0.2} start="top 100%" to={{delay:0.5}} >
                {descriptionContent()}
              </BlockAnimateOnScroll>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
    </BlockAnimationProvider>
  );
}

export default Header;
