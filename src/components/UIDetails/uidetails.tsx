import { useEffect, useState } from "react";
import "./uidetails.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyHelmet from "../helmet/helmet";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";



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

  const CustomToast = ({
    closeToast,
    message,
  }: {
    closeToast: () => void;
    message: string;
  }) => (
    <div className="custom-toast">
      <div className="custom-toast-content">{message}</div>
      <button className="custom-toast-close" onClick={closeToast}>
        Close
      </button>
    </div>
  );

  const handleShare = () => {
    const url = window.location.href; // Get the current URL
    navigator.clipboard.writeText(url); // Copy the URL to clipboard
    setCopyStatus(prevCopyStatus => ({
      ...prevCopyStatus,
      url: true,
    }));
    setTimeout(() => {
      setCopyStatus(prevCopyStatus => ({
        ...prevCopyStatus,
        url: false
      }));
    }, 1500);
    toast.success(
      <CustomToast
        message="Link copied !"
        closeToast={toast.dismiss}
      />,
      {
        position: toast.POSITION.TOP_CENTER,
        closeButton: false,
        autoClose: 2000,
      }
    );
  };
  
  
  

  return (
    <div className="ui-main">
      <MyHelmet title={title} des="Enhance your web development projects with our collection of free customizable UI components. From cards and inputs to loaders and backgrounds, our UI components are designed to elevate your website's aesthetics and functionality to the next level." keywords={"Free UI components, Customizable UI elements, Web development resources, Card components, Input components, Text components, Loader components, Background components, Form components, Spinner components, Box components, Switch components, Button components, Icon components, Navbar components, Web design elements, User interface enhancements, Website functionality, UI customization options, Front-end development tools, " +title}/>
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
      <ToastContainer
        style={{ backgroundColor: "transparent", color: "#ddd" }}
      />
    </div>
  );
}

export default UIDetails;
