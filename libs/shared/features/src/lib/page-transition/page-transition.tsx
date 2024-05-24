'use client'
import {ReactNode, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {usePathname} from 'next/navigation';
import { useIsFirstRender } from '@supernaut/hooks';
import {animatePageIn, animatePageOut, useStore} from '@supernaut/utils';
import gsap from 'gsap';
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
  const ref = useRef<HTMLDivElement>(null)
  const currentRef = useRef<HTMLDivElement>(null)
  const tempRef = useRef<HTMLDivElement>(null)
  const lastRef = useRef<HTMLCollection | null>(null)
  const [currentPath, setCurrentPath] = useState<string | null>(pathname)
  const [shouldScrollRestore, setShouldScrollRestore] = useState<boolean>(false)
  const isFirstRender = useIsFirstRender()
  const {
    isTransitionActive,
    setIsTransitionActive,
    routingPageOffset,
    setRoutingPageOffset
  } = useStore()

  console.log('isTransitionActive', isTransitionActive)
  console.log('pathname', currentPath, pathname)

  /*
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

   */

  useLayoutEffect(() => {

    console.log('pathname', currentPath, pathname)

    if (!currentRef.current) return
    if (!lastRef.current) lastRef.current = currentRef.current.children

    if (currentRef.current && tempRef.current) {
      const tempFirstChild = tempRef.current.children[0]
      const lastFirstChild = lastRef.current[0]
      if (tempFirstChild && lastFirstChild) {
        tempFirstChild.appendChild(lastFirstChild.cloneNode(true))
      }
      lastRef.current = currentRef.current.children
    }
  }, [pathname])

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();


    if (currentRef.current && tempRef.current && !isFirstRender && pathname.includes('work/')) {
      mm.add(
        {
          isDesktop: '(min-width: 772px)',
          isMobile: '(max-width: 771px)'
        },
        (context) => {

          const {isMobile} = context.conditions as {
            isDesktop: boolean
            isMobile: boolean
          }

          const tl = gsap.timeline({});

          tl.set(tempRef.current, {
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
          })

          tl.set(currentRef.current, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
          })

          tl.fromTo(tempRef.current,
            {
              height: '100vh'
            },
            {
              duration: 1,
              height: 0,
              ease: 'power2.inOut',
              transformOrigin: 'bottom',
              onStart: () => {
                setIsTransitionActive(true)
              }
          })

          tl.add(animatePageOut(), '-=1');


          tl.add(animatePageIn());

          tl.fromTo(currentRef.current,
            {
              yPercent: 100,
            },
            {
            duration:1,
            yPercent: 0,
            ease: 'power2.inOut',
            onComplete: () => {
              // fire window resize event to fix any layout issues
              window.dispatchEvent(new Event('resize'))
              setCurrentPath(pathname)
              setIsTransitionActive(false)
              //setRoutingPageOffset(0)

              if (shouldScrollRestore) {
                setTimeout(() => {
                  restoreScrollPos(pathname)
                  //setShouldScrollRestore(false)
                }, 500)
              }
            }
          }, '-=1.5')



          tl.set(currentRef.current, {
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'visible'
          })

        })
    }
  }, [isFirstRender, pathname, setIsTransitionActive])

  return (
    <div ref={ref}>
      <div  id={'page-transition'}
           className={'fixed z-[39] w-full h-screen top-0 inset-0 pointer-events-none overflow-hidden opacity-0'}>
        <div id="section-wrapper"
             className={'absolute z-50 top-1/2 font-bold w-full  -translate-y-1/2 text-neutral text-center mix-blend-difference flex flex-col justify-center items-center'}>
          <div className={'-translate-y-1/2'}>
          <div id="s-t" className={'text-[150px] overflow-hidden text-white font-bold'}><span id="s-t-i"
                                                                                              className={'block'}>{title}</span>
          </div>
          <div id="s-p" className={'text-[78px] overflow-hidden text-white'}><span id="s-p-i"
                                                                                   className={'block'}>{page}</span>
          </div>
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
        isTransitionActive && 'overflow-hidden'
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
        <div className={'inner'}>{children}</div>
      </div>
      </div>
    </div>
  );
}

export default PageTransition;
