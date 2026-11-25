import { createContext, useState } from "react";
import "./App.css";
import Controllers from "./components/controllers/controllers.component";
import Header from "./components/Header/Header.component";
import Preview from "./components/preview/preview.component";
export const UseTextShadow = createContext();
function App() {
  const [color, setColor] = useState("#f57b51");
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [blurRadius, setBlurRadius] = useState(6);
  return (
    <div>
      <UseTextShadow.Provider
        value={{
          color,
          setColor,
          xOffset,
          setXOffset,
          yOffset,
          setYOffset,
          blurRadius,
          setBlurRadius,
        }}
      >
        <Header />
        <div className="container">
          <Preview />
          <Controllers />
        </div>
      </UseTextShadow.Provider>
    </div>
  );
}

export default App;
