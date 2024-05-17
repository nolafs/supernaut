/* eslint-disable-next-line */
import cn from 'classnames';
import {useRef, useState} from 'react';
import ReactPlayer, {Config, ReactPlayerProps} from 'react-player/lazy';
import VideoControl from './video-control';
import ContentVideoAnimation from './content-video-animation';


export interface VimeoProps {
  id: string;
  src?: string;
  title: string;
  poster?: string;
  width?: number;
  height?: number;
}

export function Vimeo({id, src, title, poster, width = 1920, height = 1200}: VimeoProps) {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const ref = useRef<ReactPlayer>(null);


  const opts: Config = {
    vimeo: {
      title: title,
      playerOptions: {
        controls: true,
        byline: false,
        vimeo_logo: false,
        dnt: true,
      }
    },

  };

  const handlePlay = () => {
    setShowPlayer(true);
  }

  const handlePause = () => {
    setShowPlayer(true);
  }

  const handleReplay = () => {
    setShowPlayer(true);
  }


  return (<ContentVideoAnimation handlePlay={handlePlay} handlePause={handlePause} handleReplay={handleReplay}>
    <div className={'relative wrapper'}>
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
          className={'object-center object-cover w-full h-full'}
          onPlay={handlePlay}></ReactPlayer>}
      </div>
      <VideoControl handlePlay={handlePlay} title={title} poster={poster} width={width} height={height}/>
    </div>
    </ContentVideoAnimation>
  );
}

export default Vimeo;
