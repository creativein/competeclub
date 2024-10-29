import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Trophy } from 'lucide-react';

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();

  const items = [
    { key: '/', label: <Link to="/">Home</Link> },
    { key: '/competitions', label: <Link to="/competitions">Competitions</Link> },
    { key: '/admin', label: <Link to="/admin">Admin Dashboard</Link> },
  ];

  return (
    <Header className="bg-white shadow-md px-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <Trophy className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold text-blue-600">CompeteHub</span>
      </Link>
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        className="border-none flex-1 justify-end"
      />
    </Header>
  );
};

export default Navbar;