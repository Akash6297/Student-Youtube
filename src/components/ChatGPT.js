// ChatGPT.js
import React, { useState } from 'react';
import '../css/chatgpt.css';

const ChatGPT = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendClick = () => {
    if (userInput.trim() === '') return;

    // Add user message to the chat history
    setChatHistory([...chatHistory, { text: userInput, isUser: true }]);
    setUserInput('');

    // Simulate a response from ChatGPT (you can replace this with actual integration)
    setTimeout(() => {
      const response = 'This is a sample response from ChatGPT.';
      setChatHistory([...chatHistory, { text: response, isUser: false }]);
    }, 1000); // Simulating a 1-second delay for the response
  };

  return (
    <div className="chatgpt">
      <div className="chat-window">
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.isUser ? 'user-message' : 'gpt-message'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={userInput}
            onChange={handleInputChange}
          />
          <button onClick={handleSendClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatGPT;
