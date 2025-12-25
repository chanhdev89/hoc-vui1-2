
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export type SubjectType = 
  | 'math-basic' 
  | 'math-logic' 
  | 'vietnamese' 
  | 'reading' 
  | 'spelling' 
  | 'english' 
  | 'science-society' 
  | 'fun-science' 
  | 'life-skills' 
  | 'morals' 
  | 'music' 
  | 'art' 
  | 'iq';

export interface SubjectInfo {
  id: SubjectType;
  title: string;
  description: string;
  color: string;
  icon: string;
}

export interface User {
  name: string;
}

export interface ScoreRecord {
  id: string;
  userName: string;
  subjectTitle: string;
  score: number;
  total: number;
  date: string;
  type: 'quiz' | 'game';
}
