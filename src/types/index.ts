export type ConversationState = 
  | 'initial' 
  | 'name-question' 
  | 'business-size' 
  | 'project-goal' 
  | 'budget' 
  | 'timeline' 
  | 'contact-info' 
  | 'summary' 
  | 'end';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}