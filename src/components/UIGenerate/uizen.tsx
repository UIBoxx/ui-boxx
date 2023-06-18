import { useState } from 'react';
import './uizen.css';
import MyLoader from '../loader/loader';
import demo from '../images/demo.mp4'

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

      // const response = await fetch(`https://heypro.onrender.com/generate-code?prompt=${encodeURIComponent(message)}`);
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
      <div className="gen-top">
        <span>Shape your Imagination</span>
        <span>With</span>
        <span> Simple Prompts..</span>
        <span>#web #UI #HTML/CSS</span>
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
      </div>:null
      }
      </div>
      <div className="demo">
        <h2>Watch Demo</h2>
      <video controls>
  <source src={demo} type="video/mp4"/>
  Your browser does not support the video tag.
</video>
      </div>
    </div>
  );
}

export default UIGenerate;
