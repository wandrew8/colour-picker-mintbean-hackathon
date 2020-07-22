import React, { useState } from "react";
import Clipboard from 'react-clipboard.js';

export default function Colors({ color }) {
  const [ isSuccess, setIsSuccess ] = useState(false);
  const onSuccess = () => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 500);
    setIsSuccess(true);
  }
  return (
    <div style={{ backgroundColor: color }} className="color">
      <div>
        <Clipboard className="clipboard" data-clipboard-text={color} onSuccess={onSuccess}>
        {isSuccess ? "Copied!" : "Copy to Clipboard"}
        </Clipboard>
        <div className="hex-value">{color}</div>
      </div>
    </div>
  );
}
