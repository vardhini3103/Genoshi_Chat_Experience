import React from 'react';
import ChatInterface from './components/ChatInterface';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <ChatInterface />
      </div>
    </div>
  );
}

export default App;