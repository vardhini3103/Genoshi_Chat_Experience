import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isThinking: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isThinking }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isThinking && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isThinking]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isThinking) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="border-t border-white/10 px-6 py-4 bg-white/5">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type here..."
          disabled={isThinking}
          className={`flex-1 py-3 px-4 bg-white/10 text-white placeholder-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 ${
            isThinking ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isThinking}
          className={`ml-3 p-3 rounded-xl transition-all duration-200 ${
            !inputValue.trim() || isThinking
              ? 'bg-white/10 text-white/40 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
          }`}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;