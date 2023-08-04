import React from 'react';

const VercelIntegration = ({ vercelConfig }) => {
  const integrateVercel = async () => {
    try {
      const response = await fetch('/api/vercel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vercelConfig),
      });

      if (!response.ok) {
        throw new Error('Vercel integration failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="vercelIntegrationId">
      <button onClick={integrateVercel}>Integrate with Vercel</button>
    </div>
  );
};

export default VercelIntegration;
