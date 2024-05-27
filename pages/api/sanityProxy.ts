// pages/api/sanityProxy.js

import fetch from 'isomorphic-fetch';

export default async function handler(req, res) {
  const { method, body } = req;

  try {
    const response = await fetch('https://ahsq24ap.api.sanity.io/v2024-04-16/data/mutate/production', {
      method,
      headers: {
        'Content-Type': 'application/json',
        // Add any other required headers here
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy error' });
  }
}
