import { useEffect, useState } from "react";
import "./glassmorphic.css";
import Desc from "../desc/desc";
import MyHelmet from "../helmet/helmet";


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
      <MyHelmet
           title="Glassmorphic effect generator" 
           des="Add a touch of elegance to your web design with our Glassmorphic Effect Generator tool. Create stunning glassmorphic effects for your UI components effortlessly. Enhance your website's visual appeal and user experience, all free of charge." 
           keywords="Glassmorphic effect generator, Glassmorphism, Glassmorphic UI components, Web design tool, UI design effects, Glassmorphic styling, Free glassmorphic effects, User interface enhancements, Glassmorphic design trends, Web component styling, Glassmorphic shadows, Glassmorphic buttons, Glassmorphic cards, Glassmorphic inputs, UI/UX design, Enhance website aesthetics, Glassmorphic design elements, Web design resources, Glassmorphic styling tool, Glassmorphic generator"
           />
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
      <Desc flexDirection='row' title={'Create Glassmorphic Effect'} desc={'Introducing our amazing tool that helps you effortlessly create mesmerizing glassmorphic effects for your modern designs. Glassmorphism is a hot trend in contemporary design, adding elegance and depth to user interfaces. With our user-friendly tool, you can generate stunning glass-like elements using smooth blur, transparency, and subtle reflections. Whether you\'re designing websites, mobile apps, or graphics, our tool empowers you to create visually captivating experiences. Elevate your designs with the enchanting allure of glassmorphism and unleash your creativity like never before. Get started now and make your designs shine with this powerful and trendy effect!'}/>
    </div>
  );
}

export default GlassMorphicEffect;
