import axios from 'axios';
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatContainer from "./ChatContainer";
import ChatInput from "./ChatInput";
import { WifiHigh } from "lucide-react";

const mockBotResponses = [
  "Hello! I'm EmoBot, your emotional AI assistant. How can I help you today?",
  "That's a great question. Let me think about that for a moment...",
  "I can help you with a wide range of topics. Just let me know what you're interested in.",
  "I'm here to assist with any questions or tasks you might have.",
  "Is there anything specific you'd like to know about this topic?",
];

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      text: "Hi there! I'm EmoBot, your emotional assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const getRandomBotResponse = () => {
    const randomIndex = Math.floor(Math.random() * mockBotResponses.length);
    return mockBotResponses[randomIndex];
  };

  const simulateBotResponse = async (userMessage) => {
    setIsTyping(true);

    // Simulate network delay for bot "thinking"
    // const typingDelay = 1000 + Math.random() * 2000;
    // await new Promise(resolve => setTimeout(resolve, typingDelay));

    // const botMessage = getRandomBotResponse();

    let botMessage = "Sorry the server is down :(" ;

    const serverResponse = await axios.request("http://localhost:4001/bot", {
      params: { message: userMessage } 
    });

    if(serverResponse.status===200){
      botMessage = serverResponse.data.message; 
    }else botMessage = serverResponse.error; 

    setMessages(prev => [
      ...prev,
      {
        id: uuidv4(),
        text: botMessage,
        isBot: true,
      },
    ]);

    setIsTyping(false);
  };

  const handleSendMessage = (message) => {
    const newMessage = {
      id: uuidv4(),
      text: message,
      isBot: false,
    };

    setMessages(prev => [...prev, newMessage]);
    simulateBotResponse(message);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-chatbot-purple p-4 text-white font-semibold rounded-t-lg flex items-center justify-between">
        <h2 className="text-lg">EmoBot</h2>
        <div className="flex items-center text-sm">
          <WifiHigh className="h-4 w-4 mr-1 text-green-400" />
          <span className="text-green-400">Online</span>
        </div>
      </div>

      <ChatContainer messages={messages} isTyping={isTyping} />

      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default Chatbot;
