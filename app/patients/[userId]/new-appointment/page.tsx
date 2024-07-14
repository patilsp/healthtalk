import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex flex-col md:flex-row h-screen max-h-screen py-2 md:p-10">
      {/* Form Section */}
      <div className="flex flex-col md:w-1/2 items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[550px] border shadow-lg rounded-lg p-4 bg-primary">
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
        </div>
      </div>
      
      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/assets/images/img-2.jpg"
          height={1500}
          width={1500}
          alt="appointment"
          className="object-cover size-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Appointment;
