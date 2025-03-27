import React from 'react';
import { Users, Heart, Book, Award, MessageCircle, Video } from 'lucide-react';

const features = [
  {
    name: 'Smart Matching',
    description: 'AI-powered system connects teens and seniors based on shared interests and skills.',
    icon: Users,
  },
  {
    name: 'Virtual & In-Person',
    description: 'Choose between online meetings or face-to-face interactions.',
    icon: Video,
  },
  {
    name: 'Skill Exchange',
    description: 'Share knowledge and learn from each other in a collaborative environment.',
    icon: Book,
  },
  {
    name: 'Companionship',
    description: 'Build meaningful relationships while earning rewards for spending quality time.',
    icon: Heart,
  },
  {
    name: 'Community Forum',
    description: 'Join discussions, share stories, and participate in group activities.',
    icon: MessageCircle,
  },
  {
    name: 'Achievement System',
    description: 'Earn badges and recognition for your contributions and growth.',
    icon: Award,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Connect, Learn, and Grow Together
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover the features that make GenConnect the perfect platform for intergenerational connections.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;