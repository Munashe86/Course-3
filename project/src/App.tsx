import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AIBackground } from './components/background/AIBackground';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-space relative">
        <AIBackground />
        <div className="relative z-10">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;