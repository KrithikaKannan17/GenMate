import React from 'react';
import { Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Contact
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="flex justify-center items-center">
            <Users className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">GenConnect</span>
          </div>
          <p className="mt-4 text-center text-base text-gray-400">
            © {new Date().getFullYear()} GenConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;