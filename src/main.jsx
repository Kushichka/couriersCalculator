import React from 'react';
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import { theme } from './styles/theme.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
