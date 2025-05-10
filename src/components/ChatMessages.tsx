import React from 'react';
import { Message } from '../types';
import ThinkingIndicator from './ThinkingIndicator';
import { AnimatePresence, motion } from 'framer-motion';

interface ChatMessagesProps {
  messages: Message[];
  isThinking: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isThinking }) => {
  return (
    <div className="py-4 space-y-4">
      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl backdrop-blur-sm ${
                message.sender === 'user'
                  ? 'bg-blue-500/80 text-white rounded-br-none'
                  : 'bg-white/10 text-white rounded-bl-none'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.text}</p>
            </div>
          </motion.div>
        ))}
        
        {isThinking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-start"
          >
            <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm text-white rounded-bl-none">
              <ThinkingIndicator />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatMessages;