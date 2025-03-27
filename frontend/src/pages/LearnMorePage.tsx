import React from 'react';

const LearnMorePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About GenConnect</h1>
      
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            GenConnect bridges the generational gap by creating meaningful connections between teenagers and seniors. 
            We believe that wisdom flows both ways – seniors share their life experiences and skills, while teens bring 
            fresh perspectives and technological know-how.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">How It Benefits You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">For Teens</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Learn from real-world experience</li>
                <li>Gain valuable life skills</li>
                <li>Build meaningful relationships</li>
                <li>Earn rewards for engagement</li>
                <li>Develop empathy and understanding</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">For Seniors</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Share your wisdom and experiences</li>
                <li>Stay connected with younger generations</li>
                <li>Learn new technologies</li>
                <li>Maintain active social engagement</li>
                <li>Make a lasting impact</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Safety & Trust</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Your safety is our top priority. We implement strict verification processes and safety measures:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Verified profiles with background checks</li>
              <li>Parental consent required for teens</li>
              <li>Monitored interactions</li>
              <li>Secure communication channels</li>
              <li>Regular safety reviews</li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Get Started Today</h2>
          <p className="text-gray-700 mb-6">
            Join our growing community of intergenerational connections. Whether you're a teen looking to learn or 
            a senior ready to share your wisdom, we're here to facilitate meaningful relationships.
          </p>
          <div className="text-center">
            <a
              href="/register"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Join GenConnect
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnMorePage;