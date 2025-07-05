import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center w-full h-16 bg-blue-100 px-8">
      <Link href="/" className="cursor-pointer transition-all duration-200">
        <div className="flex items-center gap-2">
          <Image
            src="/images/drugs-512x512.png"
            alt="logo-medscanai"
            width={32}
            height={32}
            className=""
          />
          <span className="text-red-700 font-extrabold">MedScanAI</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
