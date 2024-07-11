"use client";

import { useUser } from '@clerk/nextjs';

import { PatientForm } from '@/components/forms/PatientForm';
import { PasskeyModal } from '@/components/PasskeyModal';

import { Welcome } from './welcome';

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";
  const { user, isLoaded } = useUser();

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
