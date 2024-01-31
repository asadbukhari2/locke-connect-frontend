import Image from "next/image";
import React from "react";

import { endCall } from "@/realtimeCommunication/callHandler";
import cancelCall from "../../../../public/cancelCall.svg";
import "./VideoCall.styles";
import { useRouter } from "next/router";

const CancelButton = ({ from, to }) => {
  const router = useRouter();
  const handleLeaveCall = () => {
    endCall(from, to, true);
    // router.reload();
  };

  return (
    <div className="circle cancelCall" onClick={handleLeaveCall}>
      <Image src={cancelCall} alt="cancelCall" />
    </div>
  );
};

export default CancelButton;
