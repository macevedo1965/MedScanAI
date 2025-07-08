import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-[calc(100vh-128px)] items-center justify-center bg-blue-200">
      <Link
        href="/dashboard"
        className="cursor-pointer transition-all duration-200 w-full max-w-md"
      >
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/drugs-512x512.png"
            alt=""
            width={128}
            height={128}
          />
          <span className="text-6xl text-blue-600 font-extrabold">
            MedScanAI
          </span>
        </div>
      </Link>
    </div>
  );
}
