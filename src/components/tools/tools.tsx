import "./tools.css";
import svgShape from '../images/svgShape.png';

function Tools() {
  return (
    <div className="tools-body">
      <div className="svg-card">
      <img src={svgShape} alt="" />
        <span>SquareCle SVG</span>
        <a href="/squarecle-svg-shape-generator">Generate</a>
      </div>
      <div className="glass-card">
      <img src='https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/93333/image-upload/glassmorphism_app_ui.jpg' alt="" />
        <span>GlassMorphic Effect</span>
        <a href="/glassmorphic-effect-generator">Create</a>
      </div>
      <div className="neu-card">
        <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/36518/image-upload/soft-ui.jpg" alt="" />
        <span>Neumorphic Effect</span>
        <a href="/neumorphic-effect-generator">Create</a>
      </div>
      <div className="shapes1"></div>
      <div className="shapes2"></div>
      <div className="shapes3"></div>
    </div>
  );
}

export default Tools;