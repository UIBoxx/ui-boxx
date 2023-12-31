import { useState, useEffect } from "react";
import './neumorphic.css';
import Desc from "../desc/desc";
import MyHelmet from "../helmet/helmet";

function NeuMorphicEffect(){
    const [buttonText, setButtonText] = useState("Copy CSS Code");
    const [cardProperties, setCardProperties] = useState<{
      backgroundColor: string;
      boxShadowColor: string;
      size: string;
      borderRadius: number;
      distance: number;
      intensity: number;
      blur: number;
      shape: string;
    }>({
      backgroundColor: "#dfafaf",
      boxShadowColor: "#9d9b9b",
      size: "medium",
      borderRadius: 2,
      distance: 3,
      intensity: 1,
      blur: 10,
      shape: "convex",
    });
  
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
  
    const handlePropertyChange = (
      propertyName: string,
      propertyValue: string | number
    ) => {
      if (propertyName === "backgroundColor") {
        // Automatically adjust boxShadowColor based on the new backgroundColor
        const isDarkBackground = isDarkColor(propertyValue as string);
        const newBoxShadowColor = isDarkBackground ? "#8d8686" : "#a19b9b";
        setCardProperties((prevProperties) => ({
          ...prevProperties,
          backgroundColor: propertyValue as string,
          boxShadowColor: newBoxShadowColor,
        }));
      } else {
        setCardProperties((prevProperties) => ({
          ...prevProperties,
          [propertyName]: propertyValue,
        }));
      }
    };
  
    const {
      backgroundColor,
      boxShadowColor,
      borderRadius,
      distance,
      intensity,
      blur,
      shape,
    } = cardProperties;
  
    const cardStyle = {
      backgroundColor,
      boxShadow: getBoxShadow(shape, boxShadowColor, distance, intensity, blur),
      borderRadius: `${borderRadius}%`,
    };
  
    const generateCSSCode = () => {
      let cssCode = ``;
      cssCode += `
      background-color: ${backgroundColor};
      border-radius: ${borderRadius}%;
      box-shadow:
      ${getBoxShadow(shape, boxShadowColor, distance, intensity, blur)};
    `;
  
      return cssCode;
    };
  
    function getBoxShadow(
      shape: string,
      boxShadowColor: string,
      distance: number,
      intensity: number,
      blur: number
    ) {
      const boxShadow = `${distance}px ${distance}px ${blur}px ${intensity}px ${boxShadowColor}`;
  
      switch (shape) {
        case "concave":
          return `inset ${boxShadow},
      inset -${distance}px -${distance}px ${blur}px ${intensity}px ${boxShadowColor}`;
        case "convex":
          return `${boxShadow},-${distance}px -${distance}px ${blur}px ${intensity}px ${boxShadowColor}`;
        default:
          return "";
      }
    }
  
    function isDarkColor(color: string) {
      const hexColor = color.replace("#", "");
      const red = parseInt(hexColor.substr(0, 2), 16);
      const green = parseInt(hexColor.substr(2, 2), 16);
      const blue = parseInt(hexColor.substr(4, 2), 16);
  
      // Calculate relative luminance (per ITU-R BT.709)
      const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
  
      // Return true if the luminance is below a threshold (e.g., 0.5)
      return luminance < 0.5;
    }
  
    function copyCssCode() {
      const code = generateCSSCode();
      navigator.clipboard.writeText(code).then(() => {
        setButtonText("Copied");
      });
    }


    return (
        <div className="neu-body">
          <MyHelmet
           title="Neumorphic effect generator" 
           des=" Elevate your web design with our Neumorphic Effect Generator tool. Create stunning neumorphic effects for your UI components with ease. Enhance your website's aesthetics and user experience, all for free." 
           keywords="Neumorphic effect generator, Neumorphism, Neumorphic UI components, Web design tool, UI design effects, Neumorphic styling, Free neumorphic effects, User interface enhancements, Neumorphic design trends, Web component styling, Neumorphic shadows, Neumorphic buttons, Neumorphic cards, Neumorphic inputs, UI/UX design, Enhance website aesthetics, Neumorphic design elements, Web design resources, Neumorphic styling tool, Neumorphic generator"
           />
            <div className="neu-left" style={{ backgroundColor }}>
                <div className="n-box1"></div>
                <div className="n-box2"></div>
                <div className="n-box3"></div>
                <div className="neu-box" style={cardStyle}>
                </div>
            </div>
            <div className="neu-right">
            <div className="card-property">
              <label htmlFor="background-color">Background:</label>
              <input
                type="color"
                id="background-color-picker"
                value={backgroundColor}
                onChange={(e) =>
                  handlePropertyChange("backgroundColor", e.target.value)
                }
              />
              <input
                type="text"
                id="background-color"
                value={backgroundColor}
                onChange={(e) =>
                  handlePropertyChange("backgroundColor", e.target.value)
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="box-shadow-color">Box Shadow:</label>
              <input
                type="color"
                id="box-shadow-color-picker"
                value={boxShadowColor}
                onChange={(e) =>
                  handlePropertyChange("boxShadowColor", e.target.value)
                }
              />
              <input
                type="text"
                id="box-shadow-color"
                value={boxShadowColor}
                onChange={(e) =>
                  handlePropertyChange("boxShadowColor", e.target.value)
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="border-radius">Border Radius:</label>
              <input
                type="range"
                id="border-radius"
                min="0"
                max="100"
                value={borderRadius}
                onChange={(e) =>
                  handlePropertyChange("borderRadius", parseInt(e.target.value))
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="distance">Distance:</label>
              <input
                type="range"
                id="distance"
                min="0"
                max="100"
                value={distance}
                onChange={(e) =>
                  handlePropertyChange("distance", parseInt(e.target.value))
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="intensity">Intensity:</label>
              <input
                type="range"
                id="intensity"
                min="0"
                max="100"
                value={intensity}
                onChange={(e) =>
                  handlePropertyChange("intensity", parseInt(e.target.value))
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="blur">Blur:</label>
              <input
                type="range"
                id="blur"
                min="0"
                max="100"
                value={blur}
                onChange={(e) =>
                  handlePropertyChange("blur", parseInt(e.target.value))
                }
              />
            </div>
            <div className="card-property">
              <div className="shape-buttons">
                <button
                  id="concavebtn"
                  className={`shape-button ${
                    shape === "concave" ? "active" : ""
                  }`}
                  onClick={() => handlePropertyChange("shape", "concave")}
                ></button>
                <button
                  id="convexbtn"
                  className={`shape-button ${
                    shape === "convex" ? "active" : ""
                  }`}
                  onClick={() => handlePropertyChange("shape", "convex")}
                ></button>
              </div>
            </div>
            <button id="neu-button" onClick={copyCssCode}>{buttonText}</button>
            </div>
            <Desc flexDirection='row' title={'Create Neumorphic Effect'} desc={'Introducing our incredible tool that enables you to effortlessly create captivating neumorphic effects for your modern designs. Neumorphism is a popular design trend that adds a sleek and realistic 3D-like appearance to user interfaces. With our user-friendly tool, you can easily generate neumorphic elements with soft shadows and subtle highlights, giving your designs a modern and tactile feel. Whether you\'re designing websites, apps, or graphics, our tool empowers you to bring depth and sophistication to your creations. Elevate your designs with the mesmerizing allure of neumorphism and unlock a new level of visual appeal. Explore the endless possibilities and make your designs stand out with this powerful and trendy effect. Don\'t miss out on this opportunity to create stunning neumorphic designs that captivate and impress. Get started now and take your design game to the next level!'}/>
        </div>
    );
}

export default NeuMorphicEffect;