
import React, { useState, useRef, useEffect } from "react";
import { copy } from "clipboard";
import './svgShapeGen.css';

function SvgShapeGen() {
  const [rotation, setRotation] = useState(30);
  const [curvature, setCurvature] = useState(10);
  const [fillColor, setFillColor] = useState("#108433");
  const [scale, setScale] = useState(50);
  const [svgCode, setSvgCode] = useState("");
  const [buttonText, setButtonText] = useState("Copy SVG Code");

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    svgRef.current = document.getElementById(
      "shape-svg"
    ) as unknown as SVGSVGElement;
    generateSvgCode();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotation, curvature, fillColor, scale]);

  useEffect(() => {
    let timeoutId: number | undefined;
    if (buttonText === "Copied") {
      timeoutId = setTimeout(() => {
        setButtonText("Copy SVG Code");
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [buttonText]);

  const handleRotationChange = (e: { target: { value: string } }) => {
    setRotation(parseInt(e.target.value));
  };

  const handleCurvatureChange = (e: { target: { value: string } }) => {
    setCurvature(parseInt(e.target.value));
  };

  const handleFillColorChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFillColor(e.target.value);
  };

  const handleScaleChange = (e: { target: { value: string } }) => {
    setScale(parseFloat(e.target.value));
  };

  function copySvgCode() {
    copy(svgCode);
    setButtonText("Copied");
  }

  function generateSvgCode() {
    const code = `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="
          M 0, ${scale}
          C 0, ${curvature} ${curvature}, 0 ${scale}, 0
          S ${scale + scale}, ${curvature} ${scale + scale}, ${scale}
          ${scale + scale - curvature}, ${scale + scale} ${scale}, ${
      scale + scale
    }
          0, ${scale + scale - curvature} 0, ${scale}
        " fill="${fillColor}" transform="rotate(${rotation}, 100, 100) translate(${
      100 - scale
    }, ${100 - scale})"></path>
      </svg>
    `;

    setSvgCode(code);
  }

  return (
    <div className="svg-body">
      <div className="svg-left">
        <div className="svg-card-1"></div>
        <div className="svg-card-2">
        </div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d={`
                 M 0, ${scale}
                 C 0, ${curvature} ${curvature}, 0 ${scale}, 0
                 S ${scale + scale}, ${curvature} ${scale + scale}, ${scale}
                     ${scale + scale - curvature}, ${scale + scale} ${scale}, ${
                scale + scale
              }
                     0, ${scale + scale - curvature} 0, ${scale}
             `}
              fill={fillColor}
              transform={`rotate(
                ${rotation},
                 100,
                 100
             ) translate(
                ${100 - scale},
                ${100 - scale}
            )`}
            ></path>
          </svg>
      </div>
      <div className="svg-right">
        <div className="svg-control-group">
          <label htmlFor="rotation">Rotation:</label>
          <input
            type="range"
            id="rotation"
            min="-45"
            max="45"
            value={rotation}
            onChange={handleRotationChange}
          />
        </div>
        <div className="svg-control-group">
          <label htmlFor="curvature">Curvature:</label>
          <input
            type="range"
            id="curvature"
            min="0"
            max="100"
            value={curvature}
            onChange={handleCurvatureChange}
          />
        </div>
        <div className="svg-control-group">
          <label htmlFor="scale">Scale:</label>
          <input
            type="range"
            id="scale"
            min="0"
            max="100"
            value={scale}
            onChange={handleScaleChange}
          />
        </div>
        <div className="svg-control-group">
          <label htmlFor="fill-color">Fill Color:</label>
          <input
            type="color"
            id="fill-color"
            value={fillColor}
            onChange={handleFillColorChange}
          />
          <input
            type="text"
            id="fill-color"
            value={fillColor}
            onChange={handleFillColorChange}
          />
        </div>
        <button onClick={copySvgCode}>{buttonText}</button>
      </div>
    </div>
  );
}

export default SvgShapeGen;
