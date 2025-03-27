import React from 'react';

const steps = [
  {
    title: 'Create Your Profile',
    description: 'Sign up and tell us about your interests, skills, and what you hope to learn or teach.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Find Your Match',
    description: 'Our AI system will connect you with compatible partners based on your preferences.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Start Learning',
    description: 'Begin your journey of sharing knowledge and creating meaningful connections.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How GenConnect Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Getting started is easy. Follow these simple steps to begin your journey.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-8">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;