import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import './index.css';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#2563eb',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </StrictMode>
  );
}