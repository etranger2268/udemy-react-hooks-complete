import { useRef } from 'react';
import MyVideoPlayer from './MyVideoPlayer';

export default function Lesson3_4() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleClick = (id: string) => {
    if (id === 'play') {
      videoRef.current?.play();
    } else if (id === 'pause') {
      videoRef.current?.pause();
    }
  };

  return (
    <div className="ml-8 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <button
          type="button"
          id="play"
          onClick={() => handleClick('play')}
          className="bg-sky-400 py-0.5 px-2 rounded transition-all duration-300 text-white hover:bg-sky-600"
        >
          Play
        </button>
        <button
          type="button"
          onClick={() => handleClick('pause')}
          className="bg-sky-400 py-0.5 px-2 rounded transition-all duration-300 text-white hover:bg-sky-600"
        >
          Pause
        </button>
      </div>
      <MyVideoPlayer
        ref={videoRef}
        width="250"
        type="video/mp4"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}
