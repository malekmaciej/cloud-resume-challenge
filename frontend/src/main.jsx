import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/stylesheets/styles.css';
import Layout from './Layout.jsx';
import ResumePage from './pages/ResumePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  </BrowserRouter>
);
