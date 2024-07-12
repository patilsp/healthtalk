"use client";

import { useUser } from '@clerk/nextjs';

import { PatientForm } from '@/components/forms/PatientForm';
import { PasskeyModal } from '@/components/PasskeyModal';

import { Welcome } from './welcome/page';

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div className="flex items-center justify-center h-screen text-black">Loading...</div>;

  return (

    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {/* Passkey Modal if admin */}
      {isAdmin && <PasskeyModal />}

          {user ? (
            <PatientForm />
          ) : (
            <Welcome />
          )}
      
    </section>

  );
};

export default Home;
