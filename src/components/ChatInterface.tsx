import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { Message, ConversationState } from '../types';
import { getNextBotMessage } from '../utils/chatFlow';
import { Zap } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [conversationState, setConversationState] = useState<ConversationState>('initial');
  const [isChatStarted, setIsChatStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startChat = () => {
    setIsChatStarted(true);
    setIsThinking(true);
    
    setTimeout(() => {
      const initialMessage = getNextBotMessage(conversationState);
      setMessages([
        {
          id: '1',
          text: initialMessage,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
      setIsThinking(false);
      setConversationState('name-question');
    }, 1000);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsThinking(true);
    
    setTimeout(() => {
      const nextState = getNextConversationState(conversationState);
      const botResponse = getNextBotMessage(nextState, text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsThinking(false);
      setConversationState(nextState);
    }, 1500);
  };

  const getNextConversationState = (currentState: ConversationState): ConversationState => {
    switch (currentState) {
      case 'initial':
        return 'name-question';
      case 'name-question':
        return 'business-size';
      case 'business-size':
        return 'project-goal';
      case 'project-goal':
        return 'budget';
      case 'budget':
        return 'timeline';
      case 'timeline':
        return 'contact-info';
      case 'contact-info':
        return 'summary';
      case 'summary':
        return 'end';
      default:
        return 'end';
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-transparent">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto px-4">
        {!isChatStarted ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
              <Zap size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Welcome to the Voiceflow AI Experience
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-md">
              Discover how intelligent conversations can replace complex forms and enhance user engagement.
            </p>
            <button
              onClick={startChat}
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-purple-800"
            >
              <span className="relative z-10 flex items-center font-medium">
                Start Conversation
                <Zap size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        ) : (
          <ChatMessages messages={messages} isThinking={isThinking} />
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {isChatStarted && (
        <ChatInput onSendMessage={handleSendMessage} isThinking={isThinking} />
      )}
    </div>
  );
};

export default ChatInterface