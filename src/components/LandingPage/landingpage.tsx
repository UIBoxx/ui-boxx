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
          <Lottie animationData={Anim} loop={true} style={{ width: "340px" }} />
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
          <span>
            <svg
              id="visual"
              viewBox="0 0 580 580"
              width="580"
              height="580"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <rect x="0" y="0" width="900" height="600" fill="#001122"></rect>
              <g transform="translate(300.22360293902625 162.21136516438662)">
                <path
                  d="M97.7 -129.9C129.9 -131.4 161.4 -109.7 219.2 -73.6C277 -37.4 361.2 13.3 345.7 42.4C330.2 71.5 215 79 161.3 138.3C107.6 197.7 115.5 309 78.4 364.3C41.3 419.6 -40.8 419 -79.1 364.3C-117.4 309.7 -112 201 -134.7 137.5C-157.5 74 -208.4 55.6 -230.1 22.2C-251.7 -11.1 -244.1 -59.6 -206 -73.7C-167.8 -87.8 -99.1 -67.6 -59.7 -62.7C-20.3 -57.9 -10.1 -68.4 11.3 -86.1C32.8 -103.7 65.6 -128.4 97.7 -129.9"
                  fill="none"
                  stroke="rgb(159, 7, 7)"
                  stroke-width="20"
                ></path>
              </g>
            </svg>
          </span>
        </div>
        <span className="rocket">🚀</span>
      </div>

      <div className="l-content" id="l-content">
        <div className="l-content-right" id="l-content-right">
          <h3>
            "
            <span style={{ color: "rgb(159, 7, 7)", backgroundColor: "transparent" }}>
            UIBOXX &nbsp;
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
