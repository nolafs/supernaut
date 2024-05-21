'use client'

import {ReactNode, useEffect, useRef, useState} from 'react';
import {animatePageIn} from '@supernaut/utils';
import {usePathname} from 'next/navigation';
import {useWorkQuery} from '../../../lib/graphgl/Work/__generated/work.generated';

export default function Template({children}: {children: ReactNode}) {

  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'light' | 'dark' | null>(null);

  console.log('pathname', pathname);

  const result = useWorkQuery({slug: pathname.split('/').pop() || ''});
  console.log('data', result);

  useEffect(() => {
      animatePageIn();
  }, [result]);

  return (
    <>
      <div ref={ref} id={'page-transition'} className={'fixed z-[39] w-full h-screen top-0 inset-0 pointer-events-none overflow-hidden'}>
          <div id="section-wrapper" className={'absolute z-50 top-1/2 font-bold w-full  -translate-y-1/2 text-neutral text-center mix-blend-difference flex flex-col justify-center items-center'}>
            <div id="s-t" className={'text-[150px] overflow-hidden text-white font-bold'}><span id="s-t-i" className={'block'}>Work.</span></div>
            <div id="s-p" className={'text-[78px] overflow-hidden text-white'}><span id="s-p-i" className={'block'}>{result?.data?.workCollection?.items[0]?.title}.</span></div>
          </div>
          <div className={'bar w-full bg-primary'} style={{height:'5%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'6%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'12%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'21%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'27%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'41%'}}></div>
      </div>
      <div id={'content-main'}>
        {children}
      </div>
    </>
  );

}
