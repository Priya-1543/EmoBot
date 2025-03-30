
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

const ChatInput = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex w-full gap-2 p-4 border-t border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        disabled={disabled}
        className="flex-1 border-chatbot-purple/30 focus:border-chatbot-purple bg-muted"
      />
      <Button 
        onClick={handleSendMessage} 
        disabled={disabled || !message.trim()}
        className="bg-chatbot-purple hover:bg-chatbot-purple-dark transition-colors"
      >
        <SendIcon size={18} />
      </Button>
    </div>
  );
};

export default ChatInput;
