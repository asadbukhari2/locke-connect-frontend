import React from "react";

import { toast } from "react-toastify";

function Toast({ type, message, ...props }) {
  return toast[type](
    <>
      <div>
        <span>{message}</span>
      </div>
    </>,
    {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
    }
  );
}

export default Toast;
