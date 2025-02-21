import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LearnMorePage from './pages/LearnMorePage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center group">
              <Users className="h-8 w-8 text-purple-600 transition-transform group-hover:scale-110" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                GenConnect
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How it Works</a>
              <Link
                to="/register"
                className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
      </Routes>
    </div>
  );
}

export default App;