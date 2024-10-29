import React, { useState } from 'react';
import { Typography, Card, Table, Tabs, Tag, Button, Avatar } from 'antd';
import { 
  Users, 
  TrendingUp, 
  Award,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  Settings
} from 'lucide-react';
import TrophyIcon from '../components/TrophyIcon';

const { Title } = Typography;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('1');

  // Registration Data
  const registrationColumns = [
    {
      title: 'Team Name',
      dataIndex: 'teamName',
      key: 'teamName',
      render: (text: string, record: any) => (
        <div className="flex items-center gap-2">
          <Avatar.Group>
            {record.members.map((member: string, index: number) => (
              <Avatar key={index}>{member[0]}</Avatar>
            ))}
          </Avatar.Group>
          <span className="font-medium">{text}</span>
        </div>
      ),
    },
    {
      title: 'Competition',
      dataIndex: 'competition',
      key: 'competition',
    },
    {
      title: 'Registration Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Approved' ? 'green' : status === 'Pending' ? 'gold' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: any) => (
        <div className="flex gap-2">
          <Button
            type="text"
            icon={<CheckCircle className="h-4 w-4 text-green-600" />}
            onClick={() => console.log('Approve', record)}
          />
          <Button
            type="text"
            icon={<XCircle className="h-4 w-4 text-red-600" />}
            onClick={() => console.log('Reject', record)}
          />
          <Button
            type="text"
            icon={<Settings className="h-4 w-4" />}
            onClick={() => console.log('Settings', record)}
          />
        </div>
      ),
    },
  ];

  const registrationData = [
    {
      key: '1',
      teamName: 'Tech Innovators',
      members: ['John Doe', 'Jane Smith', 'Bob Wilson'],
      competition: 'Global Innovation Challenge 2024',
      date: '2024-03-15',
      status: 'Approved',
    },
    {
      key: '2',
      teamName: 'Green Solutions',
      members: ['Alice Brown', 'Charlie Davis'],
      competition: 'Sustainable Cities Hackathon',
      date: '2024-03-14',
      status: 'Pending',
    },
    {
      key: '3',
      teamName: 'FinTech Wizards',
      members: ['Eve Johnson', 'Frank Miller', 'Grace Lee', 'Henry Ford'],
      competition: 'FinTech Revolution',
      date: '2024-03-13',
      status: 'Rejected',
    },
  ];

  // Leaderboard Data
  const leaderboardColumns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      render: (rank: number) => (
        <div className="flex items-center gap-2">
          {rank <= 3 && <TrophyIcon rank={rank} />}
          <span className="font-medium">{rank}</span>
        </div>
      ),
    },
    {
      title: 'Team',
      dataIndex: 'team',
      key: 'team',
      render: (text: string, record: any) => (
        <div className="flex items-center gap-2">
          <Avatar.Group>
            {record.members.map((member: string, index: number) => (
              <Avatar key={index}>{member[0]}</Avatar>
            ))}
          </Avatar.Group>
          <span className="font-medium">{text}</span>
        </div>
      ),
    },
    {
      title: 'Round',
      dataIndex: 'round',
      key: 'round',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      render: (score: number) => (
        <div className="w-32">
          <div className="bg-blue-100 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Completed' ? 'green' : 'blue'}>
          {status}
        </Tag>
      ),
    },
  ];

  const leaderboardData = [
    {
      key: '1',
      rank: 1,
      team: 'Tech Innovators',
      members: ['John D.', 'Jane S.', 'Bob W.'],
      round: 'Final Round',
      score: 95,
      status: 'Completed',
    },
    {
      key: '2',
      rank: 2,
      team: 'Green Solutions',
      members: ['Alice B.', 'Charlie D.'],
      round: 'Final Round',
      score: 88,
      status: 'Completed',
    },
    {
      key: '3',
      rank: 3,
      team: 'FinTech Wizards',
      members: ['Eve J.', 'Frank M.', 'Grace L.'],
      round: 'Final Round',
      score: 82,
      status: 'Completed',
    },
    {
      key: '4',
      rank: 4,
      team: 'Data Miners',
      members: ['David K.', 'Sarah L.'],
      round: 'Final Round',
      score: 78,
      status: 'In Progress',
    },
  ];

  // Stats Cards Data
  const statsCards = [
    {
      title: 'Total Registrations',
      value: '1,234',
      icon: <Users className="h-8 w-8 text-blue-600" />,
      trend: '+12%',
    },
    {
      title: 'Active Competitions',
      value: '8',
      icon: <Award className="h-8 w-8 text-green-600" />,
      trend: '+2',
    },
    {
      title: 'Ongoing Rounds',
      value: '3',
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      trend: '2 ending soon',
    },
    {
      title: 'Total Prize Pool',
      value: '$120,000',
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      trend: '+$20,000',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Title level={2}>Admin Dashboard</Title>
        <Button type="primary" icon={<BarChart3 className="h-4 w-4" />}>
          Generate Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => (
          <Card key={index}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <Tag color="blue" icon={<TrendingUp className="h-3 w-3" />}>
                  {stat.trend}
                </Tag>
              </div>
              {stat.icon}
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Card>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: '1',
              label: 'Registrations',
              children: (
                <Table
                  columns={registrationColumns}
                  dataSource={registrationData}
                  pagination={{ pageSize: 5 }}
                />
              ),
            },
            {
              key: '2',
              label: 'Leaderboard',
              children: (
                <Table
                  columns={leaderboardColumns}
                  dataSource={leaderboardData}
                  pagination={{ pageSize: 5 }}
                />
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default AdminDashboard;