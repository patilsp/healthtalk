import Image from "next/image";
import Link from "next/link";

import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 md:px-[10%] mt-4">
      <div className="flex flex-col items-center p-2 border shadow rounded-md">
        <Image
          src="/assets/gifs/success.gif"
          height={300}
          width={280}
          alt="success"
          className="mb-6"
        />
        <h2 className="header mb-6 max-w-[600px] text-center text-2xl md:text-4xl font-bold">
          Your <span className="text-green-500">appointment request</span> has
          been successfully submitted!
        </h2>
        <p className="text-indigo-500 font-semibold mb-4">We&apos;ll be in touch shortly to confirm.</p>
      

        <div className="w-full p-8">
          <p className="text-gray-700 font-semibold mb-4">Requested appointment details:</p>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="whitespace-nowrap text-gray-700 font-bold">
              Dr. {doctor?.name}
            </p>
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
              className="text-gray-700"
            />
            <p className="text-gray-700">
              {formatDateTime(appointment.schedule).dateTime}
            </p>
          </div>
          
          <Button variant="outline" className="bg-indigo-600 text-white hover:text-white hover:bg-indigo-500 w-full">
            <Link href={`/patients/${userId}/new-appointment`}>New Appointment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestSuccess;
