import React, { useEffect, useRef } from "react";

const Audio = ({ stream, isLocalStream }) => {
  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;
    audio.srcObject = stream;

    audio.onloadedmetadata = () => {
      audio.play();
    };

    return () => {
      // Cleanup function to stop audio playback and release resources
      audio.pause();
      audio.srcObject = null;
    };
  }, [stream]);

  return (
    <audio
      ref={audioRef}
      autoPlay
      playsInline
      muted={isLocalStream ? true : false}
    />
  );
};

export default Audio;
