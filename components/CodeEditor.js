```javascript
import React, { useState } from 'react';

const CodeEditor = () => {
  const [codeSnippets, setCodeSnippets] = useState('');

  const handleCodeChange = (event) => {
    setCodeSnippets(event.target.value);
  };

  return (
    <div id="codeEditor">
      <textarea
        value={codeSnippets}
        onChange={handleCodeChange}
        style={{ width: '100%', height: '400px' }}
      />
    </div>
  );
};

export default CodeEditor;
```