'use client';
import Image from 'next/image';

import placeholder_white from '../../../assets/placeholder-white.png';
import placeholder from '../../../assets/placeholder.png';
import {useState} from 'react';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface VideoControlProps {
  handlePlay: () => void;
  poster?: string;
  width?: number;
  height?: number;
  title: string;
  mode?: 'light' | 'dark';
}

export function VideoControl({poster, handlePlay, width, height, title, mode}: VideoControlProps) {

  const [showPlayer, setShowPlayer] = useState<boolean>(false);

  const play = () => {
    setShowPlayer(true);
    handlePlay();
  }

  return (
    <button onClick={play} className={cn( showPlayer ? 'hidden' : 'block')}>
      <div className={'absolute top-0 left-0 w-full h-full fill-secondary flex flex-col justify-center items-center'}>
        <div className={'w-[100px] h-[100px]  border border-4 border-primary rounded-full flex flex-col justify-center items-center'}>
          <div className={'h-9 w-9 mb-2'}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 384 512" >
              <path fill="#fff"
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>
          </div>
        </div>
      </div>
      {poster ?
        <Image width={width} height={height} loading={'lazy'}
               src={`${poster}`}
               quality={80}
               alt={title}/>
        :
        <Image width={width} height={height} loading={'lazy'}
               src={(mode === 'light') ? placeholder : placeholder_white}
               quality={80}
               alt={title}/>
      }
    </button>
  );
}

export default VideoControl;
