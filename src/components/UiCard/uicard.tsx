import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import "./uicard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, To } from "react-router-dom";

interface UiCardProps {
  data: {
    _id: string;
    htmlcode: string;
    csscode: string;
    jscode: string;
    head: string;
    views: string;
  };
}

const UiCard: React.FC<UiCardProps> = ({ data }) => {
  const { _id, head, htmlcode, csscode, jscode, views } = data;

  const navigate = useNavigate();
  const handleCodeButtonClick = async (link: To) => {
    try {
      const response = await fetch(
        `https://uiboxxapi.netlify.app/.netlify/functions/api/webdata/${_id}`
      );

      if (response.ok) {
        const data = await response.json();
        const currentViews = parseInt(data.views);
        const updatedDesign = { views: String(currentViews + 1) };

        await fetch(
          `https://uiboxxapi.netlify.app/.netlify/functions/api/webdata/${_id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedDesign),
          }
        );
        navigate(link);
        console.log("Updated successfully");
      } else {
        console.error("Failed to fetch views count");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="uicard">
      <div className="u-button">
        <button onClick={() => handleCodeButtonClick(`/code/${_id}`)}>
          Code
        </button>
      </div>
      <iframe
        srcDoc={`
                      <html>
                        <head>
                        <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                        crossorigin="anonymous"
                        referrerpolicy="no-referrer"
                      />
                      ${head ? head : ""}
                          <style>
                          * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                          }
                          body{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 400px;
                            min-width: 320px;
                            background: #ddd;
                            transform: scale(0.7); /* Scales the content down to fit */
                            transform-origin: top left;
                            overflow:hidden;
                          } 
                          ::-webkit-scrollbar {
                            display: none
                          }
                       ${csscode}
                          </style>
                            </head>
                            <body>
                              <script>
                                // Prevent navigation
                                document.addEventListener('click', (event) => {
                                  if (event.target.tagName === 'A') {
                                    event.preventDefault();
                                  }
                                });
                               
                          </script>
                          ${htmlcode}
                          <script> ${jscode}</script>
                        </body>
                      </html>
                    `}
        sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
      />
      <div className="ui-view">
        <i>
          <FontAwesomeIcon
            icon={faChartColumn}
            style={{ backgroundColor: "transparent", color: "red" }}
          />
        </i>
        <span>{views} Views</span>
      </div>
    </div>
  );
};

export default UiCard;
