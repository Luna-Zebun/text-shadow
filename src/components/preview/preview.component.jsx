import React, { useRef } from "react";
import "./preview.style.css";
import { useContext } from "react";
import { UseTextShadow } from "../../App";

function Preview() {
  const { color, xOffset, yOffset, blurRadius } = useContext(UseTextShadow);
  const DivRef = useRef();
  const handleCopy = () => {
    navigator.clipboard.writeText(DivRef.current.innerText);
  };

  return (
    <div className="previewContainer">
      <div className="SampleText">
        <h1
          style={{
            color: color,
            textShadow: `${xOffset}px ${yOffset}px ${blurRadius}px ${color}`,
          }}
        >
          Sample Text
        </h1>
      </div>
      
      <div className="CssContainer">
        <h2 style={{ color: "#00000099", margin: "5px" }}>CSS output:</h2>

        <div className="CssBox">
          <span style={{ fontSize: "20px" }} ref={DivRef}>{`text-shadow: ${xOffset}px ${yOffset}px ${blurRadius}px ${color};`}</span>
          <button className="copyButton fx-9" onClick={handleCopy}>
            <span className="copyButton-label">Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
