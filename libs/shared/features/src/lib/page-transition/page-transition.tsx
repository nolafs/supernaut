'use client'
import {ReactNode, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {usePathname} from 'next/navigation';
import { useIsFirstRender } from '@supernaut/hooks';
import {useStore} from '@supernaut/utils';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface PageTransitionProps {
  children: ReactNode;
  title?: string;
  page?: string;
}

export function saveScrollPosition(
  url: string,
  setRoutingPageOffset: (val: number) => void
): void {
  const scrollPos = {x: window.scrollX, y: window.scrollY}
  setRoutingPageOffset(scrollPos.y)
  sessionStorage.setItem(url, JSON.stringify(scrollPos))
}

function clearAllScrollPos(): void {
  sessionStorage.clear()
}

function restoreScrollPos(url: string): void {
  const scrollPos = JSON.parse(
    sessionStorage.getItem(url) || JSON.stringify({x: 0, y: 0})
  )
  if (scrollPos) {
    window.scrollTo({
      top: scrollPos.y,
      left: scrollPos.x,
      behavior: 'smooth'
    })
  }
}

export function PageTransition({children, page, title}: PageTransitionProps) {

  const pathname = usePathname()
  const currentRef = useRef<HTMLDivElement>(null)
  const tempRef = useRef<HTMLDivElement>(null)
  const lastRef = useRef<HTMLCollection | null>(null)
  const [currentPath, setCurrentPath] = useState<string>(pathname)
  const [shouldScrollRestore, setShouldScrollRestore] = useState<boolean>(false)
  const isFirstRender = useIsFirstRender()
  const {
    isTransitionActive,
    setIsTransitionActive,
    routingPageOffset,
    setRoutingPageOffset
  } = useStore()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
      restoreScrollPos(pathname)

      const onReload = (): void => {
        clearAllScrollPos()
      }

      window.addEventListener('beforeunload', onReload)

      window.addEventListener('popstate', () => {
        const scrollPos = {x: window.scrollX, y: window.scrollY}
        setRoutingPageOffset(scrollPos.y)
        setShouldScrollRestore(true)
      })

      return () => {
        window.removeEventListener('beforeunload', onReload)
      }
    }
  }, [pathname])

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    if (currentRef.current && tempRef.current && !isFirstRender) {
      mm.add(
        {
          isDesktop: '(min-width: 772px)',
          isMobile: '(max-width: 771px)'
        },
        (context) => {

        })
    }
  }, [currentPath, pathname, shouldScrollRestore])

  return (
    <>
      <div  id={'page-transition'}
           className={'fixed z-[39] w-full h-screen top-0 inset-0 pointer-events-none overflow-hidden'}>
        <div id="section-wrapper"
             className={'absolute z-50 top-1/2 font-bold w-full  -translate-y-1/2 text-neutral text-center mix-blend-difference flex flex-col justify-center items-center'}>
          <div id="s-t" className={'text-[150px] overflow-hidden text-white font-bold'}><span id="s-t-i"
                                                                                              className={'block'}>{title}</span>
          </div>
          <div id="s-p" className={'text-[78px] overflow-hidden text-white'}><span id="s-p-i"
                                                                                   className={'block'}>{page}</span>
          </div>
        </div>
        <div className={'bar w-full bg-primary'} style={{height: '5%'}}></div>
        <div className={'bar w-full bg-primary'} style={{height: '6%'}}></div>
        <div className={'bar w-full bg-primary'} style={{height: '12%'}}></div>
        <div className={'bar w-full bg-primary'} style={{height: '21%'}}></div>
        <div className={'bar w-full bg-primary'} style={{height: '27%'}}></div>
        <div className={'bar w-full bg-primary'} style={{height: '41%'}}></div>
      </div>

      <div
      className={cn(
        'content relative',
        isTransitionActive && 'overflow-hidden bg-blue-600'
      )}
      >
                {pathname !== currentPath && (
                  <div
                    key={pathname + ' temp'}
                    ref={tempRef}
                    className={cn('temp transition')}
                  >
                    <div
                      className="origin-center will-change-transform"
                      style={{
                        transform: `translateY(-${routingPageOffset}px)`
                      }}
                    ></div>
                  </div>
                )}

      <div key={pathname} ref={currentRef} className={cn('next transition')}>
        <div className="bg-gray-1">{children}</div>
      </div>
      </div>
    </>
  );
}

export default PageTransition;
