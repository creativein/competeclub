import React, { useState } from 'react';
import { Typography, Button, Tabs, Timeline, Card, Tag, Statistic, Modal } from 'antd';
import {
  Calendar,
  DollarSign,
  Users,
  Trophy,
  Clock,
  Target,
  CheckCircle,
  FileText,
  Award,
} from 'lucide-react';
import RoundCard from '../components/RoundCard';
import RegistrationForm from '../components/RegistrationForm';
import { Round } from '../types/competition';

const { Title, Paragraph } = Typography;

const CompetitionDetails = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  // Example rounds data
  const rounds: Round[] = [
    {
      id: '1',
      type: 'CASE_STUDY',
      title: 'Problem Analysis',
      description: 'Analyze the given case study and provide innovative solutions.',
      startDate: '2024-05-01',
      endDate: '2024-05-15',
      status: 'UPCOMING',
      instructions: 'Detailed instructions for case study analysis...',
    },
    {
      id: '2',
      type: 'QUIZ',
      title: 'Technical Assessment',
      description: 'Test your knowledge with our technical quiz.',
      startDate: '2024-05-16',
      endDate: '2024-05-20',
      status: 'UPCOMING',
    },
    {
      id: '3',
      type: 'ENGAGEMENT',
      title: 'Community Engagement',
      description: 'Engage with the community and share your insights.',
      startDate: '2024-05-21',
      endDate: '2024-05-30',
      status: 'UPCOMING',
    },
  ];

  const handleRegistration = (values: any) => {
    console.log('Registration values:', values);
    setIsRegistrationModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
          alt="Competition Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-4xl mx-auto px-8 text-white">
            <Title level={1} className="text-white mb-4">
              Global Innovation Challenge 2024
            </Title>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Innovation', 'Technology', 'Global'].map((tag) => (
                <Tag key={tag} className="text-white border-white">
                  {tag}
                </Tag>
              ))}
            </div>
            <Button 
              type="primary" 
              size="large" 
              className="bg-blue-600"
              onClick={() => setIsRegistrationModalOpen(true)}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <Statistic
            title="Prize Pool"
            value="$50,000"
            prefix={<DollarSign className="text-blue-600" />}
          />
        </Card>
        <Card>
          <Statistic
            title="Registration Deadline"
            value="Apr 30, 2024"
            prefix={<Calendar className="text-blue-600" />}
          />
        </Card>
        <Card>
          <Statistic
            title="Participants"
            value="1,200+"
            prefix={<Users className="text-blue-600" />}
          />
        </Card>
        <Card>
          <Statistic
            title="Time Remaining"
            value="30 Days"
            prefix={<Clock className="text-blue-600" />}
          />
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs
            items={[
              {
                key: '1',
                label: 'Overview',
                children: (
                  <div className="space-y-6">
                    <div>
                      <Title level={3}>About the Challenge</Title>
                      <Paragraph>
                        Join the world's largest innovation competition and showcase your
                        solutions to real-world problems. This year's challenge focuses on
                        developing breakthrough technologies that address critical global
                        challenges in healthcare, climate change, and education.
                      </Paragraph>
                    </div>
                    <div>
                      <Title level={3}>Competition Rounds</Title>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {rounds.map((round) => (
                          <RoundCard
                            key={round.id}
                            round={round}
                            onRegister={() => setIsRegistrationModalOpen(true)}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <Title level={3}>Prizes</Title>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Trophy className="text-yellow-500 h-8 w-8" />
                          <div>
                            <div className="font-semibold">First Prize</div>
                            <div className="text-gray-600">$25,000</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Trophy className="text-gray-400 h-8 w-8" />
                          <div>
                            <div className="font-semibold">Second Prize</div>
                            <div className="text-gray-600">$15,000</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Trophy className="text-amber-700 h-8 w-8" />
                          <div>
                            <div className="font-semibold">Third Prize</div>
                            <div className="text-gray-600">$10,000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                key: '2',
                label: 'Timeline',
                children: (
                  <Timeline
                    items={[
                      {
                        dot: <CheckCircle className="text-green-500" />,
                        children: (
                          <>
                            <div className="font-semibold">Registration Opens</div>
                            <div className="text-gray-600">March 1, 2024</div>
                          </>
                        ),
                      },
                      {
                        dot: <Target className="text-blue-500" />,
                        children: (
                          <>
                            <div className="font-semibold">Registration Closes</div>
                            <div className="text-gray-600">April 30, 2024</div>
                          </>
                        ),
                      },
                      {
                        dot: <FileText className="text-purple-500" />,
                        children: (
                          <>
                            <div className="font-semibold">Submission Deadline</div>
                            <div className="text-gray-600">May 15, 2024</div>
                          </>
                        ),
                      },
                      {
                        dot: <Award className="text-yellow-500" />,
                        children: (
                          <>
                            <div className="font-semibold">Winners Announced</div>
                            <div className="text-gray-600">June 1, 2024</div>
                          </>
                        ),
                      },
                    ]}
                  />
                ),
              },
              {
                key: '3',
                label: 'Rules',
                children: (
                  <div className="space-y-4">
                    <Title level={3}>Competition Rules</Title>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Teams must consist of 2-5 members</li>
                      <li>All team members must be 18 years or older</li>
                      <li>Solutions must be original and not previously published</li>
                      <li>Multiple submissions are not allowed</li>
                      <li>All code must be open source</li>
                      <li>Judges' decisions are final</li>
                    </ul>
                  </div>
                ),
              },
            ]}
          />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card title="Important Dates" className="text-sm">
            <Timeline
              items={[
                {
                  children: (
                    <>
                      <div className="font-semibold">Registration Deadline</div>
                      <div className="text-gray-600">April 30, 2024</div>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <div className="font-semibold">Project Submission</div>
                      <div className="text-gray-600">May 15, 2024</div>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <div className="font-semibold">Winners Announced</div>
                      <div className="text-gray-600">June 1, 2024</div>
                    </>
                  ),
                },
              ]}
            />
          </Card>

          <Card title="Resources">
            <div className="space-y-4">
              <Button block>Download Brief</Button>
              <Button block>Submission Guidelines</Button>
              <Button block>FAQs</Button>
              <Button block>Contact Support</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Registration Modal */}
      <Modal
        title="Competition Registration"
        open={isRegistrationModalOpen}
        onCancel={() => setIsRegistrationModalOpen(false)}
        footer={null}
        width={800}
      >
        <RegistrationForm
          competitionId="1"
          onSubmit={handleRegistration}
        />
      </Modal>
    </div>
  );
};

export default CompetitionDetails;