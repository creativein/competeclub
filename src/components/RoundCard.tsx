import React from 'react';
import { Card, Typography, Tag, Button } from 'antd';
import { FileText, HelpCircle, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { Round } from '../types/competition';

const { Title, Paragraph } = Typography;

interface RoundCardProps {
  round: Round;
  onRegister?: () => void;
}

const RoundCard = ({ round, onRegister }: RoundCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'CASE_STUDY':
        return <FileText className="h-5 w-5" />;
      case 'QUIZ':
        return <HelpCircle className="h-5 w-5" />;
      case 'ENGAGEMENT':
        return <MessageCircle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'UPCOMING':
        return 'blue';
      case 'ACTIVE':
        return 'green';
      case 'COMPLETED':
        return 'gray';
      default:
        return 'default';
    }
  };

  return (
    <Card className="h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {getIcon(round.type)}
          <Tag color={getStatusColor(round.status)}>{round.status}</Tag>
        </div>
      </div>
      <Title level={4}>{round.title}</Title>
      <Paragraph className="text-gray-600 mb-4">{round.description}</Paragraph>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <Calendar className="h-4 w-4" />
        <span>{new Date(round.startDate).toLocaleDateString()} - {new Date(round.endDate).toLocaleDateString()}</span>
      </div>
      {round.status === 'UPCOMING' && onRegister && (
        <Button 
          type="primary"
          className="w-full"
          onClick={onRegister}
          icon={<ArrowRight className="h-4 w-4" />}
        >
          Register Now
        </Button>
      )}
    </Card>
  );
};

export default RoundCard;