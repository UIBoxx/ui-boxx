import "./landingpage.css";
import TypingComponent from "../typingEffect/typinig";
// import MyDemo from "../Demo/demo";
// import demoVid from '../images/demo.mp4'
import MyHelmet from "../helmet/helmet";


function LandingPage() {
  return (
    <div className="l-body">
      <MyHelmet title="Home" des="Elevate your web design with UIBoxx's free UI components. Create stunning user interfaces effortlessly and customize them to fit your needs. Take advantage of our AI-powered tool for UI generation. Get started now!" keywords="UI components,Web design,User interfaces,Customizable UI,Free UI components,Free Website design,AI-powered tools,Neumorphic Design,GlassMorphic Design,free Neumorphic Design tool,free GlassMorphic Design tool,Free SVG shape generator,Web development,UX design,Responsive design,Front-end development,Web templates,Design resources,Website elements,UI design inspiration,CSS frameworks,Mobile-friendly design,HTML5 components,Visual design,Interaction design,Web accessibility."/>
      <div className="l-intro">
        <div className="l-intro-left">
          <h4>#UIBOXX</h4>
          <h2>
            Welcome to the <TypingComponent />
          </h2>
          <p>
            Discover the ultimate destination for customizable UI components and
            modern UI tools. We provide a wide range of cutting-edge design
            resources, including neumorphic and glassmorphic styles. Create
            visually striking and user-friendly interfaces with our collection
            of UI components. Our platform empowers designers, developers, and
            business owners, offering the tools and resources needed to bring
            creative visions to life. Explore our offerings and unlock a world
            of possibilities to elevate your digital projects to new heights.
          </p>
          <a href="/ui-components">
            <button>Explore Now!</button>
          </a>
        </div>
        <div className="l-intro-right">
          <span>U</span>
          <span>I</span>
          <span></span>
          <span className="rocket">🚀</span>
        </div>
      </div>
      {/* <MyDemo title='Watch This' demo={demoVid}/> */}
    </div>
  );
}

export default LandingPage;
