/* eslint-disable-next-line */
import cn from 'classnames';
import {useReducer, useRef, useState} from 'react';
import ReactPlayer, {Config} from 'react-player/lazy'
import VideoControl from './video-control';
import ContentVideoAnimation from './content-video-animation';

export interface YoutubeProps {
  id: string;
  src?: string;
  title: string;
  poster?: string;
  width?: number;
  height?: number;
  mode?: 'light' | 'dark';
}

export function Youtube({id, src, title, poster, mode, width = 1920, height = 1200}: YoutubeProps) {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const opts: Config = {
    youtube: {
      playerVars: {
        mute: 1,
        autoplay: 0,
        controls: 0,
        playsinline: 1
      },
    }
  };

  const handlePlay = () => {
    setShowPlayer(true);
  }


  return (
    <ContentVideoAnimation handleReady={handlePlay}>
    <div className={'relative'}>
      <div
        className={cn('absolute bg-neutral w-full h-full overflow-hidden z-20 aspect-w-16 aspect-h-9', (showPlayer) ? 'opacity-100 display' : 'opacity-0 hidden')}>
        {(showPlayer) && <ReactPlayer
          width="100%"
          height="100%"
          playing={showPlayer}
          ref={ref}
          id={id}
          url={src}
          config={opts}
          onPlay={handlePlay}
          className={'absolute z-10 w-auto min-w-full min-h-full max-w-none'}

        />}
      </div>
      <VideoControl handlePlay={handlePlay} title={title} mode={mode}  poster={poster} width={width} height={height} />
    </div>
    </ContentVideoAnimation>
  );
}

export default Youtube;
