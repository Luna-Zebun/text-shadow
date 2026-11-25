import { useContext } from "react";
import { UseTextShadow } from "../../App";
import "./controllers.style.css";

function Controllers() {
  const {
    color,
    setColor,
    xOffset,
    setXOffset,
    yOffset,
    setYOffset,
    blurRadius,
    setBlurRadius,
  } = useContext(UseTextShadow);

  return (
    <div className="controllers-container">
      <div className="color-picker-wrapper">
        <input
          className="color-selector"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <label>Choose Color</label>
      </div>

      <div>
        <input
          value={xOffset}
          onChange={(e) => setXOffset(e.target.value)}
          className="shadow-range"
          type="range"
          id="x-offset"
          name="x-offset"
          min={-50}
          max={50}
        />
        <label htmlFor="x-offset"> X offset</label>
      </div>

      <div>
        <input
          value={yOffset}
          className="shadow-range"
          onChange={(e) => setYOffset(e.target.value)}
          type="range"
          id="y-offset"
          name="y-offset"
          min={-50}
          max={50}
        />
        <label htmlFor="y-offset"> Y offset</label>
      </div>
      <div>
        <input
        className="shadow-range"
          value={blurRadius}
          onChange={(e) => setBlurRadius(e.target.value)}
          type="range"
          id="blurRadius"
          name="blurRadius"
          min={0}
          max={100}
        />
        <label htmlFor="blurRadius"> blur Radius</label>
      </div>
    </div>
  );
}

export default Controllers;
