import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define your Zod schema
const schema = z.object({
  name: z.string().min(3, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

export default function NewsletterForm() {
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Track success or error state

  // Use React Hook Form with Zod resolver
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: any) => {
    setMessage(''); // Clear previous messages

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('Subscription successful!');
        setIsSuccess(true);
        reset(); // Clear the form fields
        // Clear the message after 1 second
        setTimeout(() => {
          setMessage('');
          setIsSuccess(false);
        }, 3000);
      } else {
        setMessage(`Subscription failed: ${result.error}`);
        setIsSuccess(false);
      }
    } catch (error: any) {
      console.error('Error submitting form:', error.message);
      setMessage('An error occurred. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="w-full mt-6 p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center">
        <div className="w-1/2">
          <label className="block text-gray-700">Name<span className='text-red-500'>*</span></label>
          <input
            type="text"
            placeholder='Your name'
            {...register('name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Email<span className='text-red-500'>*</span></label>
          <input
            type="email"
            placeholder='Your email'
            {...register('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
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
