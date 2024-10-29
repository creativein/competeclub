import React from 'react';
import { Trophy } from 'lucide-react';

interface TrophyIconProps {
  rank: number;
}

const TrophyIcon = ({ rank }: TrophyIconProps) => {
  const colors = {
    1: 'text-yellow-500',
    2: 'text-gray-400',
    3: 'text-amber-700',
  };

  return <Trophy className={`h-5 w-5 ${colors[rank as keyof typeof colors]}`} />;
};

export default TrophyIcon;