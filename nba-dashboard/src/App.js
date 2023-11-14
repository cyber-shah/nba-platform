import React, { useState } from 'react';
import { echoText } from './api';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEcho = async () => {
    const echoedText = await echoText(inputText);
    setResult(echoedText);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleEcho}>Echo</button>
      <div>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}

export default App;

