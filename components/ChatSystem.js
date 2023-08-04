```javascript
import React, { useState } from 'react';

const ChatSystem = () => {
  const [chatMessages, setChatMessages] = useState([]);

  const handleChatMessage = (message) => {
    setChatMessages([...chatMessages, message]);
  };

  return (
    <div id="chatSystemId">
      <h2>Chat System</h2>
      <div>
        {chatMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleChatMessage(event.target.value);
            event.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default ChatSystem;
```