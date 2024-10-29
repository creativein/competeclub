import React from 'react';
import { Layout } from 'antd';
import { Github, Linkedin, Twitter } from 'lucide-react';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="bg-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">CompeteHub</h3>
          <p className="text-gray-400">
            Empowering innovation through competitions and hackathons.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <Github className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;