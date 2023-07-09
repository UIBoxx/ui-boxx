import { useState, useEffect } from "react";
import "./tips.css";
import MyLoader from "../loader/loader";

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
