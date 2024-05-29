
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ahsq24ap', // replace with your project ID
  dataset: 'production', // replace with your dataset name
  apiVersion: '2024-04-16', // use a specific date version or 'v1' if you prefer
  useCdn: false, // set to `true` to use the CDN for faster responses, `false` for authenticated requests
  token: "skgnKmC5MVzdINCFrLciWyMx8tgcAUShdkkYPcrPayRCGy7V7B2KdF3p0eD78uQobKmnN0MfH3c7WAxQElGK8bo5j10pEpx8E2k8biQEYdcPN2W9W146ua7TErKTVH4qm85TcdusakEb1GSUiReNFLYwoFcpJkGJrtSAAPcKDMcdiG33MJH6", // create an API token in Sanity and set it in your .env.local file
  
});

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Log the incoming request body for debugging
    console.log('Incoming request body:', req.body);

    try {
      const result = await client.create({
        _type: 'contact',
        name,
        email,
        phone,
        body: message,

      });

      // Log the result from the Sanity API for debugging
      console.log('Sanity create result:', result);

      res.status(200).json({ message: 'Contact form submited successfully' });
    } catch (error:any) {
      // Log the error message and stack trace
      console.error('Error adding subscriber:', error.message);
      console.error(error.stack);

      res.status(500).json({ error: 'Error adding contact form' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
