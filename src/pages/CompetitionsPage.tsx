import React from 'react';
import { Typography, Card, Tag, Input, Select, Empty } from 'antd';
import { Calendar, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Search } = Input;

const competitions = [
  {
    id: 1,
    title: 'Global Innovation Challenge 2024',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
    description: 'Solve real-world problems with innovative solutions',
    prize: '$50,000',
    deadline: 'Apr 30, 2024',
    participants: '1,200+',
    tags: ['Innovation', 'Technology', 'Global'],
    status: 'Active',
  },
  {
    id: 2,
    title: 'Sustainable Cities Hackathon',
    image: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&q=80',
    description: 'Design sustainable solutions for future cities',
    prize: '$30,000',
    deadline: 'May 15, 2024',
    participants: '800+',
    tags: ['Sustainability', 'Urban Planning', 'IoT'],
    status: 'Active',
  },
  {
    id: 3,
    title: 'FinTech Revolution',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    description: 'Transform the future of financial services',
    prize: '$40,000',
    deadline: 'Jun 1, 2024',
    participants: '950+',
    tags: ['FinTech', 'Blockchain', 'AI'],
    status: 'Coming Soon',
  },
];

const CompetitionsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Title level={2}>Explore Competitions</Title>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Search
            placeholder="Search competitions..."
            className="md:w-1/3"
            size="large"
          />
          <Select
            defaultValue="all"
            size="large"
            style={{ minWidth: 200 }}
            options={[
              { value: 'all', label: 'All Categories' },
              { value: 'technology', label: 'Technology' },
              { value: 'sustainability', label: 'Sustainability' },
              { value: 'finance', label: 'Finance' },
            ]}
          />
          <Select
            defaultValue="active"
            size="large"
            style={{ minWidth: 200 }}
            options={[
              { value: 'active', label: 'Active' },
              { value: 'upcoming', label: 'Upcoming' },
              { value: 'past', label: 'Past' },
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((competition) => (
          <Link to={`/competition/${competition.id}`} key={competition.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={competition.title}
                  src={competition.image}
                  className="h-48 object-cover"
                />
              }
              className="h-full"
            >
              <div className="mb-2">
                {competition.tags.map((tag) => (
                  <Tag key={tag} className="mr-1">
                    {tag}
                  </Tag>
                ))}
              </div>
              <Title level={4}>{competition.title}</Title>
              <Paragraph className="text-gray-600 mb-4">
                {competition.description}
              </Paragraph>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <DollarSign size={16} />
                  {competition.prize}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {competition.deadline}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  {competition.participants}
                </div>
              </div>
              <Tag
                color={competition.status === 'Active' ? 'green' : 'blue'}
                className="absolute top-4 right-4"
              >
                {competition.status}
              </Tag>
            </Card>
          </Link>
        ))}
      </div>

      {competitions.length === 0 && (
        <Empty
          description="No competitions found"
          className="my-16"
        />
      )}
    </div>
  );
};

export default CompetitionsPage;