import React, { useState } from 'react';

type UserType = 'teen' | 'senior' | null;

const RegisterPage = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    interests: '',
    experience: '',
    expectations: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Thank You!</h2>
          <p className="text-xl text-gray-700">Your registration has been submitted successfully.</p>
          <p className="text-lg text-gray-600 mt-2">We will contact you soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {!userType ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">I am a...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setUserType('teen')}
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Teenager</h3>
              <p className="text-gray-600">I want to learn from experienced seniors and share my knowledge</p>
            </button>
            <button
              onClick={() => setUserType('senior')}
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Senior</h3>
              <p className="text-gray-600">I want to share my experience and connect with younger generations</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {userType === 'teen' ? 'Teen Registration' : 'Senior Registration'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What are your interests? (e.g., gardening, technology, cooking)
              </label>
              <textarea
                name="interests"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                rows={3}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {userType === 'teen'
                  ? 'What skills would you like to learn?'
                  : 'What experiences would you like to share?'}
              </label>
              <textarea
                name="experience"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                rows={3}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What do you hope to gain from this experience?
              </label>
              <textarea
                name="expectations"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                rows={3}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setUserType(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;