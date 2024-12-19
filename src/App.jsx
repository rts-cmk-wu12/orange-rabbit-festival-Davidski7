import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventSignup from './pages/EventSignup';
import CompletePage from './pages/CompletePage';
import './styles/event-signup.scss';
import './styles/complete-page.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventSignup />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </Router>
  );
};

export default App;
