import Image from 'next/image';
import placeholder from '../../assets/placeholder.webp';
import placeholder_white from '../../assets/placeholder-white.webp';

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
  return (
    <button onClick={handlePlay} className={'relative'}>
      <div className={'absolute bottom-10 left-10 w-full '}>
        <div className={'w-10 h-10'}>
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 384 512" className={'w-full h-auto'}>
            <path fill="#fff"
                  d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
          </svg>
        </div>
      </div>
      {poster ?
        <Image width={width} height={height} loading={'lazy'}
               src={`${poster}`}
               quality={60}
               alt={title}/>
        :
        <Image width={width} height={height} loading={'lazy'}
               src={(mode === 'light') ? placeholder : placeholder_white}
               quality={60}
               alt={title}/>
      }
    </button>
  );
}

export default VideoControl;
