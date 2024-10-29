import React from 'react';
import { Button, Typography, Card } from 'antd';
import { ArrowRight, Award, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[600px] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <Title level={1} className="text-white text-5xl mb-6">
            Unleash Your Potential
          </Title>
          <Paragraph className="text-xl mb-8 text-gray-200">
            Join the most exciting competitions and hackathons. Showcase your skills,
            win prizes, and connect with industry leaders.
          </Paragraph>
          <Link to="/competitions">
            <Button type="primary" size="large" className="bg-blue-600">
              Explore Competitions
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Title level={2} className="text-center mb-12">
          Why Choose CompeteHub?
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <Award size={48} className="mx-auto mb-4 text-blue-600" />
            <Title level={4}>Premium Competitions</Title>
            <Paragraph className="text-gray-600">
              Participate in high-quality competitions curated by industry experts
            </Paragraph>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <Users size={48} className="mx-auto mb-4 text-blue-600" />
            <Title level={4}>Global Community</Title>
            <Paragraph className="text-gray-600">
              Connect with participants and mentors from around the world
            </Paragraph>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <Zap size={48} className="mx-auto mb-4 text-blue-600" />
            <Title level={4}>Real-world Impact</Title>
            <Paragraph className="text-gray-600">
              Work on challenges that matter and make a difference
            </Paragraph>
          </Card>
        </div>
      </div>

      {/* Featured Competition */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Title level={2} className="text-center mb-12">
            Featured Competition
          </Title>
          <Card className="flex flex-col md:flex-row overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              alt="Featured Competition"
              className="w-full md:w-1/2 h-64 md:h-auto object-cover"
            />
            <div className="p-8">
              <Title level={3}>Global Innovation Challenge 2024</Title>
              <Paragraph className="text-gray-600 mb-4">
                Join the world's largest innovation competition and showcase your
                solutions to real-world problems. Win up to $50,000 in prizes!
              </Paragraph>
              <Link to="/competition/1">
                <Button type="primary" className="bg-blue-600">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;