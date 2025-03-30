
import React from "react";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-chatbot-dark">
      <div className="w-full max-w-2xl h-[600px] bg-background rounded-lg shadow-xl overflow-hidden border border-muted">
        <Chatbot />
      </div>
    </div>
  );
};

export default Index;
