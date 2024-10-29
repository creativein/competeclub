import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompetitionsPage from './pages/CompetitionsPage';
import CompetitionDetails from './pages/CompetitionDetails';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="min-h-screen">
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/competition/:id" element={<CompetitionDetails />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;