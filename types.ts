export enum TabDifficulty {
  EASY = '초급',
  INTERMEDIATE = '중급',
  ADVANCED = '고급'
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  date: string;
  category: string;
}

export interface TabItem {
  id: string;
  title: string;
  artist: string;
  difficulty: TabDifficulty;
  price: number;
  previewUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}