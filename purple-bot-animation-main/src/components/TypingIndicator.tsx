
import React from "react";

export const TypingIndicator = () => {
  return (
    <div className="flex space-x-2 h-6 items-center">
      <div className="w-2 h-2 rounded-full bg-gray-300 animate-typing-dot-1"></div>
      <div className="w-2 h-2 rounded-full bg-gray-300 animate-typing-dot-2"></div>
      <div className="w-2 h-2 rounded-full bg-gray-300 animate-typing-dot-3"></div>
    </div>
  );
};
