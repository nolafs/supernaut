'use client'

import {ReactNode, useEffect, useRef} from 'react';
import {animatePageIn} from '@supernaut/utils';



export default function Template({children}: {children: ReactNode}) {

  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <div id={'page-transition'}>
        <div id={'bar'} className="load-bar z-[999] fixed  w-full h-screen top-0 inset-0 bg-primary"></div>
      </div>
      {children}
    </>
  );

}
