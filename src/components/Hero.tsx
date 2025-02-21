import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent opacity-40"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-8">
            <span className="text-purple-800 text-sm font-medium">Join our growing community</span>
            <ArrowRight className="w-4 h-4 ml-2 text-purple-800" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
            <span className="block mb-2">Bridging</span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Generations
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Connect, share, and grow together. Create meaningful bonds across generations through mentorship, 
            skill-sharing, and companionship.
          </p>

          <div className="mt-12 max-w-xl mx-auto grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-4">
            <Link
              to="/register"
              className="group relative inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-purple-600 hover:bg-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/learn-more"
              className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-purple-200 text-base font-medium rounded-xl text-purple-600 bg-white hover:bg-purple-50 transition-all duration-200 transform hover:scale-105"
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-soft transition-transform hover:transform hover:scale-105">
              <div className="p-3 bg-purple-100 rounded-full">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Community</h3>
              <p className="mt-2 text-sm text-gray-600">Join a vibrant network of teens and seniors</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-soft transition-transform hover:transform hover:scale-105">
              <div className="p-3 bg-pink-100 rounded-full">
                <Brain className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Learning</h3>
              <p className="mt-2 text-sm text-gray-600">Exchange knowledge and skills</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-soft transition-transform hover:transform hover:scale-105">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Heart className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Connection</h3>
              <p className="mt-2 text-sm text-gray-600">Build meaningful relationships</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;