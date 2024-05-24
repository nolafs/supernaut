/* eslint-disable-next-line */
import cn from 'classnames';
import {useRef, useState} from 'react';
import ReactPlayer, {Config, ReactPlayerProps} from 'react-player/lazy';
import VideoControl from './video-control';
import ContentVideoAnimation from '../content-video-animation';


export interface VimeoProps {
  id: string;
  src?: string;
  title: string;
  poster?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  frame?: boolean;
}

export function Vimeo({
                        id,
                        src,
                        title,
                        poster,
                        autoplay,
                        frame,
                        controls = true,
                        loop = false,
                        width = 1920,
                        height = 1200}: VimeoProps) {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const ref = useRef<ReactPlayer>(null);


  const opts: Config = {
    vimeo: {
      title: title,
      playerOptions: {
        controls: controls,
        autoplay: autoplay,
        muted: (autoplay) ? true : false,
        loop: loop,
        playsinline: true,
        byline: false,
        vimeo_logo: false,
        dnt: true,
      }
    },

  };

  const handlePlay = () => {
    if (autoplay) {
      setShowPlayer(true);
    }
  }

  const handlePause = () => {
    setShowPlayer(false);
  }

  const handleReplay = () => {
    if (autoplay) {
      setShowPlayer(true);
    }
  }

  const play = () => {
    setShowPlayer(true);
  }


  return (<ContentVideoAnimation handlePlay={handlePlay} handlePause={handlePause} handleReplay={handleReplay}>

      <div
        className={cn('relative bg-neutral w-full h-full overflow-hidden z-20 aspect-w-16 aspect-h-9', (showPlayer) ? 'opacity-100 display' : 'opacity-0 hidden')}>
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

        {!autoplay &&
          <VideoControl handlePlay={play} title={title}
                        poster={(poster) && `${poster}?fm=webp&w=${width}&h=${height}&fit=fill`} width={width}
                        height={height}/>
        }
      </div>

    </ContentVideoAnimation>
  );
}

export default Vimeo;
