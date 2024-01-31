import Image from "next/image";
import React, { useState } from "react";

import speakerCall from "../../../../public/speakerCall.svg";
import "./VideoCall.styles";

const MicButton = ({ localStream }) => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicEnabled(!micEnabled);
  };
  return (
    <div className="circle mute" onClick={handleToggleMic}>
      <Image src={speakerCall} alt="speakerCall" />
    </div>
  );
};

export default MicButton;
