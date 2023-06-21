import "./landingpage.css";
import TypingComponent from "../typingEffect/typinig";
import MyHelmet from "../helmet/helmet";
import BuyMeCoffee from "../Buy Me Coffee/support";
import Lottie from "lottie-react";
import Anim from "../images/anim.json";
import Beautify from "../images/beautify.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  return (
    <div className="l-body">
      <BuyMeCoffee />
      <MyHelmet
        title="Home"
        des="Elevate your web design with UIBoxx's free UI components. Create stunning user interfaces effortlessly and customize them to fit your needs. Take advantage of our AI-powered tool for UI generation. Get started now!"
        keywords="UI components,Web design,User interfaces,Customizable UI,Free UI components,Free Website design,AI-powered tools,Neumorphic Design,GlassMorphic Design,free Neumorphic Design tool,free GlassMorphic Design tool,Free SVG shape generator,Web development,UX design,Responsive design,Front-end development,Web templates,Design resources,Website elements,UI design inspiration,CSS frameworks,Mobile-friendly design,HTML5 components,Visual design,Interaction design,Web accessibility."
      />
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
          <a id="l-btn" href="/ui-components">
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
      <div className="l-content">
        <div className="l-content-left">
          <Lottie animationData={Anim} loop={true} style={{ width: "340px"}} />
        </div>
        <div className="l-content-right" id="features">
          <span>
            <i>
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{
                  backgroundColor: "transparent",
                  color: "green",
                  fontSize: "2rem",
                }}
              />
            </i>
            <h2>Fully Customized</h2>
            <p>Unleash your creativity with complete customization options.</p>
          </span>
          <span>
            <i>
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{
                  backgroundColor: "transparent",
                  color: "green",
                  fontSize: "2rem",
                }}
              />
            </i>
            <h2>100% Free</h2>
            <p>Free for personal and commercial use.</p>
          </span>
          <span>
            <i>
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{
                  backgroundColor: "transparent",
                  color: "green",
                  fontSize: "2rem",
                }}
              />
            </i>
            <h2>High Quality</h2>
            <p>Experience top-notch quality that exceeds expectations.</p>
          </span>
        </div>
        <span className="rocket">🚀</span>
      </div>

      <div className="l-content" id="l-content">
        <div className="l-content-right" id="l-content-right">
          <h3>
            "
            <span style={{ color: "red", backgroundColor: "transparent" }}>
              UIBOXX
            </span>
            helps you make your UI more beautiful and improve the overall user
            experience. With their tools and resources, you can create visually
            appealing and user-friendly interfaces that captivate and delight
            your users."
          </h3>
          <a id="l-btn" href="/tools">
            <button>See Tools</button>
          </a>
        </div>
        <div className="l-content-left">
          <Lottie
            animationData={Beautify}
            loop={true}
            style={{ width: "340px", backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
