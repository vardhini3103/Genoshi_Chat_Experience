import React from 'react';
import { CircleUser, Zap } from 'lucide-react';

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-400">
          <Zap size={20} />
        </div>
        <div className="ml-3">
          <h2 className="text-lg font-semibold text-white">Voiceflow Assistant</h2>
          <div className="flex items-center">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-sm text-white/60 ml-2">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader