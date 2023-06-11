import { useEffect, useState } from "react";
import "./glassmorphic.css";

function GlassMorphicEffect() {
  const [buttonText, setButtonText] = useState("Copy CSS Code");
  const [glassProperties, setGlassProperties] = useState({
    color: '#162f50',
    blur: 2,
    transparency: 0.3,
    borderRadius: 5,
  });

  const handlePropertyChange = (
    propertyName: string,
    propertyValue: string | number
  ) => {
    setGlassProperties((prevProperties) => ({
      ...prevProperties,
      [propertyName]: propertyValue,
    }));
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (buttonText === "Copied") {
      timeoutId = setTimeout(() => {
        setButtonText("Copy CSS Code");
      }, 2000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [buttonText]);

  const hexToRGBA = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const glassStyle = {
    background: hexToRGBA(glassProperties.color, glassProperties.transparency),
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: `blur(${glassProperties.blur}px)`,
    WebkitBackdropFilter: `blur(${glassProperties.blur}px)`,
    borderRadius: `${glassProperties.borderRadius}%`,
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };
  
  

  const generateCSSCode = () => {
    const { color, transparency, blur, borderRadius } = glassProperties;
    return `
      background: ${hexToRGBA(color, transparency)};
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(${blur}px);
      -webkit-backdrop-filter: blur(${blur}px);
      border-radius: ${borderRadius}%;
      border: 1px solid rgba(255, 255, 255, 0.18);
    `;
  };

  function copyCssCode() {
    const code = generateCSSCode();
    navigator.clipboard.writeText(code).then(() => {
      setButtonText("Copied");
    });
  }

  return (
    <div className="g-body">
      <div className="g-left" style={glassStyle}>
      <span>🧡</span>
      </div>
      <div className="g-right">
        <div className="control-group">
          <label htmlFor="color">Color:</label>
          <input
            type="color"
            id="color-picker"
            value={glassProperties.color}
            onChange={(e) => handlePropertyChange("color", e.target.value)}
          />
          <input
            type="text"
            id="color"
            value={glassProperties.color}
            onChange={(e) => handlePropertyChange("color", e.target.value)}
          />
        </div>
        <div className="control-group">
          <label htmlFor="blur">Blur:</label>
          <input
            type="range"
            id="blur"
            min="0"
            max="20"
            value={glassProperties.blur}
            onChange={(e) =>
              handlePropertyChange("blur", parseInt(e.target.value))
            }
          />
        </div>
        <div className="control-group">
          <label htmlFor="transparency">Transparency:</label>
          <input
            type="range"
            id="transparency"
            min="0"
            max="1"
            step="0.1"
            value={glassProperties.transparency}
            onChange={(e) =>
              handlePropertyChange("transparency", parseFloat(e.target.value))
            }
          />
        </div>
        <div className="control-group">
          <label htmlFor="border-radius">Border Radius:</label>
          <input
            type="range"
            id="border-radius"
            min="0"
            max="100"
            value={glassProperties.borderRadius}
            onChange={(e) =>
              handlePropertyChange("borderRadius", parseInt(e.target.value))
            }
          />
        </div>
        <div className="g-button">
          <button onClick={copyCssCode}>{buttonText}</button>
        </div>
      </div>
      <div className="box-1"></div>
      <div className="box-2"></div>
      <div className="box-3"></div>
    </div>
  );
}

export default GlassMorphicEffect;
