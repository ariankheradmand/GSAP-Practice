"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useRef, useState } from "react";

function page() {
  const VideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    const video = VideoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    VideoRef.current.volume = newVolume;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-200 h-auto relative">
        <video
          ref={VideoRef}
          className="w-200 h-auto ratio rounded-md"
          src="/"
        />

        <div className=" absolute w-full h-12 bg-white/10 bottom-0 flex items-center justify-center px-4">
          <div className="w-6/12 flex items-center justify-start gap-4">
            <div>
              {isPlaying ? (
                <Pause
                  onClick={() => {
                    togglePlay();
                  }}
                  className="opacity-75 hover:opacity-90"
                  size={36}
                />
              ) : (
                <Play
                  onClick={() => {
                    togglePlay();
                  }}
                  className="opacity-75 hover:opacity-90"
                  size={36}
                />
              )}
            </div>
            <Volume2 className="opacity-75" size={36} />
            <div className=" relative flex items-center justify-center">
              <input
                className=" w-24 h-2 bg-two rounded-lg appearance-auto cursor-pointer "
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
          <div className="w-6/12 flex justify-end items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default page;
