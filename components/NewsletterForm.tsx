import { useState } from 'react';

export default function NewsletterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Track success or error state

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage(''); // Clear previous messages

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Subscription successful!');
        setIsSuccess(true);
      } else {
        setMessage(`Subscription failed: ${data.error}`);
        setIsSuccess(false);
      }
    } catch (error:any) {
      console.error('Error submitting form:', error.message);
      setMessage('An error occurred. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="w-full mt-6 p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
        <div className="w-1/2">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button
          type="submit"
          className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 p-2 text-center rounded-lg ${
            isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}


