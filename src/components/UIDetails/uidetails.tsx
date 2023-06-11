import { useEffect, useState } from "react";
import "./uidetails.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UIDetails() {
  const { id } = useParams();
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [copyStatus, setCopyStatus] = useState({
    textarea1: false,
    textarea2: false,
    textarea3: false,
    // textarea4: false
  });

  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>, textareaId: string) => {
    event.preventDefault();
    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
      textarea.setSelectionRange(0, 0); // Remove the selection
      setCopyStatus((prevCopyStatus) => ({
        ...prevCopyStatus,
        [textareaId]: true
      }));
      setTimeout(() => {
        setCopyStatus((prevCopyStatus) => ({
          ...prevCopyStatus,
          [textareaId]: false
        }));
      }, 1500);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://uiboxxapi.netlify.app/.netlify/functions/api/webdata/${id}`);
        const responseData = response.data;
        setTitle(responseData.title);
        setHtmlCode(responseData.htmlcode);
        setCssCode(responseData.csscode);
        setJsCode(responseData.jscode);
        setAuthor(responseData.authorname);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleShare = () => {
    const shareData = {
      title: 'Check out this UI design',
      text: author ? `${title} created by ${author.substring(0, author.indexOf("@"))}` : title,
      url: window.location.href
    };
  
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => {
          console.log('Shared successfully');
        })
        .catch((error) => {
          console.error('Error sharing:', error);
        });
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      const shareUrl = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`;
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          console.log('URL copied to clipboard');
          // Provide feedback to the user that the URL was copied
        })
        .catch((error) => {
          console.error('Error copying URL:', error);
          // Handle the error
        });
    } else {
      console.log('Sharing not supported');
      // Provide a fallback sharing option or message to the user
    }
  };
  
  
  

  return (
    <div className="ui-main">
      <div className="ui-left">
        <span id="ui-title">{title}</span>
        <div className="ui-frame">
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
                      height: 400px;
                      background:#ddd;
                    } 
                    ::-webkit-scrollbar {
                      display: none
                    }
                    ${cssCode}
                  </style>
                </head>
                <body>
                  ${htmlCode}
                  <script>
                    // Prevent navigation
                    document.addEventListener('click', (event) => {
                      if (event.target.tagName === 'A') {
                        event.preventDefault();
                      }
                    });
                  </script>
                  <script>${jsCode}</script>
                </body>
              </html>
            `}
            sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
          />
        </div>
        <h2>Design by: <span id="ui-author">{author ? author.substring(0, author.indexOf("@")) : "Anonymous"}</span></h2>
        <span id="share" onClick={handleShare}>Share <i><FontAwesomeIcon style={{backgroundColor:'transparent'}} icon={faShareFromSquare} /></i></span>
      </div>
      <div className="ui-right">
        <div className="ui-codes">
          <label htmlFor="textarea1">HTML:</label>
          <textarea
            id="textarea1"
            name="textarea1"
            value={htmlCode}
            onChange={(event) => setHtmlCode(event.target.value)}
          />
          <button
            id="copy-button"
            onClick={(event) => handleCopy(event, 'textarea1')}
          >
            {copyStatus.textarea1 ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="ui-codes">
          <label htmlFor="textarea2">CSS:</label>
          <textarea
            id="textarea2"
            name="textarea2"
            value={cssCode}
            onChange={(event) => setCssCode(event.target.value)}
          />
          <button
            id="copy-button"
            onClick={(event) => handleCopy(event, 'textarea2')}
          >
            {copyStatus.textarea2 ? 'Copied!' : 'Copy'}
          </button>
        </div>
        {jsCode &&
          <div className="ui-codes">
            <label htmlFor="textarea3">JavaScript:</label>
            <textarea
              id="textarea3"
              name="textarea3"
              value={jsCode}
              onChange={(event) => setJsCode(event.target.value)}
            />
            <button
              id="copy-button"
              onClick={(event) => handleCopy(event, 'textarea3')}
            >
              {copyStatus.textarea3 ? 'Copied!' : 'Copy'}
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default UIDetails;
