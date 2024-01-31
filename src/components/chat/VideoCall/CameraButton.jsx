import React, { useState } from "react";
import Image from "next/image";

import videoIcon from "../../../../public/videoIcon.svg";
import cancelVideo from "../../../../public/cancelVideo.svg";
import "./VideoCall.styles";

const CameraButton = ({ localStream, setStopVideo, stopVideo }) => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleToggleCamera = () => {
    setStopVideo(!stopVideo);
    if (localStream.getVideoTracks()[0]) {
      localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    }
    setCameraEnabled(!cameraEnabled);
  };
  return (
    <div className="circle video" onClick={handleToggleCamera}>
      {!cameraEnabled ? (
        <Image src={cancelVideo} alt="videoIcon" />
      ) : (
        <Image src={videoIcon} alt="videoIcon" />
      )}
    </div>
  );
};

export default CameraButton;
