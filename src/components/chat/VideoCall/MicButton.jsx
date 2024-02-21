import Image from 'next/image';
import React, { useState } from 'react';
import { HiOutlineSpeakerXMark } from 'react-icons/hi2';

import speakerCall from '../../../../public/speakerCall.svg';
import './VideoCall.styles';

const MicButton = ({ localStream }) => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicEnabled(!micEnabled);
  };
  return (
    <div className="circle mute" onClick={handleToggleMic}>
      {micEnabled ? <Image src={speakerCall} alt="speakerCall" /> : <HiOutlineSpeakerXMark size={32} />}
    </div>
  );
};

export default MicButton;
