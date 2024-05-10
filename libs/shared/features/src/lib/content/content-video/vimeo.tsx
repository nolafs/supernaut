/* eslint-disable-next-line */
import cn from 'classnames';
import {useRef, useState} from 'react';
import VideoControl from './video-control';
import ReactPlayer from 'react-player/lazy';


export interface VimeoProps {
  id: string;
  src?: string;
  title: string;
  poster?: string;
  width?: number;
  height?: number;
}

export function Vimeo({id, src, title, poster, width = 1920, height = 1200}: VimeoProps) {

  const [player, setPlayer] = useState<any | null>(null);
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const handlePlay = () => {
    return null
  }

  return (
    <div className={'relative'}>
      <div
        className={cn('absolute bg-black  w-full h-full overflow-hidden z-20 aspect-w-16 aspect-h-9', (showPlayer) ? 'opacity-100 display' : 'opacity-0 hidden')}>

        {(showPlayer) && <ReactPlayer
          width="100%"
          height="100%"
          playing={showPlayer}
          ref={ref}
          id={id}
          url={src}
          onPlay={handlePlay}

        />}

      </div>
      <VideoControl handlePlay={handlePlay} title={title} poster={poster} width={width} height={height}/>
    </div>
  );
}

export default Vimeo;
