export type RoundType = 'CASE_STUDY' | 'QUIZ' | 'ENGAGEMENT';

export interface Round {
  id: string;
  type: RoundType;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'UPCOMING' | 'ACTIVE' | 'COMPLETED';
  instructions?: string;
}

export interface Competition {
  id: number;
  title: string;
  description: string;
  image: string;
  prize: string;
  deadline: string;
  participants: string;
  tags: string[];
  status: string;
  rounds: Round[];
}