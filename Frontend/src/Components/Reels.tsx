import React from 'react';

interface ReelProps {
  id: number;
  videoUrl: string;
  description: string;
}

const Reel: React.FC<ReelProps> = ({ videoUrl, description }) => {
  return (
    <div style={{ height: '100vh', marginBottom: '10px' }}>
      <video src={videoUrl} controls style={{ width: '100%', height: '100%' }} />
      <p>{description}</p>
    </div>
  );
};

export default Reel;
