import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you for your message. We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('There was an error. Please try again.');
      }
    } catch (error) {
      setStatus('There was an error. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Providers>
      <Navbar />
      
      <div className="w-full mt-8 max-w-4xl bg-white shadow-md rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/2 p-6 bg-blue-600 text-white">
          <h2 className="text-3xl font-bold mb-8">Get in touch directly</h2>
          <p className="mb-8">Send an email using this form and we will get back to you with more details!</p>
          <p className="mb-2">We are always happy to receive new inquiries, ideas or questions no matter who you are or your background.</p>
          
        </div>
        <div className="md:w-1/2 p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Name*:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email*:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message*:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            {status && <p className="mt-4 text-center">{status}</p>}
          </form>
        </div>
      </div>
      <p className="mt-8 mx-4 text-center">hello@fleetm8.se</p>
      <p className="text-center" >Stockholm</p>
      <p className="text-center">© 2022</p>
      </Providers>
    </div>
  );
};

export default Contact;
