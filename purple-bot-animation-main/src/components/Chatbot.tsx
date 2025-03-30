
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatContainer from "./ChatContainer";
import ChatInput from "./ChatInput";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

const mockBotResponses = [
  "Hello! I'm your AI assistant. How can I help you today?",
  "That's a great question. Let me think about that for a moment...",
  "I can help you with a wide range of topics. Just let me know what you're interested in.",
  "I'm here to assist with any questions or tasks you might have.",
  "Is there anything specific you'd like to know about this topic?",
];

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      text: "Hi there! I'm your virtual assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const getRandomBotResponse = () => {
    const randomIndex = Math.floor(Math.random() * mockBotResponses.length);
    return mockBotResponses[randomIndex];
  };

  const simulateBotResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate network delay for bot "thinking"
    const typingDelay = 1000 + Math.random() * 2000;
    await new Promise(resolve => setTimeout(resolve, typingDelay));
    
    const botMessage = getRandomBotResponse();
    
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

  const handleSendMessage = (message: string) => {
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
      <div className="bg-chatbot-purple p-4 text-white font-semibold rounded-t-lg">
        <h2>AI Assistant</h2>
      </div>
      
      <ChatContainer messages={messages} isTyping={isTyping} />
      
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default Chatbot;
