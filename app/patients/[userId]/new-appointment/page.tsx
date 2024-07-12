import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen py-2">
      
      <Image
        src="/assets/images/img-2.jpg"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[50%] bg-bottom"
      />
      <div className="card remove-scrollbar container max-w-[600px] w-full">
        <div className="sub-container flex-1 justify-between">
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
        </div>
      </div>

    </div>
  );
};

export default Appointment;
