/* eslint-disable-next-line */
import {useReducer, useRef, useState} from 'react';
import ReactPlayer from 'react-player/lazy'
import cn from 'classnames';
import VideoControl from './video-control';

export interface YoutubeProps {
  id: string;
  src?: string;
  title: string;
  poster?: string;
  width?: number;
  height?: number;
}

export function Youtube({id, src, title, poster, width = 1920, height = 1200}: YoutubeProps) {
  const [player, setPlayer] = useState<any | null>(null);

  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const ref = useRef<any>(null);


  const opts: any = {
    playerOptions: {
      controls: true
    },
    title: title,
  };

  const handlePlay = () => {
    setShowPlayer(true);
    setTimeout(() => {
    console.log('play', player);
    }, 1000);
  }


  return (
    <div className={'relative'}>
      <div
        className={cn('absolute bg-black w-full h-full overflow-hidden z-20 aspect-w-16 aspect-h-9', (showPlayer) ? 'opacity-100 display' : 'opacity-0 hidden')}>
        {(showPlayer) && <ReactPlayer
          width="100%"
          height="100%"
          playing={showPlayer}
          ref={ref}
          id={id}
          url={src}
          config={opts}
          onPlay={handlePlay}

        />}
      </div>
      <VideoControl handlePlay={handlePlay} title={title}  poster={poster} width={width} height={height} />
    </div>
  );
}

export default Youtube;