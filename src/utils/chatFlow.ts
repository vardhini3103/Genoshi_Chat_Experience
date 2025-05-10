import { ConversationState } from '../types';

export const getNextBotMessage = (
  state: ConversationState, 
  userInput: string = ''
): string => {
  switch (state) {
    case 'initial':
      return 'Welcome! I\'m here to help you with your project. What can I do for you today?';
    
    case 'name-question':
      return 'Can you tell me your name and a bit about your business and what you\'re looking to build? I\'ll send you a summary by email after.';
    
    case 'business-size':
      return `Thanks, ${userInput.split(' ')[0]}! That's helpful. Roughly how big is your company—like number of employees or team size?`;
    
    case 'project-goal':
      return 'Great to know. What are the main goals you want to achieve with this project?';
    
    case 'budget':
      return 'Understood. Do you have a budget range in mind for this project?';
    
    case 'timeline':
      return 'And what\'s your timeline for getting this launched?';
    
    case 'contact-info':
      return 'Perfect. What\'s the best email address to send your project summary to?';
    
    case 'summary':
      return `Thanks for sharing all this information! I'll send a detailed summary to your email shortly. Is there anything else you'd like to add before we wrap up?`;
    
    case 'end':
      return 'Great chatting with you! Your project sounds exciting. You\'ll receive an email summary shortly, and someone from our team will reach out soon. Have a great day!';
    
    default:
      return 'Is there anything else I can help you with?';
  }
};