"use client";

import { PatientForm } from '@/components/forms/PatientForm';
import { PasskeyModal } from '@/components/PasskeyModal';

const Appointment = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (

    <section className="items-center gap-6 pb-8">
      {/* Passkey Modal if admin */}
      {isAdmin && <PasskeyModal />}         
            <PatientForm />      
    </section>

  );
};

export default Appointment;
