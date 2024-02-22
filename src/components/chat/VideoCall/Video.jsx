import React, { useEffect, useRef } from 'react';

const Video = ({ isLocalStream, stream }) => {
  const videoRef = useRef();
  console.log({ stream });
  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return <video ref={videoRef} autoPlay playsInline muted={isLocalStream ? true : false} />;
};

export default Video;
