import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

interface LocalityViewProps {
  name: string;
}

const LocalityView: React.FC<LocalityViewProps> = ({ name }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Locality: {name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          This is the detailed view for the locality named "{name}".
        </p>
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default LocalityView;