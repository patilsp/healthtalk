"use client";

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

import { PatientForm } from '@/components/forms/PatientForm';
import { PasskeyModal } from '@/components/PasskeyModal';

import { Welcome } from './welcome';

// Define the type for searchParams
interface SearchParams {
  admin?: string; // Adjust based on actual structure
}

// Define the props interface
interface HomeProps {
  searchParams: SearchParams;
}

// Apply the props interface to the component
const Home: React.FC<HomeProps> = ({ searchParams }) => {
  const { user, isLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(searchParams?.admin === 'true');
  }, [searchParams]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex h-full min-h-screen flex-col">
      {/* Passkey Modal if admin */}
      {isAdmin && <PasskeyModal />}
      
      <div className="w-full px-4">
        {user ? (
          <PatientForm />
        ) : (
          <Welcome />
        )}
      </div>
    </div>
  );
};

export default Home;
