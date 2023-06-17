import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainContent from "./components/main/mainContent";
import UIDetails from "./components/UIDetails/uidetails";
import MyNavBar from "./components/navbar/navbar";
import MyFooter from "./components/footer/footer";
import Tools from "./components/tools/tools";
import GlassMorphicEffect from "./components/GlassMorphic/glassmorphic";
import NeuMorphicEffect from "./components/NeuMorphic/neumorphic";
import SvgShapeGen from "./components/SVGShapeGen/svgShapeGen";
import LandingPage from "./components/LandingPage/landingpage";
import TypingEffect from "./components/typingEffect/typinig";
import ContactUs from "./components/contact/contact";
import UIGenerate from "./components/Tutorials/uizen";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="app">
        <MyNavBar />
        <body>
          <Routes>
            <Route
              path="/"
              element={
                  <LandingPage />
              }
            />
            <Route path="/tools" element={<Tools />} />
            <Route path="/code/:id" element={<UIDetails />} />
            <Route path="/ui-components" element={<MainContent />} />
            <Route
              path="/glass-morphic-effect-generator"
              element={<GlassMorphicEffect />}
            />
            <Route
              path="/neumorphic-effect-generator"
              element={<NeuMorphicEffect />}
            />
            <Route
              path="/squarecle-svg-shape-generator"
              element={<SvgShapeGen />}
            />
            <Route path="/type" element={<TypingEffect />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/generate" element={<UIGenerate />} />
          </Routes>
        </body>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
