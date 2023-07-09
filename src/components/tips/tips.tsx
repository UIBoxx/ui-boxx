import { useState, useEffect } from "react";
import "./tips.css";
import MyLoader from "../loader/loader";
import MyHelmet from "../helmet/helmet";

interface TipsData {
  name: string;
  fimg: string;
  simg: string;
  desc: string;
}

export default function Tips() {
  const [apiData, setApiData] = useState<TipsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://uiboxxapi.netlify.app/.netlify/functions/api/tips"
      );
      const data = await response.json();
      const reversedData = data.reverse();
      setApiData(reversedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="tips-body">
    <MyHelmet title="UI/UX Tips" des="Discover valuable UI/UX design tips and explore essential UX laws to create exceptional user experiences. Enhance your design skills and improve user satisfaction with expert guidance on user interface design, usability principles, interaction design, and more." keywords="UI/UX design, User experience, User interface design, Usability, Interaction design, UX laws, Design principles, User-centric design, Visual hierarchy, Information architecture, Wireframing, Prototyping, Responsive design, Mobile UX, Accessibility, Cognitive load, User testing, Design patterns, Human-computer interaction, Graphic design"/>

      {isLoading ? (
         <MyLoader />
      ) : (
        apiData.map((item) => (
          <div className="tips-card" key={item.name}>
            
            <div className="tips-card-top">
              <div className="tips-left">
                <img src={item.fimg} alt="" />
              </div>
              <div className="tips-right">
                <img src={item.simg} alt="" />
              </div>
            </div>
            <div className="tips-head">
              <h3>{item.name}</h3>
            </div>
            <div className="tips-card-bottom">
              <span>{item.desc}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
