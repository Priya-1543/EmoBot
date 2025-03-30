
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "./ChatMessage";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

interface ChatContainerProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages, isTyping }) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <ScrollArea className="flex-1 px-4 py-4 scrollbar-thin">
      <div className="space-y-4 mb-2">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg.text} isBot={msg.isBot} />
        ))}
        {isTyping && <ChatMessage message="" isBot={true} isTyping={true} />}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default ChatContainer;
