import { useState } from 'react';
import './uizen.css';
import MyLoader from '../loader/loader';
import demoVid from '../images/demo.mp4'
import MyDemo from '../Demo/demo';
import MyHelmet from '../helmet/helmet';

function UIGenerate() {
  const [message, setMessage] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleSubmit = () => {
    if (message.trim() !== '') {
      fetchData();
    } else {
      setGeneratedCode('');
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const appendedText = 'write just html/css code in a single index.html file.';

      const response = await fetch(`https://heypro.onrender.com/generate-code?prompt=${encodeURIComponent(message + ' ' + appendedText)}`);
      if (response.ok) {
        const data = await response.json();

        if ('gen_code' in data) {
          const generated_text = data.gen_code;
          setGeneratedCode(generated_text);
        } else {
          setGeneratedCode('');
        }
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setIsLoading(false);
  };

  const handleCopyCode = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode)
        .then(() => {
          setCopyButtonText('Code Copied');
          setTimeout(() => {
            setCopyButtonText('Copy Code');
          }, 2000);
        })
        .catch((error) => {
          console.error('Failed to copy code:', error);
        });
    }
  };

  return (
    <div className="gen-ui-body">
      <MyHelmet
        title="Generate UI Components"
        des="Discover our AI-powered UI Components Generator tool that creates custom web UI components based on your prompts. Unlock endless design possibilities and streamline your web development process with ease."
        keywords="AI-powered UI components generator, Custom web UI components, Web development tool, UI design automation, Prompt-based UI component generation, AI-driven UI components, Design automation tool, Web UI generation, AI-based web components, Customizable UI elements, Streamlined web development, Efficient UI component creation, Design possibilities, AI-driven design tool, Web UI generator, Smart UI components, AI-assisted web design, User prompt-based UI generation, Automated UI components, Enhance web development workflow"
      />
      <div className="prompt-example">
        <h2>Example:</h2>
        <span>Make a beautiful login page of background #ddd and shadow effect.</span>
        <span>Make a button with background color red and when I hover on it, change into green background.</span>
      </div>
      <div className="main">
      <div className="gen-head">
        <textarea
          placeholder="Type your prompt here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Generate</button>
        {generatedCode ? (
          <button id="copy-gen-code" onClick={handleCopyCode}>
            {copyButtonText}
          </button>
        ) : null}
      </div>

      {generatedCode ||  isLoading?
        <div className="gen-content">
        {isLoading ? (
          <MyLoader />
        ) : generatedCode ? (
          <iframe srcDoc={generatedCode}></iframe>
        ) : (
          <p></p>
        )}
      </div>: null
      }
      </div>
      <MyDemo title='Watch Demo' demo={demoVid}/>
    </div>
  );
}

export default UIGenerate;
