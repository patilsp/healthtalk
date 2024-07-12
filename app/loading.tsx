import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen text-black">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/icons/loader.svg"
          alt="loader"
          width={100}
          height={100}
          className="animate-spin"
        />
        <span>Loading ...</span>
      </div>
    </div>
  );
}
