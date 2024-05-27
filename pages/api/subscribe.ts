// pages/api/subscribe.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ahsq24ap', // replace with your project ID
  dataset: 'production', // replace with your dataset name
  apiVersion: '2024-04-16', // use a specific date version or 'v1' if you prefer
  useCdn: false, // set to `true` to use the CDN for faster responses, `false` for authenticated requests
  token: 'skgnKmC5MVzdINCFrLciWyMx8tgcAUShdkkYPcrPayRCGy7V7B2KdF3p0eD78uQobKmnN0MfH3c7WAxQElGK8bo5j10pEpx8E2k8biQEYdcPN2W9W146ua7TErKTVH4qm85TcdusakEb1GSUiReNFLYwoFcpJkGJrtSAAPcKDMcdiG33MJH6', // replace with a token with write access
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Log the incoming request body for debugging
    console.log('Incoming request body:', req.body);

    try {
      const result = await client.create({
        _type: 'subscriber',
        name,
        email,
        password,

      });

      // Log the result from the Sanity API for debugging
      console.log('Sanity create result:', result);

      res.status(200).json({ message: 'Subscriber added successfully' });
    } catch (error) {
      // Log the error message and stack trace
      console.error('Error adding subscriber:', error.message);
      console.error(error.stack);

      res.status(500).json({ error: 'Error adding subscriber' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
