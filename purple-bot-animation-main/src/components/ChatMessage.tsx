
import React from "react";
import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { TypingIndicator } from "./TypingIndicator";

export interface ChatMessageProps {
  message: string;
  isBot: boolean;
  isTyping?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot, isTyping = false }) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-fade-in",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {isBot && (
        <div className="flex-shrink-0 mr-2">
          <div className="w-8 h-8 rounded-full bg-chatbot-purple flex items-center justify-center">
            <Bot size={18} className="text-white" />
          </div>
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl p-3 px-4",
          isBot
            ? "bg-chatbot-bubble-bot text-white rounded-tl-none"
            : "bg-chatbot-bubble-user text-white rounded-tr-none"
        )}
      >
        {isTyping ? <TypingIndicator /> : <p className="break-words">{message}</p>}
      </div>
    </div>
  );
};

export default ChatMessage;
