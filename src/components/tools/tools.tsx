import "./tools.css";
import svgShape from '../images/svgShape.png';
import { useNavigate, To } from 'react-router-dom';
import MyHelmet from "../helmet/helmet";
import Lottie from "lottie-react";
import Glass from "../images/glass.json";
import Neu from "../images/neu.json";



function Tools() {
  const navigate = useNavigate();
  const handleClick = (link: To) => {
    navigate(link); // Use the absolute path to navigate to "/tools"
  };

  return (
    <div className="tools-body">
      <MyHelmet title="Tools" des="Explore our collection of free web design tools: SVG Shape Generator, Neumorphic Effect Generator, and Glassmorphic Effect Generator. Create stunning visuals and enhance your website's aesthetic with ease." keywords="SVG Shape Generator,Neumorphic Effect Generator,Glassmorphic Effect Generator,Free web design tools , Visual enhancement, Aesthetic design,Webpage effectsWeb design resources,SVG shapes,Neumorphism,Glassmorphism,Website aesthetics,Design tool collection,Create stunning visuals,User-friendly web design"/>
      <div className="svg-card">
      <img src={svgShape} alt="" />
        <span>SquareCle SVG</span>
        <a onClick={()=>handleClick("/squarecle-svg-shape-generator")}>Generate</a>
      </div>
      <div className="glass-card">
        <div className="lottie-card">
      <Lottie animationData={Glass} loop={true} style={{scale:'1.3'}} />
        </div>
        <span>GlassMorphic Effect</span>
        <a onClick={()=>handleClick("/glass-morphic-effect-generator")}>Generate</a>
      </div>
      <div className="neu-card">
      <div className="lottie-card">
      <Lottie animationData={Neu} loop={true} style={{scale:'0.7'}} />
        </div>        <span>Neumorphic Effect</span>
        <a onClick={()=>handleClick("/neumorphic-effect-generator")}>Generate</a>
      </div>
      <div className="shapes1"></div>
      <div className="shapes2"></div>
      <div className="shapes3"></div>
    </div>
  );
}

export default Tools;
